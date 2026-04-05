"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "portfolio.project1Title",
      descKey: "portfolio.project1Desc",
      tag: "UI/UX Design",
      logo: "/images/kova-logo.svg",
      bgColor: "from-[#0F172A] to-[#1E293B]",
      illustration: "/images/kova-preview.svg",
      slug: "kova-studio",
      accentColor: "#2563EB",
    },
    {
      titleKey: "portfolio.project2Title",
      descKey: "portfolio.project2Desc",
      tag: "SaaS Design",
      logo: "/images/flowdesk-logo.svg",
      bgColor: "from-[#0F172A] to-[#1E293B]",
      illustration: "/images/flowdesk-preview.svg",
      slug: "flow-desk",
      accentColor: "#06B6D4",
    },
    {
      titleKey: "portfolio.project3Title",
      descKey: "portfolio.project3Desc",
      tag: "Web Design",
      logo: "/images/wp-logo.svg",
      bgColor: "from-[#1E3A5F] to-[#21759B]",
      illustration: "/images/wp-preview.svg",
      slug: "wordpress-project",
      comingSoon: true,
      accentColor: "#21759B",
    },
  ]

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
            <div className="text-center mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-[-0.02em]">
                {t("portfolio.title1")}{" "}
                <span className="gradient-text">{t("portfolio.title2")}</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                {t("portfolioPage.description")}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-1 md:grid-cols-2 bg-card/50 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
                >
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${t(project.titleKey)} logo`}
                        width={120}
                        height={32}
                        className="h-6 md:h-8 w-auto brightness-200 opacity-80"
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

                    {project.comingSoon ? (
                      <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full w-fit bg-muted/50 text-muted-foreground border border-[rgba(255,255,255,0.06)]">
                        {t("portfolio.comingSoon")}
                      </span>
                    ) : (
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group/link text-sm md:text-base"
                      >
                        {t("portfolio.viewCase")}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>

                  {/* Image */}
                  <div className={`relative overflow-hidden min-h-[240px] sm:min-h-[300px] md:min-h-[420px] order-1 md:order-2 bg-gradient-to-br ${project.bgColor}`}>
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 flex items-center justify-center">
                        <span className="bg-card/90 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] text-foreground text-sm font-medium px-6 py-3 rounded-full">
                          {t("portfolio.comingSoon")}
                        </span>
                      </div>
                    )}
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
