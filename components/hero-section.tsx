"use client";

import { Mail, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Glowing orb behind headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 min-w-0">
            <h1 className="text-[40px] leading-[1.1] sm:text-[52px] md:text-[72px] lg:text-[84px] font-bold tracking-[-0.03em]">
              {t("hero.title1")}{" "}
              <span className="gradient-text">{t("hero.brand")}</span>
              {t("hero.title2")}{" "}
              <span className="gradient-text">{t("hero.highlight")}</span>
              {t("hero.journey") !== "hero.journey" && ` ${t("hero.journey")}`}
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 px-8 md:py-6 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5">
                  <Mail className="w-5 h-5" />
                  {t("hero.getInTouch")}
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-transparent border border-[rgba(255,255,255,0.1)] text-foreground hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] rounded-xl py-5 px-8 md:py-6 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FolderOpen className="w-5 h-5" />
                  {t("hero.viewPortfolio")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end min-w-0">
            {/* Premium floating card with code mockup */}
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-2xl">
                {/* Card header - browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-[rgba(255,255,255,0.05)] rounded-md text-xs text-muted-foreground font-mono">
                      eadevlab.com
                    </div>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">1</span>
                      <span className="text-primary">const</span>
                      <span className="text-foreground">project</span>
                      <span className="text-muted-foreground">=</span>
                      <span className="text-accent">{"{"}</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-muted-foreground">2</span>
                      <span className="text-foreground">name:</span>
                      <span className="text-green-400">{'"Your Vision"'}</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-muted-foreground">3</span>
                      <span className="text-foreground">tech:</span>
                      <span className="text-accent">{"["}</span>
                      <span className="text-green-400">{'"Node.JS"'}</span>
                      <span className="text-muted-foreground">,</span>
                      <span className="text-green-400">{'"React"'}</span>
                      <span className="text-accent">{"]"}</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-muted-foreground">4</span>
                      <span className="text-foreground">status:</span>
                      <span className="text-green-400">{'"Building"'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">5</span>
                      <span className="text-accent">{"}"}</span>
                      <span className="text-muted-foreground">;</span>
                    </div>
                  </div>

                  {/* Animated cursor */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-muted-foreground">6</span>
                    <span className="w-2 h-5 bg-primary animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg shadow-primary/20 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10 scale-95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
