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
      logo: "/logos/wordpress.svg",
      alt: "Wordpress",
      link: "https://www.wordpress.com",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-55 bg-linear-to-r from-background to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-55 bg-linear-to-l from-background to-transparent z-20" />

      {/* Subtle top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />

      <div className="flex items-center gap-5 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-80 hover:opacity-60 transition-opacity duration-300"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                width={100}
                height={100}
                src={item.logo || "/placeholder.svg"}
                alt={item.alt}
                className="w-20 h-22 object-contain m-15 grayscale brightness-200 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
