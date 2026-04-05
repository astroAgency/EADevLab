import type React from "react";
import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "sonner";

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: {
    default: "EADevLab - Diseño Web y Desarrollo Profesional",
    template: "%s | EADevLab",
  },
  description:
    "Soluciones integrales de diseno web y desarrollo para hacer crecer tu presencia digital con creatividad y profesionalismo. Creamos sitios web que ayudan a tu negocio a crecer.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "UI/UX",
    "sitios web profesionales",
    "Mexico",
    "Colombia",
    "EADevLab",
  ],
  authors: [{ name: "EADevLab" }],
  creator: "EADevLab",
  publisher: "EADevLab",
  metadataBase: new URL("https://eadevlab.com/"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: "https://eadevlab.com/",
    siteName: "EADevLab",
    title: "EADevLab - Diseño Web y Desarrollo Profesional",
    description:
      "Soluciones integrales de diseno web y desarrollo para hacer crecer tu presencia digital con creatividad y profesionalismo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EADevLab - Diseno Web y Desarrollo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EADevLab - Diseño Web y Desarrollo Profesional",
    description:
      "Soluciones integrales de diseno web y desarrollo para hacer crecer tu presencia digital.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  // Deep teal theme
  themeColor: "#050f0e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="es" is the default language - client-side i18n handles switching
    // but the HTML lang attribute cannot be dynamically changed in Server Components
    <html lang="es">
      <body
        className={`${onest.variable} font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <ScrollToTop />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#0a1f1d",
                color: "#e8faf8",
                border: "1px solid rgba(45, 212, 191, 0.1)",
                borderRadius: "12px",
              },
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
