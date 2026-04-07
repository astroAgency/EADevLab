"use client";

import Image from "next/image";

export function LogoMarquee() {
  const items = [
    { logo: "/logos/figma.svg", alt: "Figma", link: "https://www.figma.com" },
    { logo: "/logos/adobe.svg", alt: "Adobe", link: "https://www.adobe.com" },
    { logo: "/logos/framer.svg", alt: "Framer", link: "https://www.framer.com" },
    { logo: "/logos/notion.svg", alt: "Notion", link: "https://www.notion.so" },
    { logo: "/logos/wordpress.svg", alt: "Wordpress", link: "https://www.wordpress.com" },
  ];

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="relative py-8 md:py-12 overflow-hidden border-y border-[rgba(255,255,255,0.04)]">
      {/* Gradient fade edges - enhanced for smooth blending */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-6 md:mx-10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            aria-label={`Visit ${item.alt} website`}
          >
            {/* Consistent logo container: 120px x 60px on desktop, scales down on mobile */}
            <div className="relative flex items-center justify-center w-[80px] h-[40px] md:w-[120px] md:h-[60px] transition-all duration-300">
              <Image
                src={item.logo || "/placeholder.svg"}
                alt={item.alt}
                width={120}
                height={60}
                className="w-full h-full object-contain grayscale brightness-200 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ease-out group-hover:scale-110"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
