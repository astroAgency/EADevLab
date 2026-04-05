"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title1": "Creamos sitios web que ayudan a tu",
    "hero.brand": "negocio",
    "hero.title2": " a",
    "hero.highlight": "crecer",
    "hero.description":
      "Ofrecemos soluciones integrales de diseño web y hosting para hacer crecer tu presencia digital con creatividad y profesionalismo.",
    "hero.getInTouch": "Contáctanos",
    "hero.viewPortfolio": "Ver portafolio",

    // About Section
    "about.title1": "¿Quién está detrás de todo este",
    "about.title2": "gran trabajo?",
    "about.description":
      "Somos un equipo apasionado dedicado a crear experiencias digitales excepcionales para nuestros clientes.",
    "about.experience": "15+ años de experiencia",
    "about.experienceDesc":
      "Contamos con amplia experiencia en diseño web, desarrollo y hosting de sitios web profesionales.",
    "about.projects": "100+ proyectos exitosos",
    "about.projectsDesc":
      "Hemos ayudado a más de cien clientes a lograr sus objetivos digitales con soluciones personalizadas.",
    "about.moreAbout": "Más sobre nosotros",
    "about.projectsCircle": "Proyectos",
    "about.experienceCircle": "Años Exp.",

    // About Page
    "aboutPage.mission": "Nuestra Misión",
    "aboutPage.missionDesc":
      "Ayudar a las empresas a crecer en el mundo digital con soluciones web innovadoras y de alta calidad.",
    "aboutPage.team": "Nuestro Equipo",
    "aboutPage.teamDesc":
      "Un grupo de profesionales apasionados por el diseño y el desarrollo web.",
    "aboutPage.quality": "Calidad Garantizada",
    "aboutPage.qualityDesc":
      "Nos comprometemos a entregar proyectos que superen las expectativas de nuestros clientes.",

    // Services Section
    "services.title1": "Nuestro amplio",
    "services.title2": "conjunto de servicios",
    "services.description":
      "Ofrecemos una gama completa de servicios de diseño y desarrollo web para satisfacer todas tus necesidades digitales.",
    "services.webDesign": "Diseño web",
    "services.webDesignDesc":
      "Creamos sitios web modernos, atractivos y funcionales que reflejan la identidad de tu marca.",
    "services.uiux": "Diseño UI/UX",
    "services.uiuxDesc":
      "Diseñamos interfaces intuitivas y experiencias de usuario excepcionales para tus productos digitales.",
    "services.productDesign": "Diseño de producto",
    "services.productDesignDesc":
      "Desarrollamos productos digitales completos desde la conceptualización hasta el lanzamiento.",
    "services.userResearch": "Investigación de usuarios",
    "services.userResearchDesc":
      "Analizamos las necesidades de tus usuarios para crear soluciones que realmente funcionen.",
    "services.motionGraphics": "Motion graphics",
    "services.motionGraphicsDesc":
      "Creamos animaciones y gráficos en movimiento que dan vida a tu contenido digital.",
    "services.getInTouch": "Contáctanos",
    "services.getInTouchDesc":
      "¿Buscas otro servicio? Contáctanos, hay una alta probabilidad de que podamos ayudarte.",

    // Portfolio Section
    "portfolio.title1": "Echa un vistazo a nuestro",
    "portfolio.title2": "portafolio de diseño",
    "portfolio.viewCase": "Ver caso de estudio",
    "portfolio.browseAll": "Ver todo el portafolio",
    "portfolio.comingSoon": "Próximamente",
    "portfolio.project1Title": "Kova Studio — Diseño UI/UX",
    "portfolio.project1Desc":
      "Diseño UI/UX completo de una plataforma de portafolio de gestión de proyectos, incluyendo layouts de dashboard, tableros kanban y flujos de usuario.",
    "portfolio.project2Title": "Flow Desk — Diseño de SaaS Helpdesk",
    "portfolio.project2Desc":
      "Diseño integral de una plataforma moderna de helpdesk y tickets enfocada en la colaboración en equipo y una UX limpia.",
    "portfolio.project3Title": "Proyecto WordPress — Próximamente",
    "portfolio.project3Desc":
      "Un sitio web personalizado en WordPress actualmente en desarrollo. El caso de estudio completo estará disponible pronto.",
    "portfolio.duration1": "2 meses",
    "portfolio.duration2": "2 meses",
    "portfolio.duration3": "En curso",
    "portfolio.client3": "En progreso",
    "portfolio.team1": "2 diseñadores",
    "portfolio.team2": "2 diseñadores",
    "portfolio.team3": "1 diseñador",

    // Portfolio Page
    "portfolioPage.description":
      "Explora nuestra colección de proyectos de diseño y desarrollo web.",

    // Skills Section
    "skills.title1": "Las herramientas con las que",
    "skills.title2": "trabajamos",
    "skills.description":
      "Usamos las mejores herramientas del mercado para diseñar y construir productos digitales de alta calidad.",

    // Testimonials Section
    "testimonials.title1": "Lo que dicen nuestros clientes",
    "testimonials.title2": "sobre nuestro trabajo",
    "testimonials.description":
      "Nuestros clientes confían en nosotros para llevar sus proyectos digitales al siguiente nivel.",
    "testimonials.quote":
      "Trabajar con EADevLab transformó por completo nuestra identidad de marca. Nos entregaron la plataforma KovaStudio con una precisión impecable y un sistema de diseño con el que nuestro equipo puede crecer. Un trabajo excepcional.",
    "testimonials.author": "Alex Rivera",
    "testimonials.role": "Fundador",

    // CTA Section
    "cta.title1": "¿Listo para empezar tu",
    "cta.title2": "próximo proyecto?",
    "cta.description":
      "Cuéntanos tu idea y trabajemos juntos para convertirla en una experiencia digital que destaque.",
    "cta.button": "Hablemos",

    // Footer
    "footer.subscribe": "Suscríbete a nuestro boletín",
    "footer.emailPlaceholder": "Ingresa tu correo electrónico",
    "footer.subscribeBtn": "Suscribirse",
    "footer.description":
      "Soluciones integrales de diseño web y hosting para hacer crecer tu presencia digital.",
    "footer.pages": "Páginas",
    "footer.home": "Inicio",
    "footer.about": "Nosotros",
    "footer.contact": "Contacto",
    "footer.portfolio": "Portafolio",
    "footer.singleProject": "Proyecto Individual",
    "footer.utilityPages": "Páginas de Utilidad",
    "footer.privacyPolicy": "Política de Privacidad",
    "footer.termsOfService": "Términos de Servicio",
    "footer.contactUs": "Contáctanos",
    "footer.copyright": `© ${new Date().getFullYear()} EADevLab. Todos los derechos reservados.`,

    // Contact Page
    "contact.title1": "Ponte en",
    "contact.title2": "contacto",
    "contact.description":
      "¿Tienes un proyecto en mente? Nos encantaría saber de ti. Completa el formulario y te responderemos lo antes posible.",
    "contact.formTitle": "Envíanos un mensaje",
    "contact.nameLabel": "Nombre completo",
    "contact.namePlaceholder": "Tu nombre",
    "contact.emailLabel": "Correo electrónico",
    "contact.emailPlaceholder": "tu@email.com",
    "contact.subjectLabel": "Asunto",
    "contact.subjectPlaceholder": "¿En qué podemos ayudarte?",
    "contact.messageLabel": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.sendButton": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.successTitle": "¡Mensaje enviado!",
    "contact.successMessage":
      "Gracias por contactarnos. Te responderemos pronto.",
    "contact.emailUs": "Escríbenos",
    "contact.emailUsDesc": "Envíanos un correo y te responderemos en 24 horas.",
    "contact.address": "Ciudad de México, México",
    "contact.retry": "Reintentar",
    "contact.errorTitle": "Error al enviar",

    // Footer Newsletter
    "footer.subscribeSuccess": "¡Suscripción exitosa!",
    "footer.subscribeError": "Error al suscribirse",

    // Project Page
    "project.notFound": "Proyecto no encontrado",
    "project.backToPortfolio": "Volver al portafolio",
    "project.client": "Cliente",
    "project.date": "Fecha",
    "project.duration": "Duración",
    "project.team": "Equipo",
    "project.prev": "Anterior",
    "project.next": "Siguiente",
    "project.goToProject": "Ver proyecto",

    // Privacy Page
    "privacy.title": "Política de Privacidad",
    "privacy.description":
      "Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web.",
    "privacy.lastUpdated": "Última actualización: Marzo 2026",

    // Terms Page
    "terms.title": "Términos de Servicio",
    "terms.description":
      "Por favor lee estos términos cuidadosamente antes de usar nuestros servicios. Al acceder o usar nuestro sitio web, aceptas estos términos.",
    "terms.lastUpdated": "Última actualización: Marzo 2026",

    // Portfolio Filters
    "portfolio.filterAll": "Todos",
    "portfolio.filterUIUX": "Diseño UI/UX",
    "portfolio.filterSaaS": "Diseño SaaS",
    "portfolio.filterWeb": "Diseño Web",
    "portfolio.newProject": "Nuevo Proyecto",

    // Case Study Sections - Kova Studio
    "caseStudy.kova.challenge": "El Desafío",
    "caseStudy.kova.challengeDesc": "Kova Studio necesitaba una plataforma integral de gestión de proyectos que combinara funcionalidad robusta con una interfaz intuitiva. El desafío principal era crear un sistema que pudiera manejar flujos de trabajo complejos manteniendo una experiencia de usuario simple y eficiente.",
    "caseStudy.kova.research": "Investigación y Descubrimiento",
    "caseStudy.kova.researchPoint1": "Entrevistas con usuarios para entender pain points en herramientas existentes",
    "caseStudy.kova.researchPoint2": "Análisis competitivo de plataformas líderes de gestión de proyectos",
    "caseStudy.kova.researchPoint3": "Mapeo de flujos de trabajo y priorización de funcionalidades clave",
    "caseStudy.kova.designProcess": "Proceso de Diseño",
    "caseStudy.kova.discovery": "Descubrimiento",
    "caseStudy.kova.discoveryDesc": "Research de usuarios y análisis competitivo",
    "caseStudy.kova.design": "Diseño",
    "caseStudy.kova.designDesc": "Wireframes, prototipos y sistema de diseño",
    "caseStudy.kova.delivery": "Entrega",
    "caseStudy.kova.deliveryDesc": "Assets finales y documentación completa",
    "caseStudy.kova.keyScreens": "Pantallas Principales",
    "caseStudy.kova.results": "Resultados e Impacto",
    "caseStudy.kova.stat1Value": "6",
    "caseStudy.kova.stat1Label": "Semanas de entrega",
    "caseStudy.kova.stat2Value": "2",
    "caseStudy.kova.stat2Label": "Diseñadores",
    "caseStudy.kova.stat3Value": "100%",
    "caseStudy.kova.stat3Label": "Satisfacción del cliente",
    "caseStudy.kova.tools": "Herramientas Utilizadas",

    // Case Study Sections - Flow Desk
    "caseStudy.flowdesk.challenge": "El Desafío",
    "caseStudy.flowdesk.challengeDesc": "Flow Desk necesitaba un sistema de helpdesk moderno que permitiera a los equipos de soporte gestionar tickets de manera eficiente. El objetivo era diseñar una plataforma que priorizara la colaboración en equipo y redujera los tiempos de respuesta.",
    "caseStudy.flowdesk.research": "Investigación y Descubrimiento",
    "caseStudy.flowdesk.researchPoint1": "Análisis de flujos de trabajo de equipos de soporte técnico",
    "caseStudy.flowdesk.researchPoint2": "Investigación de mejores prácticas en sistemas de ticketing",
    "caseStudy.flowdesk.researchPoint3": "Definición de métricas clave de rendimiento para soporte",
    "caseStudy.flowdesk.designProcess": "Proceso de Diseño",
    "caseStudy.flowdesk.discovery": "Descubrimiento",
    "caseStudy.flowdesk.discoveryDesc": "Mapeo de procesos y necesidades del equipo",
    "caseStudy.flowdesk.design": "Diseño",
    "caseStudy.flowdesk.designDesc": "UI modular y componentes reutilizables",
    "caseStudy.flowdesk.delivery": "Entrega",
    "caseStudy.flowdesk.deliveryDesc": "Sistema de diseño escalable",
    "caseStudy.flowdesk.keyScreens": "Pantallas Principales",
    "caseStudy.flowdesk.results": "Resultados e Impacto",
    "caseStudy.flowdesk.stat1Value": "8",
    "caseStudy.flowdesk.stat1Label": "Semanas de entrega",
    "caseStudy.flowdesk.stat2Value": "2",
    "caseStudy.flowdesk.stat2Label": "Diseñadores",
    "caseStudy.flowdesk.stat3Value": "100%",
    "caseStudy.flowdesk.stat3Label": "Satisfacción del cliente",
    "caseStudy.flowdesk.tools": "Herramientas Utilizadas",

    // Generic Case Study Labels
    "caseStudy.screen": "Pantalla",

    // Testimonials
    "testimonials.quote2": "El equipo de EADevLab capturó perfectamente nuestra visión para Flow Desk. Su atención al detalle y enfoque en la experiencia de usuario resultó en una plataforma que nuestros clientes adoran.",
    "testimonials.author2": "María García",
    "testimonials.role2": "CEO",
    "testimonials.company2": "Flow Desk",
    "testimonials.quote3": "Profesionales excepcionales. Entregaron a tiempo, superaron expectativas y mantuvieron comunicación constante durante todo el proyecto. Definitivamente volveremos a trabajar con ellos.",
    "testimonials.author3": "Carlos Mendoza",
    "testimonials.role3": "Director de Producto",
    "testimonials.company3": "TechStart MX",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title1": "We are",
    "hero.brand": "EADevLab",
    "hero.title2": ", here to support your",
    "hero.highlight": "Web Design",
    "hero.journey": "journey",
    "hero.description":
      "We offer comprehensive web design and hosting solutions to grow your digital presence with creativity and professionalism.",
    "hero.getInTouch": "Get in touch",
    "hero.viewPortfolio": "View portfolio",

    // About Section
    "about.title1": "Who's behind all this",
    "about.title2": "great work?",
    "about.description":
      "We are a passionate team dedicated to creating exceptional digital experiences for our clients.",
    "about.experience": "15+ years of experience",
    "about.experienceDesc":
      "We have extensive experience in web design, development and hosting of professional websites.",
    "about.projects": "100+ successful projects",
    "about.projectsDesc":
      "We have helped over a hundred clients achieve their digital goals with customized solutions.",
    "about.moreAbout": "More about us",
    "about.projectsCircle": "Projects",
    "about.experienceCircle": "Years Exp.",

    // About Page
    "aboutPage.mission": "Our Mission",
    "aboutPage.missionDesc":
      "Help businesses grow in the digital world with innovative and high-quality web solutions.",
    "aboutPage.team": "Our Team",
    "aboutPage.teamDesc":
      "A group of professionals passionate about web design and development.",
    "aboutPage.quality": "Guaranteed Quality",
    "aboutPage.qualityDesc":
      "We are committed to delivering projects that exceed our clients' expectations.",

    // Services Section
    "services.title1": "Our broad",
    "services.title2": "set of services",
    "services.description":
      "We offer a full range of web design and development services to meet all your digital needs.",
    "services.webDesign": "Web design",
    "services.webDesignDesc":
      "We create modern, attractive and functional websites that reflect your brand identity.",
    "services.uiux": "UI/UX design",
    "services.uiuxDesc":
      "We design intuitive interfaces and exceptional user experiences for your digital products.",
    "services.productDesign": "Product design",
    "services.productDesignDesc":
      "We develop complete digital products from conceptualization to launch.",
    "services.userResearch": "User research",
    "services.userResearchDesc":
      "We analyze your users' needs to create solutions that really work.",
    "services.motionGraphics": "Motion graphics",
    "services.motionGraphicsDesc":
      "We create animations and motion graphics that bring your digital content to life.",
    "services.getInTouch": "Get in touch",
    "services.getInTouchDesc":
      "Looking for another service? Get in touch with us, there is a high chance that we will be able to help!",

    // Portfolio Section
    "portfolio.title1": "Take a look at our",
    "portfolio.title2": "design portfolio",
    "portfolio.viewCase": "View case study",
    "portfolio.browseAll": "Browse all portfolio",
    "portfolio.comingSoon": "Coming Soon",
    "portfolio.project1Title": "Kova Studio — UI/UX Design",
    "portfolio.project1Desc":
      "Complete UI/UX design of a project management portfolio platform, including dashboard layouts, kanban boards, and user flows.",
    "portfolio.project2Title": "Flow Desk — Helpdesk SaaS Design",
    "portfolio.project2Desc":
      "End-to-end design of a modern helpdesk and ticketing platform focused on team collaboration and clean UX.",
    "portfolio.project3Title": "WordPress Project — Coming Soon",
    "portfolio.project3Desc":
      "A custom WordPress website currently in development. Stay tuned for the full case study.",
    "portfolio.duration1": "2 months",
    "portfolio.duration2": "2 months",
    "portfolio.duration3": "Ongoing",
    "portfolio.client3": "In Progress",
    "portfolio.team1": "2 designers",
    "portfolio.team2": "2 designers",
    "portfolio.team3": "1 designer",

    // Portfolio Page
    "portfolioPage.description":
      "Explore our collection of web design and development projects.",

    // Skills Section
    "skills.title1": "The tools we",
    "skills.title2": "work with",
    "skills.description":
      "We use the best tools in the market to design and build high-quality digital products.",

    // Testimonials Section
    "testimonials.title1": "What our clients say",
    "testimonials.title2": "about our work",
    "testimonials.description":
      "Our clients trust us to take their digital projects to the next level.",
    "testimonials.quote":
      "Working with EADevLab transformed our brand identity completely. They delivered the KovaStudio platform with pixel-perfect precision and a design system that our team can grow with. Exceptional work.",
    "testimonials.author": "Alex Rivera",
    "testimonials.role": "Founder",

    // CTA Section
    "cta.title1": "Ready to start your",
    "cta.title2": "next project?",
    "cta.description":
      "Tell us your idea and let's work together to turn it into a digital experience that stands out.",
    "cta.button": "Let's talk",

    // Footer
    "footer.subscribe": "Subscribe to our newsletter",
    "footer.emailPlaceholder": "Enter your email address",
    "footer.subscribeBtn": "Subscribe",
    "footer.description":
      "Comprehensive web design and hosting solutions to grow your digital presence.",
    "footer.pages": "Pages",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.portfolio": "Portfolio",
    "footer.singleProject": "Single Project",
    "footer.utilityPages": "Utility Pages",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.contactUs": "Contact us",
    "footer.copyright": `© ${new Date().getFullYear()} EADevLab. All rights reserved.`,

    // Contact Page
    "contact.title1": "Get in",
    "contact.title2": "touch",
    "contact.description":
      "Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.",
    "contact.formTitle": "Send us a message",
    "contact.nameLabel": "Full name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email address",
    "contact.emailPlaceholder": "you@email.com",
    "contact.subjectLabel": "Subject",
    "contact.subjectPlaceholder": "How can we help you?",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.sendButton": "Send message",
    "contact.sending": "Sending...",
    "contact.successTitle": "Message sent!",
    "contact.successMessage":
      "Thank you for contacting us. We'll get back to you soon.",
    "contact.emailUs": "Email us",
    "contact.emailUsDesc":
      "Send us an email and we'll respond within 24 hours.",
    "contact.address": "Mexico City, Mexico",
    "contact.retry": "Retry",
    "contact.errorTitle": "Failed to send",

    // Footer Newsletter
    "footer.subscribeSuccess": "Successfully subscribed!",
    "footer.subscribeError": "Failed to subscribe",

    // Project Page
    "project.notFound": "Project not found",
    "project.backToPortfolio": "Back to Portfolio",
    "project.client": "Client",
    "project.date": "Date",
    "project.duration": "Duration",
    "project.team": "Team",
    "project.prev": "Previous",
    "project.next": "Next",
    "project.goToProject": "View project",

    // Privacy Page
    "privacy.title": "Privacy Policy",
    "privacy.description":
      "This policy describes how we collect, use, and protect your personal information when you visit our website.",
    "privacy.lastUpdated": "Last updated: March 2026",

    // Terms Page
    "terms.title": "Terms of Service",
    "terms.description":
      "Please read these terms carefully before using our services. By accessing or using our website, you agree to these terms.",
    "terms.lastUpdated": "Last updated: March 2026",

    // Portfolio Filters
    "portfolio.filterAll": "All",
    "portfolio.filterUIUX": "UI/UX Design",
    "portfolio.filterSaaS": "SaaS Design",
    "portfolio.filterWeb": "Web Design",
    "portfolio.newProject": "New Project",

    // Case Study Sections - Kova Studio
    "caseStudy.kova.challenge": "The Challenge",
    "caseStudy.kova.challengeDesc": "Kova Studio needed a comprehensive project management platform that combined robust functionality with an intuitive interface. The main challenge was creating a system that could handle complex workflows while maintaining a simple and efficient user experience.",
    "caseStudy.kova.research": "Research & Discovery",
    "caseStudy.kova.researchPoint1": "User interviews to understand pain points in existing tools",
    "caseStudy.kova.researchPoint2": "Competitive analysis of leading project management platforms",
    "caseStudy.kova.researchPoint3": "Workflow mapping and prioritization of key features",
    "caseStudy.kova.designProcess": "Design Process",
    "caseStudy.kova.discovery": "Discovery",
    "caseStudy.kova.discoveryDesc": "User research and competitive analysis",
    "caseStudy.kova.design": "Design",
    "caseStudy.kova.designDesc": "Wireframes, prototypes and design system",
    "caseStudy.kova.delivery": "Delivery",
    "caseStudy.kova.deliveryDesc": "Final assets and complete documentation",
    "caseStudy.kova.keyScreens": "Key Screens",
    "caseStudy.kova.results": "Results & Impact",
    "caseStudy.kova.stat1Value": "6",
    "caseStudy.kova.stat1Label": "Weeks to deliver",
    "caseStudy.kova.stat2Value": "2",
    "caseStudy.kova.stat2Label": "Designers",
    "caseStudy.kova.stat3Value": "100%",
    "caseStudy.kova.stat3Label": "Client satisfaction",
    "caseStudy.kova.tools": "Tools Used",

    // Case Study Sections - Flow Desk
    "caseStudy.flowdesk.challenge": "The Challenge",
    "caseStudy.flowdesk.challengeDesc": "Flow Desk needed a modern helpdesk system that would allow support teams to manage tickets efficiently. The goal was to design a platform that prioritized team collaboration and reduced response times.",
    "caseStudy.flowdesk.research": "Research & Discovery",
    "caseStudy.flowdesk.researchPoint1": "Analysis of technical support team workflows",
    "caseStudy.flowdesk.researchPoint2": "Research of best practices in ticketing systems",
    "caseStudy.flowdesk.researchPoint3": "Definition of key performance metrics for support",
    "caseStudy.flowdesk.designProcess": "Design Process",
    "caseStudy.flowdesk.discovery": "Discovery",
    "caseStudy.flowdesk.discoveryDesc": "Process mapping and team needs assessment",
    "caseStudy.flowdesk.design": "Design",
    "caseStudy.flowdesk.designDesc": "Modular UI and reusable components",
    "caseStudy.flowdesk.delivery": "Delivery",
    "caseStudy.flowdesk.deliveryDesc": "Scalable design system",
    "caseStudy.flowdesk.keyScreens": "Key Screens",
    "caseStudy.flowdesk.results": "Results & Impact",
    "caseStudy.flowdesk.stat1Value": "8",
    "caseStudy.flowdesk.stat1Label": "Weeks to deliver",
    "caseStudy.flowdesk.stat2Value": "2",
    "caseStudy.flowdesk.stat2Label": "Designers",
    "caseStudy.flowdesk.stat3Value": "100%",
    "caseStudy.flowdesk.stat3Label": "Client satisfaction",
    "caseStudy.flowdesk.tools": "Tools Used",

    // Generic Case Study Labels
    "caseStudy.screen": "Screen",

    // Testimonials
    "testimonials.quote2": "The EADevLab team perfectly captured our vision for Flow Desk. Their attention to detail and focus on user experience resulted in a platform that our customers love.",
    "testimonials.author2": "Maria Garcia",
    "testimonials.role2": "CEO",
    "testimonials.company2": "Flow Desk",
    "testimonials.quote3": "Exceptional professionals. They delivered on time, exceeded expectations, and maintained constant communication throughout the project. We will definitely work with them again.",
    "testimonials.author3": "Carlos Mendoza",
    "testimonials.role3": "Product Director",
    "testimonials.company3": "TechStart MX",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [isInitialized, setIsInitialized] = useState(false);

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("language");
      if (stored === "es" || stored === "en") {
        setLanguageState(stored);
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
    setIsInitialized(true);
  }, []);

  // Sync to localStorage when language changes
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("language", language);
      } catch {
        // localStorage not available
      }
    }
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
