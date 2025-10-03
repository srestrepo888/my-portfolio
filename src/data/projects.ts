export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  industry: string;
  practices: string[];
  location: string;
  webpage: string;
  heroImage: string;
  secondaryImage: string;
  galleryImages: string[];
  context: string;
  scope: string[];
  impact: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "kayanee",
    title: "Project Kayanee",
    subtitle: "The First-of-Its-Kind Collective Saudi Wellness Experience Platform",
    client: "Kayanee, a PIF Company",
    year: "2022",
    industry: "Health & Wellness",
    practices: ["Experience Design", "Service Design", "Product Strategy"],
    location: "Saudi Arabia",
    webpage: "https://kayanee.com/",
    heroImage: "/images/projects/kayanee/hero-kayanee.jpeg",
    secondaryImage: "/images/projects/kayanee/secundary-kayanee.jpeg",
    galleryImages: [
      "/images/projects/kayanee/Screens-VSCO.jpeg",
      "/images/projects/kayanee/Screenshot 2024-11-15 at 10.42.42.png"
    ],
    context: "For centuries, wellness has been a deeply personal journey rooted in culture and tradition. In Saudi Arabia, Kayanee represents a revolutionary movement in women's health and empowerment. It transforms wellness from isolated practices into an integrated ecosystem of self-care.",
    scope: [
      "Spaces intuitively recognize wellness needs through AI-driven digital journeys. Physical environments merge with technology seamlessly. The result creates deeply personalized transformative experiences.",
      "A phygital ecosystem combines behavioural science with cutting-edge technology. Every interaction is crafted for personal transformation. The platform evolves with each user's unique wellness journey.",
      "Seamless touchpoints connect retail environments to digital platforms. Women experience holistic wellbeing across all channels. Every interaction enhances the complete wellness journey."
    ],
    impact: [
      "Kayanee redefines possibility within Saudi Arabia's $19 billion wellness industry through cultural-technological fusion.",
      "Beyond fitness or nutrition alone, Kayanee pioneers an ecosystem where women discover wellness as an holistic journey."
    ]
  },
  {
    id: "augoor",
    title: "Augoor",
    subtitle: "Transforming static code into dynamic knowledge",
    client: "Globant X",
    year: "2020",
    industry: "AI Software Development",
    practices: ["Service Design", "User Research", "Product Strategy"],
    location: "Worldwide",
    webpage: "https://www.augoor.com/",
    heroImage: "/images/projects/augoor/photo-main-carrusel.jpeg",
    secondaryImage: "/images/projects/augoor/hero-2.png",
    galleryImages: [
      "/images/projects/augoor/Screenshot 2025-04-15 at 13.33.51.png",
      "/images/projects/augoor/Screenshot 2025-04-15 at 13.34.12.png",
      "/images/projects/augoor/Screenshot 2025-04-15 at 13.34.27.png"
    ],
    context: "Navigating complex codebases remains software development's greatest challenge. Augoor emerged from Globant X's pioneering AI incubator. It transforms static repositories into dynamic, navigable knowledge systems.",
    scope: [
      "Global ethnographic research revealed how developers navigate complex code systems. We uncovered patterns in search, documentation, and code understanding. These insights shaped our plain English code transformation approach.",
      "Adaptive intelligence frameworks evolve through contextual developer interactions. Feedback loops continuously improve system understanding. The platform learns and adapts with every use.",
      "Seamless UX patterns integrate AI-assisted documentation and code search. Every feature feels natural within existing workflows. Developers experience enhancement, not disruption."
    ],
    impact: [
      "Engineers now work with greater confidence, automating tedious tasks while focusing on creative development.",
      "Every feature is designed to feel like a natural extension of engineering workflows, not just another tool.",
      "Augoor amplifies human ingenuity rather than replacing it, unlocking collaborative innovation across development teams."
    ],
    testimonial: {
      quote: "Silvana has been a great team player who is proactive to help, listen the issues, put herself in other's shoes and think about the solutions. She is very thoughtful in providing the solution which will help keep satisfying the customers.",
      author: "Deepika Wahi Lopez",
      role: "Product Manager-Globant"
    }
  },
  {
    id: "chime-care",
    title: "CHiME Care J&J",
    subtitle: "Elevating Ophthalmic Practices with Experience-Driven Innovation",
    client: "Johnson & Johnson Surgical Vision",
    year: "2022",
    industry: "Health & Wellness",
    practices: ["Design Ops", "Design Systems", "Service Design"],
    location: "United States",
    webpage: "https://us-vision.jjcustomerconnect.com",
    heroImage: "/images/projects/chime-care/hero-j&j.jpeg",
    secondaryImage: "/images/projects/chime-care/secundary-jjpeg.jpeg",
    galleryImages: [
      "/images/projects/chime-care/Screenshot 2025-03-06 at 171139-VSCO.jpeg",
      "/images/projects/chime-care/Screenshot 2025-04-15 at 13.23.31.png",
      "/images/projects/chime-care/Secundary Image-VSCO.jpeg"
    ],
    context: "Precision defines ophthalmic surgery where every decision affects patient vision outcomes. CHiME Care serves as an intelligent support system for practitioners. It transforms complex surgical workflows into guided, confident procedures.",
    scope: [
      "Research with practicing optometrists revealed critical workflow patterns. Decision points in surgical planning were carefully mapped. These insights shaped our precision-focused interface design.",
      "Intuitive interfaces enhance specialized tools like toric calculators and case reviews. Performance metrics provide actionable clinical insights. Every feature amplifies surgical decision confidence.",
      "Comprehensive design system architecture ensures consistent experiences. The platform supports rapid evolution and feature expansion. Scalability meets the demands of growing medical practices."
    ],
    impact: [
      "CHiME Care transforms fragmented ophthalmic practices into connected ecosystems where intelligence amplifies surgical precision.",
      "Optometrists now benefit from a digital assistant that enhances workflow, optimises surgical planning, and provides meaningful procedural insights.",
      "The platform drives widespread adoption throughout Johnson & Johnson Vision's ecosystem while laying the foundation for future innovations."
    ],
    testimonial: {
      quote: "Silvana is an excellent professional that has been a great plus in the 'cosmic eyes' POD. Her commitment and skills are outstanding",
      author: "Karina Paola Bailetti",
      role: "Project Manager-Globant"
    }
  },
  {
    id: "nomade",
    title: "Nomade Tulum",
    subtitle: "Preserving Soul in Digital Transformation",
    client: "Nomade Group",
    year: "2021",
    industry: "Hospitality",
    practices: ["Experience Design", "Service Design", "Digital Transformation"],
    location: "Mexico-Tulum",
    webpage: "https://nomadetulum.com/",
    heroImage: "/images/projects/nomade/main-hero-carrusel.jpeg",
    secondaryImage: "/images/projects/nomade/secundary-hero.jpeg",
    galleryImages: [
      "/images/projects/nomade/Screenshot 2024-11-15 at 15.21.56.png",
      "/images/projects/nomade/Screenshot 2025-04-15 at 13.46.25.png",
      "/images/projects/nomade/Screenshot 2025-04-15 at 13.57.49.png",
      "/images/projects/nomade/Screenshot 2025-04-15 at 14.08.50.png"
    ],
    context: "Nomade Hotels blend luxury with nature in Riviera Maya's pristine landscapes. The challenge demanded preserving personal, ritualistic experiences within digital transformation. We crafted technology that enhances rather than replaces human connection.",
    scope: [
      "Guest-centric digital ecosystem integrates CRM with personalization engines. An intuitive e-concierge system anticipates needs before they arise. Technology becomes invisible while service feels magical.",
      "Service blueprinting reimagined every touchpoint as cultural connection opportunities. From booking to check-out, each moment tells Nomade's story. Digital enhancement preserves authentic hospitality essence.",
      "Backend systems unify operations without constraining spontaneity. Integrated platforms support staff in creating memorable moments. Technology empowers rather than restricts human creativity."
    ],
    impact: [
      "Discovery research provided insights into transforming fragmented guest touchpoints into integrated digital and physical narratives.",
      "The integrated platform proposed truthfully taught to eliminate operational inefficiencies while enhancing real-time decision-making across all departments.",
      "This approach has delivered measurable operational efficiency and enriched the guest experience to be adopted as part of the opex and capex strategy."
    ],
    testimonial: {
      quote: "It was a pleasure to work with Sil, I found a great professional, very collaborative, open to challenge and to make her part. Both clients we work with were very happy with her, and excellent feedaback received",
      author: "Gerardo Bava",
      role: "VP Delivery-Globant"
    }
  },
  {
    id: "danone",
    title: "Danone Digital Transformation",
    subtitle: "Driving Digital Transformation in Pricing Strategy",
    client: "Danone",
    year: "2021",
    industry: "Food and Beverage",
    practices: ["Digital Transformation", "Service Design", "Product Strategy"],
    location: "Argentina",
    webpage: "https://www.danone.com/",
    heroImage: "/images/projects/danone/main-hero-carrusel.jpeg",
    secondaryImage: "/images/projects/danone/secundary-hero.png",
    galleryImages: [
      "/images/projects/danone/Screenshot 2025-04-15 at 14.01.55.png",
      "/images/projects/danone/Screenshot 2025-04-15 at 14.03.20.png",
      "/images/projects/danone/secundary-danone.jpeg"
    ],
    context: "Food and beverage pricing demands intelligence and adaptability in volatile markets. Danone required transformation from reactive to predictive pricing models. We architected systems that anticipate rather than follow market dynamics.",
    scope: [
      "Maturity assessment identified gaps between digital ambition and operational reality. Capability mapping revealed transformation opportunities. Strategic roadmap bridged current state to future vision.",
      "Data governance challenges met technology automation solutions. Cross-functional process optimization enabled scalable operations. Integration eliminated silos between critical business functions.",
      "Modular pricing framework aligns with organizational transformation objectives. Architecture supports rapid market response capabilities. Strategic design positions pricing as competitive advantage."
    ],
    impact: [
      "The strategic roadmap established foundations for dynamic pricing capabilities leveraging predictive analytics and automation.",
      "Detailed implementation frameworks outlined pathways to overcome silos between pricing, sales, and finance teams.",
      "The discovery phase delivered a scalable vision positioning pricing as strategic advantage in Danone's digital transformation."
    ],
    testimonial: {
      quote: "Silvana is a person who shows permanent commitment to the project, always responsible and collaborating not only with regard to her tasks and objectives but also with those of the team and the project.",
      author: "Roberto Hernán Murdocca",
      role: "Tech Director-Globant"
    }
  },
  {
    id: "parques-reunidos",
    title: "Parques Reunidos",
    subtitle: "Catalog Harmonisation",
    client: "Parques Reunidos",
    year: "2023",
    industry: "Themed Parks",
    practices: ["Experience Design", "Service Design", "Digital Transformation"],
    location: "Spain",
    webpage: "https://www.parquesreunidos.com/",
    heroImage: "/images/projects/parques-reunidos/hero-parque-reunidos.png",
    secondaryImage: "/images/projects/parques-reunidos/secundary-image.jpeg",
    galleryImages: [
      "/images/projects/parques-reunidos/Envisioning for Digital Planning and Booking.png",
      "/images/projects/parques-reunidos/Envisioning for Dynamic Booking.png",
      "/images/projects/parques-reunidos/Project Envisioning Customer Journey Unfied .png"
    ],
    context: "Parques Reunidos operates seventy entertainment venues across three continents. Portfolio diversity created complexity across six sales channels and seven product categories. Unified systems became essential for coordinated growth strategy.",
    scope: [
      "Unified product taxonomy enables operational efficiency across diverse venues. Local authenticity preservation balanced with global standardization. Each venue maintains unique identity within coherent system.",
      "Governance frameworks balance centralized intelligence with local innovation. Venue-specific creativity thrives within strategic guidelines. Flexibility meets consistency across the entire portfolio.",
      "Integration pathways connect disparate systems into coherent ecosystem. Operational efficiency enhances rather than constrains engagement. Technology unifies without homogenizing experiences."
    ],
    impact: [
      "As Globant we established master catalog architecture, creating a unified product language while preserving unique venue-specific narratives.",
      "Designed a governance system, transforming fragmented decision processes into coordinated strategic actions across the portfolio.",
      "Envisioned an implementation roadmap elevating product ecosystems from operational necessities to strategic enablers of guest delight."
    ],
    testimonial: {
      quote: "We have completed the Catalog Harmonisation Project in the expected time and conditions, despite having a very complex scope, with changes along the way. We have simultaneously created spaces for new project opportunities and increase client satisfactions with a NPS of 9",
      author: "Diego Salcedo",
      role: "Delivery Manager-Globant"
    }
  }
];