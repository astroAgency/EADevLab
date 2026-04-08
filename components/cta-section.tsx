"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function CTASection() {
  const { t } = useLanguage()
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14b8a6] to-accent animate-gradient" />
          
          {/* Overlay pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20" />
          
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          
          <div className="relative p-10 md:p-16 lg:p-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-[-0.02em]">
              {t("cta.title1")}{" "}
              <span className="text-white/90 underline decoration-white/30 underline-offset-4">
                {t("cta.title2")}
              </span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-[1.7]">
              {t("cta.description")}
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-xl py-5 px-10 md:py-6 md:px-14 text-base md:text-lg font-semibold h-auto transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 group">
                {t("cta.button")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
