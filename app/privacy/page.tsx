"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/60 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-[-0.02em]">
                {t("privacy.title")}
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                {t("privacy.lastUpdated")}
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("privacy.description")}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
