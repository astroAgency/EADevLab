"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ArrowRight, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const projects = {
  "kova-studio": {
    titleKey: "portfolio.project1Title",
    descKey: "portfolio.project1Desc",
    tag: "UI/UX Design",
    logo: "/images/kova-logo.svg",
    bgColor: "from-[#0F172A] to-[#1E293B]",
    illustration: "/images/kova-preview.svg",
    client: "Kova Studio",
    date: "2025",
    duration: "portfolio.duration1",
    team: "portfolio.team2",
    accentColor: "#2563EB",
    link: "https://kovastudio.vercel.app/",
  },
  "flow-desk": {
    titleKey: "portfolio.project2Title",
    descKey: "portfolio.project2Desc",
    tag: "SaaS Design",
    logo: "/images/flowdesk-logo.svg",
    bgColor: "from-[#0F172A] to-[#1E293B]",
    illustration: "/images/flowdesk-preview.svg",
    client: "Flow Desk",
    date: "2025",
    duration: "portfolio.duration2",
    team: "portfolio.team2",
    accentColor: "#06B6D4",
    link: "https://flowdeskdashboard.vercel.app/",
  },
  "wordpress-project": {
    titleKey: "portfolio.project3Title",
    descKey: "portfolio.project3Desc",
    tag: "Web Design",
    logo: "/images/wp-logo.svg",
    bgColor: "from-[#1E3A5F] to-[#21759B]",
    illustration: "/images/wp-preview.svg",
    client: "portfolio.client3",
    date: "2025",
    duration: "portfolio.duration3",
    team: "portfolio.team3",
    accentColor: "#21759B",
    link: "#",
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
              <span
                className="inline-block text-xs font-medium px-3 py-1.5 rounded-full mb-4 border"
                style={{
                  backgroundColor: `${project.accentColor}15`,
                  borderColor: `${project.accentColor}30`,
                  color: project.accentColor,
                }}
              >
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
                  {t(project.client)}
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
