"use client";

import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/portfolio", label: t("nav.portfolio") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const LanguagePills = () => (
    <div className="flex items-center border border-[rgba(255,255,255,0.1)] rounded-full overflow-hidden bg-[rgba(255,255,255,0.03)]">
      <button
        onClick={() => setLanguage("es")}
        className={`h-8 px-3 text-sm font-medium transition-all duration-200 ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Espanol"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`h-8 px-3 text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 pt-6 pb-4 relative z-50">
      <nav
        className={`flex items-center justify-between px-5 py-3 max-w-2xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "glass border border-[rgba(45,212,191,0.2)] shadow-xl shadow-primary/10"
            : "glass-light border border-[rgba(255,255,255,0.06)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="flex items-center gap-1.5 relative">
            <span className="text-primary font-bold text-sm font-mono tracking-tight drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">
              &lt;/&gt;
            </span>
            <span className="font-bold text-sm tracking-tight leading-none">
              <span className="gradient-text">EA</span>
              <span className="text-foreground">DevLab</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium leading-5 transition-all duration-200 ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <LanguagePills />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-foreground rounded-lg flex items-center justify-center hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Contact Button */}
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 h-10 shrink-0 transition-all duration-200 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline ml-2 text-sm font-medium">
                {t("nav.contact")}
              </span>
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-4 right-4 top-full mt-2 bg-card/95 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-4 text-[15px] font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.03)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher - Mobile */}
          <div className="flex justify-center py-4 border-t border-[rgba(255,255,255,0.06)] mt-2">
            <LanguagePills />
          </div>

          <Link
            href="/contact"
            className={`px-6 py-4 text-[15px] font-medium transition-all duration-200 ${
              isActive("/contact")
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.03)]"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
