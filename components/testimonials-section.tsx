"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, testimonials.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, testimonials.length, goToSlide]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Chevron Button */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-foreground hover:bg-card hover:border-[rgba(255,255,255,0.2)] transition-all duration-200 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-foreground hover:bg-card hover:border-[rgba(255,255,255,0.2)] transition-all duration-200 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Testimonial Card */}
            <div
              className={`relative glass border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12 transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-8 md:left-12 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="pt-6">
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < currentTestimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-foreground/90 italic">
                  &ldquo;{t(currentTestimonial.quoteKey)}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  {/* Avatar with gradient border */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full opacity-70" />
                    <div className="relative w-14 h-14 rounded-full bg-card border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {t(currentTestimonial.authorKey)
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-base md:text-lg text-foreground">
                      {t(currentTestimonial.authorKey)}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base flex items-center gap-2 flex-wrap">
                      <span>{t(currentTestimonial.roleKey)}</span>
                      {(currentTestimonial.logo || currentTestimonial.companyKey) && (
                        <>
                          <span className="text-[rgba(255,255,255,0.2)]">|</span>
                          {currentTestimonial.logo ? (
                            <Image
                              src={currentTestimonial.logo}
                              alt={currentTestimonial.logoAlt || ""}
                              width={80}
                              height={20}
                              className="h-4 w-auto inline-block brightness-200 opacity-70"
                            />
                          ) : currentTestimonial.companyKey ? (
                            <span className="font-medium">
                              {t(currentTestimonial.companyKey)}
                            </span>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Subtle glow behind card */}
          <div className="absolute inset-x-0 top-1/2 h-96 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl -z-10 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
