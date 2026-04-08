"use client";

import {
  Mail,
  Phone,
  Check,
  AlertCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { useState } from "react";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setSubscribed(true);
      setEmail("");

      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <footer className="relative bg-card border-t border-[rgba(255,255,255,0.06)]">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter section */}
          <div className="mb-16 md:mb-20">
            <div className="relative bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2" />

              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                  <Image
                    src="/images/newsletter-icon.png"
                    alt="Newsletter"
                    width={64}
                    height={64}
                    className="object-cover opacity-90"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {t("footer.subscribe")}
                  </h3>
                  {error && (
                    <p className="text-red-400 text-sm flex items-center justify-center lg:justify-start gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </p>
                  )}
                  {subscribed && (
                    <p className="text-green-400 text-sm flex items-center justify-center lg:justify-start gap-1">
                      <Check className="w-4 h-4" />
                      {t("footer.subscribeSuccess")}
                    </p>
                  )}
                </div>

                {/* Desktop input */}
                <div className="hidden sm:block relative w-full lg:w-auto lg:min-w-[400px]">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.emailPlaceholder")}
                    className="bg-background/50 border-[rgba(255,255,255,0.1)] rounded-xl px-5 h-14 pr-36 text-base placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                  />
                  <Button
                    onClick={handleNewsletterSubmit}
                    disabled={isSubmitting || !isValidEmail}
                    className="absolute right-2 top-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 h-10 text-sm font-semibold disabled:opacity-50 transition-all duration-200 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    ) : subscribed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <>
                        {t("footer.subscribeBtn")}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Mobile input */}
                <div className="flex sm:hidden flex-col w-full gap-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.emailPlaceholder")}
                    className="bg-background/50 border-[rgba(255,255,255,0.1)] rounded-xl px-5 h-14 text-base placeholder:text-muted-foreground w-full"
                  />
                  <Button
                    onClick={handleNewsletterSubmit}
                    disabled={isSubmitting || !isValidEmail}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold w-full disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    ) : subscribed ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        {t("footer.subscribeSuccess")}
                      </span>
                    ) : (
                      t("footer.subscribeBtn")
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-primary font-bold text-sm font-mono tracking-tight drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">
                  &lt;/&gt;
                </span>
                <span className="font-bold text-sm tracking-tight leading-none">
                  <span className="gradient-text">EA</span>
                  <span className="text-foreground">DevLab</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("footer.description")}
              </p>
              {/* Social Media */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://web.facebook.com/profile.php?id=61575408789544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/eadevlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/EADevLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("footer.pages")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.portfolio")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/kova-studio"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.singleProject")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("footer.utilityPages")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("footer.contactUs")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                    eadev@eadevlab.com
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+573014874711"
                    className="hover:text-foreground transition-colors"
                  >
                    +57301 487 4711
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex justify-center">
            <p className="text-muted-foreground text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
