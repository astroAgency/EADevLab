"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function PortfolioSection() {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "portfolio.project1Title",
      descKey: "portfolio.project1Desc",
      tag: "UI/UX Design",
      logo: "/images/kova-logo.svg",
      bgColor: "from-[#0F172A] to-[#1E293B]",
      illustration: "/images/kova-preview.svg",
      slug: "kova-studio",
      accentColor: "#2dd4bf",
    },
    {
      titleKey: "portfolio.project2Title",
      descKey: "portfolio.project2Desc",
      tag: "SaaS Design",
      logo: "/images/flowdesk-logo.svg",
      bgColor: "from-[#0F172A] to-[#1E293B]",
      illustration: "/images/flowdesk-preview.svg",
      slug: "flow-desk",
      accentColor: "#10b981",
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[-0.02em]">
              {t("portfolio.title1")}{" "}
              <span className="gradient-text">
                {t("portfolio.title2")}
              </span>
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-2 bg-card/50 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
              >
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center mb-5">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`${t(project.titleKey)} logo`}
                      width={120}
                      height={34}
                      className="h-auto object-contain brightness-200 opacity-80"
                    />
                  </div>

                  <span 
                    className="inline-block text-xs font-medium px-3 py-1.5 rounded-full mb-6 w-fit border"
                    style={{ 
                      backgroundColor: `${project.accentColor}15`,
                      borderColor: `${project.accentColor}30`,
                      color: project.accentColor 
                    }}
                  >
                    {project.tag}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-foreground">
                    {t(project.titleKey)}
                  </h3>

                  <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                    {t(project.descKey)}
                  </p>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group/link text-sm md:text-base"
                  >
                    {t("portfolio.viewCase")}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={`relative overflow-hidden min-h-[240px] sm:min-h-[300px] md:min-h-[420px] order-1 md:order-2 bg-gradient-to-br ${project.bgColor}`}
                >
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                </div>
              </div>
            ))}

            {/* Coming Soon Placeholder Card */}
            <div className="group flex items-center justify-center bg-card/30 border-2 border-dashed border-[rgba(255,255,255,0.12)] rounded-2xl overflow-hidden opacity-60 min-h-[200px] md:min-h-[280px] hover:opacity-70 hover:border-[rgba(255,255,255,0.18)] transition-all duration-300">
              <div className="text-center px-6 py-12">
                <div className="w-16 h-16 rounded-2xl bg-muted/20 border border-[rgba(255,255,255,0.08)] flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl text-muted-foreground/50">?</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-muted-foreground mb-2">
                  {t("portfolio.newProject")} — {t("portfolio.comingSoon")}
                </h3>
                <p className="text-sm text-muted-foreground/60 max-w-md">
                  {t("portfolio.comingSoonDesc")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/portfolio">
              <button className="group bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.08)] text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-card hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 flex items-center gap-3 text-sm md:text-base">
                <ExternalLink className="w-5 h-5" />
                {t("portfolio.browseAll")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
