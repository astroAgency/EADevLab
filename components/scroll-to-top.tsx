"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

import WhatsApp from "@/public/logos/whatsapp.svg";
import Image from "next/image";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-primary/90 transition-all duration-300 z-50 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 backdrop-blur-sm ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <a
        href="https://wa.me/+573014874711?text=Hola%21%20Vi%20tu%20perfil%20y%20estoy%20interesado%20en%20tus%20servicios.%20Necesito%20un%20sitio%20web%20para%20mi%20negocio%2C%20puedes%20ayudarme%3F%20"
        onClick={scrollToTop}
        className={`fixed bottom-6.5 right-20 w-10 h-10 bg-primary text-primary-foreground rounded-[100%] flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-primary/90 transition-all duration-300 z-50 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 backdrop-blur-sm opacity-100 translate-y-0"
        }`}
        aria-label="Scroll to top"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={WhatsApp} width={25} height={25} alt="Whatsapp Icon" />
      </a>
    </>
  );
}
