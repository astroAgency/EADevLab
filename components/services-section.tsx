"use client"

import { Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function ServicesSection() {
  const { t } = useLanguage()
  
  const services = [
    {
      titleKey: "services.webDesign",
      descKey: "services.webDesignDesc",
      image: "/images/web-design.svg",
      accentColor: "#2dd4bf",
    },
    {
      titleKey: "services.uiux",
      descKey: "services.uiuxDesc",
      image: "/images/ui-ux-design.svg",
      accentColor: "#14b8a6",
    },
    {
      titleKey: "services.productDesign",
      descKey: "services.productDesignDesc",
      image: "/images/product-design.svg",
      accentColor: "#0d9488",
    },
    {
      titleKey: "services.userResearch",
      descKey: "services.userResearchDesc",
      image: "/images/user-research.svg",
      accentColor: "#10B981",
    },
    {
      titleKey: "services.motionGraphics",
      descKey: "services.motionGraphicsDesc",
      image: "/images/motion-graphics.svg",
      accentColor: "#F59E0B",
    },
  ]

  return (
    <section className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-[-0.02em]">
              {t("services.title1")}{" "}
              <span className="gradient-text">{t("services.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)] min-h-[400px] md:min-h-[480px] flex flex-col"
                style={{
                  ['--accent-color' as string]: service.accentColor,
                }}
              >
                {/* Hover glow effect on top */}
                <div 
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)` }}
                />
                
                <div className="relative mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50 z-10" />
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={t(service.titleKey)}
                    width={382}
                    height={280}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>
                <div className="px-6 pb-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{t(service.titleKey)}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{t(service.descKey)}</p>
                </div>
              </div>
            ))}

            {/* Get in Touch CTA Card */}
            <div className="relative bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[480px] md:col-span-2 lg:col-span-1 overflow-hidden group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">{t("services.getInTouch")}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8 max-w-xs">
                  {t("services.getInTouchDesc")}
                </p>
                <Link href="/contact" className="w-full max-w-[280px]">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-5 font-semibold text-base w-full h-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-0.5">
                    <Mail className="w-5 h-5 mr-2" />
                    {t("services.getInTouch")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
