"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

interface Testimonial {
  quoteKey: string;
  authorKey: string;
  roleKey: string;
  companyKey?: string;
  logo?: string;
  logoAlt?: string;
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
    },
    {
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2",
      roleKey: "testimonials.role2",
      companyKey: "testimonials.company2",
    },
    {
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
      roleKey: "testimonials.role3",
      companyKey: "testimonials.company3",
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

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

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-foreground hover:bg-card hover:border-[rgba(255,255,255,0.15)] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-foreground hover:bg-card hover:border-[rgba(255,255,255,0.15)] transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main testimonial card */}
            <div className="relative bg-card/60 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Gradient accent border on left */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
              
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Large decorative quote */}
              <div className="absolute top-4 right-8 text-[120px] md:text-[180px] font-serif text-primary/5 leading-none pointer-events-none select-none">
                &ldquo;
              </div>

              <div className="relative pt-4">
                <div
                  className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                >
                  <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-foreground/90 italic">
                    &ldquo;{t(currentTestimonial.quoteKey)}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Avatar with gradient border */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-full opacity-70" />
                      <div className="relative w-14 h-14 rounded-full bg-card border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {t(currentTestimonial.authorKey).split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-base md:text-lg text-foreground truncate">
                        {t(currentTestimonial.authorKey)}
                      </div>
                      <div className="text-muted-foreground text-sm md:text-base flex items-center gap-2 flex-wrap">
                        <span>{t(currentTestimonial.roleKey)}</span>
                        <span className="text-[rgba(255,255,255,0.2)]">|</span>
                        {currentTestimonial.logo ? (
                          <Image
                            src={currentTestimonial.logo}
                            alt={currentTestimonial.logoAlt || ""}
                            width={72}
                            height={18}
                            className="h-4 w-auto inline-block brightness-200 opacity-70"
                          />
                        ) : currentTestimonial.companyKey ? (
                          <span className="font-medium">{t(currentTestimonial.companyKey)}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Subtle glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10 scale-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
