import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;

  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hourInMs });
    return true;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hourInMs });
    return true;
  }

  if (record.count >= 3) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID!;

    const { data: existingContact, error: fetchError } =
      await resend.contacts.get({
        email,
        audienceId,
      });

    if (fetchError) {
      if ((fetchError as any).statusCode !== 404) {
        console.error("error checking contact: ", fetchError);
        return NextResponse.json(
          { error: "Failed to subscribe. Please try again." },
          { status: 500 },
        );
      }
    }

    if (existingContact && !existingContact.unsubscribed) {
      return NextResponse.json(
        {
          error: "This email is already subscribed to our newsletter.",
        },
        { status: 409 },
      );
    }
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    // Send welcome email to subscriber
    const { error } = await resend.emails.send({
      from: "EADevLab <onboarding@send.eadevlab.com>",
      to: email,
      subject: "Welcome to EADevLab Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2dd4bf 0%, #10b981 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to EADev!</h1>
          </div>
          <div style="background: #0a1f1d; padding: 30px 20px; border: 1px solid rgba(45, 212, 191, 0.2); border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #e8faf8; font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to our newsletter! You&apos;ll now receive updates about:
            </p>
            <ul style="color: #7ecec4; font-size: 16px; line-height: 1.8;">
              <li>Latest web design trends and tips</li>
              <li>New services and features</li>
              <li>Exclusive offers and discounts</li>
              <li>Case studies and success stories</li>
            </ul>
            <p style="color: #e8faf8; font-size: 16px; line-height: 1.6;">
              We&apos;re excited to have you on board!
            </p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://eadevlab.com/" style="background: linear-gradient(135deg, #2dd4bf, #10b981); color: #050f0e; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
            You can unsubscribe at any time by clicking the link in our emails.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
