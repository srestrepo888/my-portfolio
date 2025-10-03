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
    context: "For centuries, wellness has been a deeply personal journey—rooted in culture, tradition, and individual aspirations. In Saudi Arabia, a new chapter is being written, Kayanne is more than just a wellness brand; it's a movement, a vision, and a revolution in how women experience health, self-care, and empowerment. Kayanee is the first ecosystem integrating physical, digital, and social experiences for women's holistic wellbeing.",
    scope: [
      "Spaces were designed to intuitively recognise wellness needs, blending physical environments with AI-driven digital journeys.",
      "Crafted to be a phygital ecosystem merging behavioural science with technology to create deeply personalised transformative experiences.",
      "Seamless interactions across touch points—from retail environments to digital platforms—enhancing women's holistic wellbeing journey."
    ],
    impact: [
      "Kayanee redefines possibility within Saudi Arabia's $19 billion wellness industry through cultural-technological fusion.",
      "The e-commerce platform launch initiates a vision extending beyond digital into integrated experiences.",
      "The full vision is still unfolding, with new innovations, experiences, and services continuously being developed to shape the future of women's wellness in Saudi Arabia."
    ],
    testimonial: {
      quote: "Amazing proposal and presentation for Kayanee and princess Reema @ KSA...you are already on the next level. Keep rocking!",
      author: "Martin Migoya",
      role: "CEO - Globant"
    }
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
    context: "In the ever-evolving landscape of software development, navigating and understanding vast, complex codebases is one of the most significant challenges developers face. Augoor was developed within Globant X—a pioneering incubator creating AI-driven products for digital acceleration. It transforms static repositories into dynamic, navigable data warehouses enhancing developer efficiency and collaboration.",
    scope: [
      "Back in 2020 we conducted global ethnographic research to uncover how developers search, document, and navigate complex code systems to transform writing code using plain English, a way of creating technology that today, in 2025 It's not only a reality, but a strong well stablished way of developing.",
      "Adaptive intelligence frameworks were architected with feedback loops that evolve through contextual developer interactions.",
      "We designed seamless UX patterns by integrating AI-assisted documentation, code dependencies and code search that feel natural within existing development workflows."
    ],
    impact: [
      "Engineers now work with greater confidence, automating tedious tasks while focusing on creative development.",
      "Every feature is designed to feel like a natural extension of engineering workflows, not just another tool.",
      "Augoor amplifies human ingenuity rather than replacing it, unlocking collaborative innovation across development teams."
    ],
    testimonial: {
      quote: "Silvana has been a great team player who is proactive to help, listen the issues, put herself in other's shoes and think about the solutions. She is very thoughtful in providing the solution which will help keep satisfying the customers. I have always enjoyed my conversation with her as it has taught me so many things from customer experience perspective.",
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
    context: "For optometrists and surgeons, precision is essential—every decision and data point affects patient vision outcomes. CHiME Care was envisioned as more than just a digital tool; it is an intelligent support system that guides practitioners through complex surgical workflows. In partnership with Johnson & Johnson's Experience Design leadership, we established the foundations for this specialised platform.",
    scope: [
      "We researched with practicing optometrists to reveal workflow patterns and decision points critical to surgical planning.",
      "Intuitive interfaces were designed for specialised tools, including toric calculators, case reviews, and performance metrics, to enhance clinical decisions.",
      "A comprehensive design system architecture was created to ensure consistent experiences while supporting rapid platform evolution."
    ],
    impact: [
      "CHiME Care transforms fragmented ophthalmic practices into connected ecosystems where intelligence amplifies surgical precision.",
      "Optometrists now benefit from a digital assistant that enhances workflow, optimises surgical planning, and provides meaningful procedural insights.",
      "The platform drives widespread adoption throughout Johnson & Johnson Vision's ecosystem while laying the foundation for future innovations based on behavioural usage patterns."
    ],
    testimonial: {
      quote: "Silvana is an excellent professional that has been a great plus in the \"cosmic eyes\" POD. Her commitment and skills are outstanding",
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
    context: "Riviera Maya's Nomade Hotels are sanctuaries that blend luxury with nature, evolving alongside guest expectations. The challenge was clear: how to preserve a deeply personal, ritualistic, and human-centred approach while seamlessly integrating digital efficiencies. Nomade envisioned a transformation into a tech-enabled hospitality brand without losing its soul.",
    scope: [
      "In collaboration with Nomade team, we envisioned a guest-centric digital ecosystem integrating CRM, personalisation engines, and an intuitive e-concierge system.",
      "Service blueprinting was build to reimagin every touchpoint—from booking to check-out—as opportunities for meaningful cultural connection.",
      "Backend systems integration unified operations were mapped out to preserve the spontaneous, authentic interactions defining Nomade's essence."
    ],
    impact: [
      "Discovery research provided insights into transforming fragmented guest touchpoints into integrated digital and physical narratives.",
      "The integrated platform proposed truthfully taught to eliminate operational inefficiencies while enhancing real-time decision-making across all departments.",
      "This approach has delivered measurable operational efficiency and enriched the guest experience to be adopted as part of the opex and capex strategy, with the vision to expand from two assets to a vision of 10 more in a pipeline of eight years as presented by the client."
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
    context: "In food and beverage, pricing decisions must be intelligent and adaptive against rapidly shifting market dynamics. Danone needed to transition from a reactive, inflationary pricing approach to predictive models aligned with erratic market behaviour. A comprehensive Digital Maturity Assessment was undertaken to evaluate capabilities across technology, data, processes, and organisational culture.",
    scope: [
      "We led the maturity assessment, identifying capability gaps between Danone's digital ambition and its current operational reality.",
      "Critical challenges in data governance, technology automation, and cross-functional processes Scalability was diagnosed.",
      "A modular pricing framework was architected to ensure strategic alignment with broader organisational transformation objectives."
    ],
    impact: [
      "The strategic roadmap established foundations for dynamic pricing capabilities leveraging predictive analytics and automation.",
      "Detailed implementation frameworks outlined pathways to overcome silos between pricing, sales, and finance teams.",
      "The discovery phase delivered a scalable vision positioning pricing as strategic advantage in Danone's digital transformation."
    ],
    testimonial: {
      quote: "Silvana is a person who shows permanent commitment to the project, always responsible and collaborating not only with regard to her tasks and objectives but also with those of the team and the project. On the other hand, she has proven to be innovative, proposing, challenging and always seeking to optimize work dynamics and tools to work with clients.",
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
    context: "Parques Reunidos is a global leisure leader operating seventy diverse entertainment venues spanning three continents and multiple experience categories. Portfolio diversity created operational complexity—particularly across six sales channels and seven distinct product categories. Fragmented systems limited consistent guest experiences and prevented implementation of enterprise-wide product strategies.",
    scope: [
      "In collaboration with internal teams, we created a unified product taxonomy to enable operational efficiency while preserving the authenticity of local venue offerings.",
      "We designed governance frameworks that balance centralised intelligence with venue-specific innovation across diverse properties.",
      "Integration pathways were mapped to connect disparate systems into a coherent operational ecosystem, enhancing both efficiency and engagement."
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
  },
  {
    id: "qiddiya",
    title: "Flagship Entertainment Destination, KSA",
    subtitle: "PoC Guest Support Platform",
    client: "Qiddiya",
    year: "2025",
    industry: "Hospitality-Themed Parks-Retail",
    practices: ["Product Strategy", "Service Design", "Prototyping"],
    location: "KSA",
    webpage: "https://qiddiya.com/",
    heroImage: "/images/placeholder.svg",
    secondaryImage: "/images/placeholder.svg",
    galleryImages: [
      "/images/placeholder.svg"
    ],
    context: "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project. Theme parks, water attractions, sports facilities, and retail centers operated through a unified digital infrastructure where both guests and operational staff would encounter these systems for the first time. Cultural complexity demanded sophisticated solutions: Saudi families, GCC visitors, and international tourists each brought different service expectations, with every touchpoint depending entirely on digital systems without analog alternatives available.",
    scope: [
      "This proof of concept established a validated product strategy for complex entertainment ecosystem requirements through stakeholder collaboration and technical feasibility.",
      "Provided development teams with validated integration requirements, with PRDs specifying exact connections with Digital ID and ticketing systems.",
      "Workflow validation created shared understanding through stakeholder alignment via tangible prototypes, while designing data collection specs for guest interaction patterns and defining KPI structures for digital adoption and cultural adaptation success."
    ],
    impact: [
      "Technical Foundation Established: Development teams received validated integration requirements, enabling confident planning without major architectural uncertainty.",
      "Operational Readiness Framework: Workflow validation created a shared understanding with achievable roadmaps that reflect real operational constraints.",
      "Intelligence Framework Design: Blueprints outlined future experience preservation measurement, paving the way for a truly world-class digital guest experience."
    ],
    testimonial: {
      quote: "This foundational work provided our internal teams with the confidence and clarity needed to align internal visions and also determine what part of the experience wouldn't be considered if it weren't for this envisioning.",
      author: "Project Stakeholder",
      role: "Qiddiya"
    }
  }
];