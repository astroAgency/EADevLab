"use client"

import { useLanguage } from "@/context/language-context"

const tools = [
  {
    name: "Figma",
    category: "UI/UX Design",
    color: "#A259FF",
  },
  {
    name: "Webflow",
    category: "Web Design",
    color: "#146EF5",
  },
  {
    name: "WordPress",
    category: "Web Dev",
    color: "#21759B",
  },
  {
    name: "Framer",
    category: "Prototyping",
    color: "#0099F7",
  },
  {
    name: "Notion",
    category: "Productivity",
    color: "#FFFFFF",
  },
  {
    name: "Adobe Illustrator",
    category: "Branding",
    color: "#FF9A00",
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="pt-0 md:pt-12 md:sticky md:top-24 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-[-0.02em] text-foreground">
              {t("skills.title1")}{" "}
              <span className="gradient-text">{t("skills.title2")}</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg max-w-lg">
              {t("skills.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5 md:p-6 hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${tool.color}50, transparent)` }}
                />
                
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg md:text-xl relative overflow-hidden"
                  style={{ 
                    backgroundColor: `${tool.color}20`,
                    border: `1px solid ${tool.color}30`
                  }}
                >
                  <span style={{ color: tool.color }}>{tool.name.charAt(0)}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
