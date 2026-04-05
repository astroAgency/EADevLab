"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { Mail, Users, Award, Clock, Target, Check } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-[-0.02em]">
                {t("about.title1")}{" "}
                <span className="gradient-text">
                  {t("about.title2")}
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                {t("about.description")}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
              <div className="flex justify-center">
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
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                        {t("about.experience")}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg">
                        {t("about.experienceDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                        {t("about.projects")}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg">
                        {t("about.projectsDesc")}
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 px-8 md:py-6 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5 mt-4">
                    <Mail className="w-5 h-5" />
                    {t("hero.getInTouch")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group relative bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1">
                {/* Hover glow */}
                <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t("aboutPage.mission")}
                </h3>
                <p className="text-muted-foreground">{t("aboutPage.missionDesc")}</p>
              </div>

              <div className="group relative bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1">
                {/* Hover glow */}
                <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-accent to-transparent" />
                
                <div className="w-14 h-14 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{t("aboutPage.team")}</h3>
                <p className="text-muted-foreground">{t("aboutPage.teamDesc")}</p>
              </div>

              <div className="group relative bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1">
                {/* Hover glow */}
                <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#0d9488] to-transparent" />
                
                <div className="w-14 h-14 bg-[#0d9488]/20 border border-[#0d9488]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0d9488]/30 transition-colors">
                  <Award className="w-7 h-7 text-[#0d9488]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t("aboutPage.quality")}
                </h3>
                <p className="text-muted-foreground">{t("aboutPage.qualityDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
