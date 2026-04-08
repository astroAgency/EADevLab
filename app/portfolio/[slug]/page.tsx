"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Clock,
  Search,
  Palette,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const projects = {
  "kova-studio": {
    titleKey: "portfolio.project1Title",
    descKey: "portfolio.project1Desc",
    tag: "UI/UX Design",
    category: "uiux",
    logo: "/images/kova-logo.svg",
    bgColor: "from-[#0F172A] to-[#1E293B]",
    illustration: "/images/kova-screen1.png",
    screenshots: [
      "/images/kova-screen1.png",
      "/images/kova-screen2.png",
      "/images/kova-screen3.png",
      "/images/kova-screen4.png",
    ],
    client: "Kova Studio",
    date: "2025",
    duration: "portfolio.duration1",
    team: "portfolio.team2",
    accentColor: "#2563EB",
    link: "https://kovastudio.vercel.app/",
    tools: ["Figma", "Framer", "Notion"],
    caseStudyPrefix: "caseStudy.kova",
    screens: {
      1: "/images/kova-screen1.png",
      2: "/images/kova-screen2.png",
      3: "/images/kova-screen3.png",
      4: "/images/kova-screen4.png",
    },
  },
  "flow-desk": {
    titleKey: "portfolio.project2Title",
    descKey: "portfolio.project2Desc",
    tag: "SaaS Design",
    category: "saas",
    logo: "/images/flowdesk-logo.svg",
    bgColor: "from-[#0F172A] to-[#1E293B]",
    illustration: "/images/flowdesk-screen1.png",
    screenshots: [
      "/images/flowdesk-screen1.png",
      "/images/flowdesk-screen2.png",
      "/images/flowdesk-screen3.png",
      "/images/flowdesk-screen4.png",
    ],
    client: "Flow Desk",
    date: "2025",
    duration: "portfolio.duration2",
    team: "portfolio.team2",
    accentColor: "#06B6D4",
    link: "https://flowdeskdashboard.vercel.app/",
    tools: ["Figma", "Framer", "Notion", "Miro"],
    caseStudyPrefix: "caseStudy.flowdesk",
    screens: {
      1: "/images/flowdesk-screen1.png",
      2: "/images/flowdesk-screen2.png",
      3: "/images/flowdesk-screen3.png",
      4: "/images/flowdesk-screen4.png",
    },
  },
};

export default function ProjectPage() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-24 text-center relative">
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {t("project.notFound")}
            </h1>
            <Link href="/portfolio">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("project.backToPortfolio")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.indexOf(slug);
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectKeys.length - 1
      ? projectKeys[currentIndex + 1]
      : null;

  const prefix = project.caseStudyPrefix;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("project.backToPortfolio")}
            </Link>

            {/* Header */}
            <div className="mb-12">
              <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full mb-4 bg-muted/50 text-muted-foreground border border-[rgba(255,255,255,0.08)]">
                {project.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-[-0.02em]">
                {t(project.titleKey)}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {t(project.descKey)}
              </p>
            </div>

            {/* Hero Image */}
            <div
              className={`bg-gradient-to-br ${project.bgColor} border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden mb-12`}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.illustration}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5 md:p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("project.client")}
                  </span>
                </div>
                <p className="font-semibold text-foreground">
                  {project.client}
                </p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5 md:p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("project.date")}
                  </span>
                </div>
                <p className="font-semibold text-foreground">{project.date}</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5 md:p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("project.duration")}
                  </span>
                </div>
                <p className="font-semibold text-foreground">
                  {t(project.duration)}
                </p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5 md:p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("project.team")}
                  </span>
                </div>
                <p className="font-semibold text-foreground">
                  {t(project.team)}
                </p>
              </div>
            </div>

            {/* Tools Used Section */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-12">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t(`${prefix}.tools`)}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-medium px-4 py-2 rounded-full border"
                    style={{
                      backgroundColor: `${project.accentColor}10`,
                      borderColor: `${project.accentColor}25`,
                      color: project.accentColor,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* The Challenge Section */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t(`${prefix}.challenge`)}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {t(`${prefix}.challengeDesc`)}
              </p>
            </div>

            {/* Research & Discovery Section */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t(`${prefix}.research`)}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`${prefix}.researchPoint1`)}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`${prefix}.researchPoint2`)}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`${prefix}.researchPoint3`)}
                  </p>
                </li>
              </ul>
            </div>

            {/* Design Process Section - Horizontal Stepper */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t(`${prefix}.designProcess`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                {/* Step 1 - Discovery */}
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${project.accentColor}15` }}
                  >
                    <Search
                      className="w-7 h-7"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`${prefix}.discovery`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${prefix}.discoveryDesc`)}
                  </p>
                  {/* Connector line - hidden on mobile */}
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5"
                    style={{ backgroundColor: `${project.accentColor}30` }}
                  />
                </div>
                {/* Step 2 - Design */}
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${project.accentColor}15` }}
                  >
                    <Palette
                      className="w-7 h-7"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`${prefix}.design`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${prefix}.designDesc`)}
                  </p>
                  {/* Connector line - hidden on mobile */}
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5"
                    style={{ backgroundColor: `${project.accentColor}30` }}
                  />
                </div>
                {/* Step 3 - Delivery */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${project.accentColor}15` }}
                  >
                    <Package
                      className="w-7 h-7"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`${prefix}.delivery`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${prefix}.deliveryDesc`)}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Screens / Mockups Section */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t(`${prefix}.keyScreens`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.screens).map(([key, src]) => (
                  <div
                    key={key}
                    className="relative aspect-video rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]"
                    style={{ backgroundColor: `${project.accentColor}08` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={src}
                        alt={t("caseStudy.screen")}
                        width={100}
                        height={100}
                        className="w-auto aspect-video"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results & Impact Section */}
            <div className="bg-card/60 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t(`${prefix}.results`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className="rounded-xl p-6 text-center border"
                  style={{
                    backgroundColor: `${project.accentColor}08`,
                    borderColor: `${project.accentColor}20`,
                  }}
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    {t(`${prefix}.stat1Value`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`${prefix}.stat1Label`)}
                  </div>
                </div>
                <div
                  className="rounded-xl p-6 text-center border"
                  style={{
                    backgroundColor: `${project.accentColor}08`,
                    borderColor: `${project.accentColor}20`,
                  }}
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    {t(`${prefix}.stat2Value`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`${prefix}.stat2Label`)}
                  </div>
                </div>
                <div
                  className="rounded-xl p-6 text-center border"
                  style={{
                    backgroundColor: `${project.accentColor}08`,
                    borderColor: `${project.accentColor}20`,
                  }}
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    {t(`${prefix}.stat3Value`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`${prefix}.stat3Label`)}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.06)]">
              {prevProject ? (
                <Link href={`/portfolio/${prevProject}`}>
                  <Button
                    variant="outline"
                    className="bg-transparent border-[rgba(255,255,255,0.1)] text-foreground hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] rounded-xl px-6 py-3 h-auto font-semibold transition-all duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("project.prev")}
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-[rgba(255,255,255,0.1)] text-foreground hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] rounded-xl px-6 py-3 h-auto font-semibold transition-all duration-200"
                >
                  {t("project.goToProject")}
                </Button>
              </Link>
              {nextProject && (
                <Link href={`/portfolio/${nextProject}`}>
                  <Button
                    variant="outline"
                    className="bg-transparent border-[rgba(255,255,255,0.1)] text-foreground hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] rounded-xl px-6 py-3 h-auto font-semibold transition-all duration-200"
                  >
                    {t("project.next")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
