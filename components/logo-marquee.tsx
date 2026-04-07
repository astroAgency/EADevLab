"use client";

import Image from "next/image";

export function LogoMarquee() {
  const items = [
    { logo: "/logos/figma.svg", alt: "Figma", link: "https://www.figma.com" },
    { logo: "/logos/adobe.svg", alt: "Adobe", link: "https://www.adobe.com" },
    {
      logo: "/logos/framer.svg",
      alt: "Framer",
      link: "https://www.framer.com",
    },
    { logo: "/logos/notion.svg", alt: "Notion", link: "https://www.notion.so" },
    {
      logo: "/logos/webflow.svg",
      alt: "Webflow",
      link: "https://www.webflow.com",
    },
    {
      logo: "/logos/wordpress.svg",
      alt: "WordPress",
      link: "https://www.wordpress.com",
    },
  ];

  return (
    <div className="relative overflow-hidden py-8 bg-card/30">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-20" />

      {/* Subtle top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.15)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.15)] to-transparent" />

      <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center shrink-0"
          >
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                width={100}
                height={40}
                src={item.logo || "/placeholder.svg"}
                alt={item.alt}
                className="h-8 md:h-10 w-auto object-contain grayscale brightness-200 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
