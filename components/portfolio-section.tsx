// NOTE: kova-preview.svg, flowdesk-preview.svg, wp-preview.svg, wp-logo.svg removed – replaced by real screenshots
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
      illustration: "/images/kova-screen1.png",
      slug: "kova-studio",
    },
    {
      titleKey: "portfolio.project2Title",
      descKey: "portfolio.project2Desc",
      tag: "SaaS Design",
      logo: "/images/flowdesk-logo.svg",
      bgColor: "from-[#0F172A] to-[#1E293B]",
      illustration: "/images/flowdesk-screen1.png",
      slug: "flow-desk",
    },
  ];

  return (
    <section className="relative py-24 md:py-36 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

                  <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full mb-6 w-fit bg-muted/50 text-muted-foreground border border-[rgba(255,255,255,0.08)]">
                    {project.tag}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-foreground">
                    {t(project.titleKey)}
                  </h3>

                  <p className="text-base text-muted-foreground mb-8 leading-[1.7]">
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
