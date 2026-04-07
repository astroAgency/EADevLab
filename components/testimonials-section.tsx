"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quoteKey: string;
  authorKey: string;
  roleKey: string;
  companyKey?: string;
  logo?: string;
  logoAlt?: string;
  rating: number;
}

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      quoteKey: "testimonials.quote",
      authorKey: "testimonials.author",
      roleKey: "testimonials.role",
      logo: "/images/kova-logo.svg",
      logoAlt: "KovaStudio",
      rating: 5,
    },
    {
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2",
      roleKey: "testimonials.role2",
      companyKey: "testimonials.company2",
      rating: 5,
    },
    {
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
      roleKey: "testimonials.role3",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 pt-4 md:pt-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.02em]">
              {t("testimonials.title1")}
              <br />
              {t("testimonials.title2").split(" ")[0]}{" "}
              <span className="gradient-text">
                {t("testimonials.title2").split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t("testimonials.description")}
            </p>
          </div>

          {/* Static grid of 3 testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative glass border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary to-transparent" />

                <div className="pt-4">
                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base mb-6 leading-relaxed text-foreground/90 italic">
                    &ldquo;{t(testimonial.quoteKey)}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    {/* Avatar with gradient border */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full opacity-70" />
                      <div className="relative w-10 h-10 rounded-full bg-card border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {t(testimonial.authorKey)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base text-foreground truncate">
                        {t(testimonial.authorKey)}
                      </div>
                      <div className="text-muted-foreground text-xs md:text-sm flex items-center gap-2 flex-wrap">
                        <span>{t(testimonial.roleKey)}</span>
                        {(testimonial.logo || testimonial.companyKey) && (
                          <>
                            <span className="text-[rgba(255,255,255,0.2)]">
                              |
                            </span>
                            {testimonial.logo ? (
                              <Image
                                src={testimonial.logo}
                                alt={testimonial.logoAlt || ""}
                                width={60}
                                height={15}
                                className="h-3 w-auto inline-block brightness-200 opacity-70"
                              />
                            ) : testimonial.companyKey ? (
                              <span className="font-medium">
                                {t(testimonial.companyKey)}
                              </span>
                            ) : null}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle glow behind grid */}
          <div className="absolute inset-x-0 top-1/2 h-96 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl -z-10 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
