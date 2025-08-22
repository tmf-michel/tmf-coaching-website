// 🔧 EENVOUDIGE CMS - Hier kun je alle content van je website aanpassen
// =====================================================================

export const siteConfig = {
  // Algemene website informatie
  siteName: "TMF-Coaching",
  tagline: "Wetenschappelijk onderbouwde hypnotherapie",
  description: "Professionele hypnotherapie voor angst, fobieën, stoppen met roken, eetproblemen en trauma. Ervaren OMNI hypnotherapeut met bewezen resultaten in Breda en omgeving.",

  // Contact informatie
  contact: {
    phone: "076-369-0248",
    phoneFormatted: "+31-76-369-0248",
    email: "michel@tmf-coaching.nl",
    whatsapp: "31763690248",
    location: "Breda en omgeving",

    // Social media links
    linkedin: "https://www.linkedin.com/in/michel-werneri/",
    facebook: "https://www.facebook.com/michel.werneri",
    instagram: "https://www.instagram.com/michel_a_w/",
    twitter: "https://x.com/MLASWI"
  }
};

export const therapistInfo = {
  name: "Michel Werneri",
  title: "OMNI Hypnotherapeut",
  experience: "500+",
  experienceText: "Succesvol behandelde klanten",
  bio: "Gecertificeerd OMNI Hypnotherapeut met jarenlange ervaring in het helpen van mensen bij het overwinnen van angsten, verslavingen en trauma's.",
  quote: "Ik geloof in een veilige, respectvolle en resultaatgerichte aanpak. Mijn achtergrond in coaching en hypnotherapie stelt mij in staat om jou te helpen blijvende veranderingen te realiseren.",

  certifications: [
    {
      name: "OMNI Hypnosis Training Center gecertificeerd",
      logo: "https://www.hypnose.net/wp-content/uploads/2024/03/cropped-cropped-omni-logo.png",
      shortName: "OMNI Hypnosis"
    },
    {
      name: "Lid van GAT, CAT en andere beroepsorganisaties",
      logo: "https://vitaflow.nl/images/gat-2024.png",
      shortName: "GAT Erkend"
    },
    {
      name: "Voortdurende bijscholing in nieuwste technieken",
      logo: "https://edwinstolwijk.nl/wp-content/uploads/2025/06/cat_collectief_schild_2025.png",
      shortName: "CAT Collectief"
    }
  ]
};

export const heroContent = {
  badge: "Wetenschappelijk onderbouwde hypnotherapie",
  headline: {
    start: "Overwin je",
    highlighted1: "angsten",
    middle: "en",
    highlighted2: "verslavingen"
  },
  subheadline: "Professionele hypnotherapie voor angst, fobieën, stoppen met roken, eetproblemen en trauma. Ervaren OMNI hypnotherapeut met bewezen resultaten in Breda en omgeving.",

  cta: {
    primary: "Gratis Intake Plannen",
    secondary: "Direct Bellen"
  },

  features: [
    "Gratis intake",
    "OMNI gecertificeerd",
    "Bewezen resultaten"
  ]
};

export const services = [
  {
    id: "anxiety",
    category: "Angst & Fobieën",
    title: "Angst & Fobieën",
    description: "Paniekaanvallen, sociale angst, vliegangst of specifieke fobieën die je leven beperken",
    color: "red",
    icon: "Brain",
    url: "/angst-behandeling",
    treatments: [
      {
        name: "Paniekaanvallen",
        description: "Leer je lichaam en geest te kalmeren. Stop de cyclus van angst voor de angst.",
        sessions: "3-6 sessies",
        icon: "Brain",
        color: "blue"
      },
      {
        name: "Sociale Angst",
        description: "Bouw zelfvertrouwen op en leer ontspannen te zijn in sociale situaties.",
        sessions: "4-8 sessies",
        icon: "Users",
        color: "green"
      },
      {
        name: "Specifieke Fobieën",
        description: "Vliegangst, spinnenfobie, hoogteangst - vaak opgelost in enkele sessies.",
        sessions: "1-3 sessies",
        icon: "Shield",
        color: "purple"
      }
    ]
  },
  {
    id: "addiction",
    category: "Verslavingen",
    title: "Verslavingen",
    description: "Roken, overeten, drugs, alcohol of andere dwangmatige gedragingen",
    color: "orange",
    icon: "Heart",
    url: "/stoppen-met-roken",
    treatments: [
      {
        name: "Stoppen met Roken",
        description: "Doorbreek de mentale en fysieke afhankelijkheid. Wordt definitief rookvrij.",
        sessions: "2-4 sessies",
        icon: "Heart",
        color: "red"
      },
      {
        name: "Eetproblemen",
        description: "Emotioneel eten, binge eating, of ongezonde voedingspatronen aanpakken.",
        sessions: "4-8 sessies",
        icon: "Lightbulb",
        color: "orange"
      },
      {
        name: "Andere Verslavingen",
        description: "Alcohol, drugs, gokken of andere dwangmatige gedragingen.",
        sessions: "6-12 sessies",
        icon: "Brain",
        color: "indigo"
      }
    ]
  },
  {
    id: "trauma",
    category: "Trauma & PTSD",
    title: "Trauma & Stress",
    description: "Burnout, PTSD, emotionele blokkades of onverwerkte ervaringen",
    color: "purple",
    icon: "Shield",
    url: "/trauma-ptsd",
    treatments: [
      {
        name: "PTSD & Trauma",
        description: "Veilige verwerking van traumatische ervaringen met regressietherapie.",
        sessions: "6-15 sessies",
        icon: "Shield",
        color: "purple"
      },
      {
        name: "Burnout & Stress",
        description: "Herstel je mentale balans en leer effectieve stresscoping strategieën.",
        sessions: "4-10 sessies",
        icon: "Clock",
        color: "red"
      }
    ]
  }
];

export const testimonials = [
  {
    name: "Sarah",
    age: "34 jaar",
    treatment: "Vliegangst",
    rating: 5,
    text: "Na een paar sessies heb ik geen last meer van mijn vliegangst en voel ik me weer vrij om de wereld te verkennen.",
    color: "emerald"
  },
  {
    name: "Mark",
    age: "42 jaar",
    treatment: "Stoppen met roken",
    rating: 5,
    text: "Ik was sceptisch, maar Michels professionele aanpak gaf me vertrouwen. Nu ben ik al zes maanden rookvrij.",
    color: "blue"
  },
  {
    name: "Lisa",
    age: "29 jaar",
    treatment: "Stress & slaapproblemen",
    rating: 5,
    text: "Met hypnotherapie kwam ik eindelijk tot de kern van mijn stress en slaap ik weer beter.",
    color: "purple"
  }
];

export const processSteps = [
  {
    number: 1,
    title: "Gratis Intake",
    description: "30 minuten kennismaken en je doelen bespreken",
    color: "emerald"
  },
  {
    number: 2,
    title: "Behandelplan",
    description: "Persoonlijke aanpak gebaseerd op jouw situatie",
    color: "blue"
  },
  {
    number: 3,
    title: "Hypnose Sessies",
    description: "Professionele begeleiding naar je onderbewustzijn",
    color: "purple"
  },
  {
    number: 4,
    title: "Duurzaam Resultaat",
    description: "Blijvende verandering in je leven",
    color: "orange"
  }
];

export const faqItems = [
  {
    question: "Is hypnose veilig?",
    answer: "Ja, hypnose is volledig veilig. Je behoudt altijd de controle en bent je bewust van wat er gebeurt. Ik ben gecertificeerd OMNI hypnotherapeut en werk volgens strenge ethische richtlijnen."
  },
  {
    question: "Hoeveel sessies heb ik nodig?",
    answer: "Dit verschilt per persoon en probleem. Eenvoudige fobieën kunnen vaak in 1-3 sessies worden opgelost, terwijl complexere problemen zoals trauma 6-15 sessies kunnen vergen. We bespreken dit tijdens de intake."
  },
  {
    question: "Kan iedereen gehypnotiseerd worden?",
    answer: "Ongeveer 95% van de mensen kan in hypnose gaan. Het vereist alleen je bereidheid om mee te werken. Hypnose is een natuurlijke staat die je dagelijks ervaart, zoals bij dagdromen."
  },
  {
    question: "Wat is het verschil met psychologie?",
    answer: "Hypnotherapie werkt direct met je onderbewustzijn waar gedragspatronen zijn opgeslagen. Dit maakt verandering vaak sneller mogelijk dan traditionele gesprekstherapie."
  },
  {
    question: "Worden de kosten vergoed?",
    answer: "Sommige aanvullende verzekeringen vergoeden hypnotherapie. Check je polis of neem contact op met je verzekeraar. Veel klanten vinden de investering het waard voor de levenslange voordelen."
  }
];

export const whatsappConfig = {
  phoneNumber: "31763690248",
  defaultMessage: "Hallo Michel, ik heb interesse in hypnotherapie en zou graag meer informatie willen. Kunnen we een gratis intake inplannen?",

  chatIntro: {
    greeting: "👋 Hallo! Bedankt voor je interesse in hypnotherapie.",
    intro: "Ik ben Michel en help je graag bij:",
    specialties: [
      "• Angst & paniekaanvallen",
      "• Stoppen met roken",
      "• Fobieën & sociale angst",
      "• Trauma & PTSD",
      "• Eetproblemen"
    ],
    cta: "💬 Stuur me een WhatsApp bericht voor een gratis intake van 30 minuten!",
    responseTime: "Meestal reageer ik binnen 1 uur"
  }
};

// 📝 INSTRUCTIES VOOR CONTENT AANPASSEN:
// =====================================
// 1. Wijzig teksten hierboven door de waarden tussen quotes aan te passen
// 2. Voeg nieuwe services toe door items aan de 'services' array toe te voegen
// 3. Update testimonials door nieuwe items toe te voegen aan 'testimonials'
// 4. Wijzig contact gegevens in de 'siteConfig.contact' sectie
// 5. Pas FAQ items aan door vragen/antwoorden te wijzigen in 'faqItems'
// 6. Na wijzigingen: sla op en herstart de development server

const cmsContent = {
  siteConfig,
  therapistInfo,
  heroContent,
  services,
  testimonials,
  processSteps,
  faqItems,
  whatsappConfig
};

export default cmsContent;
