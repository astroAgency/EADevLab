"use client";

import { User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            {/* Abstract gradient orb with code icon */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-full blur-[60px]" />

              {/* Main orb */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card via-card/80 to-secondary border border-[rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />

                {/* Code symbol */}
                <span className="text-primary font-bold font-mono text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]">
                  &lt;/&gt;
                </span>

                {/* Animated ring */}
                <div className="absolute inset-4 rounded-full border border-[rgba(255,255,255,0.05)] animate-pulse" />
              </div>

              {/* Floating stats badges */}
              <div className="absolute -top-4 right-0 px-4 py-2 bg-card/90 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">
                  {t("about.projectsCircle")}
                </div>
              </div>

              <div className="absolute -bottom-4 left-0 px-4 py-2 bg-card/90 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-xs text-muted-foreground">
                  {t("about.experienceCircle")}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-[-0.02em]">
                {t("about.title1")}{" "}
                <span className="gradient-text">{t("about.title2")}</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("about.description")}
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start group">
                <div className="w-6 h-6 rounded-lg bg-primary/20 border border-primary/30 flex-shrink-0 mt-0.5 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">
                    {t("about.experience")}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t("about.experienceDesc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/30 flex-shrink-0 mt-0.5 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">
                    {t("about.projects")}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {t("about.projectsDesc")}
                  </p>
                </div>
              </div>
            </div>

            <Link href="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 px-8 md:py-6 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5">
                <User className="w-5 h-5" />
                {t("about.moreAbout")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
