import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TMF-Coaching | Hypnotherapie voor Angst, Verslavingen & Fobieën | Breda",
  description: "Professionele hypnotherapie in Breda voor angst, fobieën, stoppen met roken, eetstoornis en trauma. Wetenschappelijk onderbouwde behandeling door gecertificeerd OMNI hypnotherapeut Michel Werneri. Plan gratis intake.",
  keywords: "hypnotherapie, hypnose, angst behandeling, stoppen met roken, fobieën, verslaving, trauma therapie, Breda, Michel Werneri, OMNI hypnotherapeut, paniekaanvallen, sociale angst, vliegangst, eetproblemen, burnout, PTSD",
  authors: [{ name: "Michel Werneri", url: "https://www.tmf-coaching.nl" }],
  creator: "TMF-Coaching",
  publisher: "TMF-Coaching",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tmf-coaching.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TMF-Coaching | Hypnotherapie voor Angst & Verslavingen",
    description: "Overwin angst, fobieën en verslavingen met wetenschappelijk onderbouwde hypnotherapie. Ervaren OMNI hypnotherapeut in Breda. Gratis intake beschikbaar.",
    url: "https://www.tmf-coaching.nl",
    siteName: "TMF-Coaching",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TMF-Coaching | Hypnotherapie voor Angst & Verslavingen",
    description: "Overwin angst, fobieën en verslavingen met wetenschappelijk onderbouwde hypnotherapie. Gratis intake beschikbaar.",
    creator: "@MLASWI",
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tmf-coaching.nl/#organization",
      name: "TMF-Coaching",
      url: "https://www.tmf-coaching.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tmf-coaching.nl/images/logos/tmf-logo.png"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+31-76-369-0248",
        contactType: "customer service",
        availableLanguage: "Dutch"
      },
      sameAs: [
        "https://www.linkedin.com/in/michel-werneri/",
        "https://www.facebook.com/michel.werneri",
        "https://www.instagram.com/michel_a_w/"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.tmf-coaching.nl/#person",
      name: "Michel Werneri",
      jobTitle: "OMNI Hypnotherapeut",
      worksFor: {
        "@id": "https://www.tmf-coaching.nl/#organization"
      },
      url: "https://www.tmf-coaching.nl",
      sameAs: [
        "https://www.linkedin.com/in/michel-werneri/"
      ]
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.tmf-coaching.nl/#medicalbusiness",
      name: "TMF-Coaching Hypnotherapie",
      description: "Professionele hypnotherapie praktijk gespecialiseerd in behandeling van angst, fobieën, verslavingen en trauma",
      url: "https://www.tmf-coaching.nl",
      telephone: "+31-76-369-0248",
      email: "michel@tmf-coaching.nl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Breda",
        addressCountry: "NL"
      },
      medicalSpecialty: [
        "Hypnotherapy",
        "Anxiety Treatment",
        "Addiction Treatment",
        "Phobia Treatment",
        "Trauma Therapy"
      ],
      priceRange: "€€"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is hypnose veilig?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, hypnose is volledig veilig. Je behoudt altijd de controle en bent je bewust van wat er gebeurt. Ik ben gecertificeerd OMNI hypnotherapeut en werk volgens strenge ethische richtlijnen."
          }
        },
        {
          "@type": "Question",
          "name": "Hoeveel sessies heb ik nodig?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dit verschilt per persoon en probleem. Eenvoudige fobieën kunnen vaak in 1-3 sessies worden opgelost, terwijl complexere problemen zoals trauma 6-15 sessies kunnen vergen. We bespreken dit tijdens de intake."
          }
        },
        {
          "@type": "Question",
          "name": "Kan iedereen gehypnotiseerd worden?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ongeveer 95% van de mensen kan in hypnose gaan. Het vereist alleen je bereidheid om mee te werken. Hypnose is een natuurlijke staat die je dagelijks ervaart, zoals bij dagdromen."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is het verschil met psychologie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hypnotherapie werkt direct met je onderbewustzijn waar gedragspatronen zijn opgeslagen. Dit maakt verandering vaak sneller mogelijk dan traditionele gesprekstherapie."
          }
        },
        {
          "@type": "Question",
          "name": "Worden de kosten vergoed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sommige aanvullende verzekeringen vergoeden hypnotherapie. Check je polis of neem contact op met je verzekeraar. Veel klanten vinden de investering het waard voor de levenslange voordelen."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Hypnotherapie voor Angst en Fobieën",
      "description": "Professionele behandeling van angststoornissen, paniekaanvallen, sociale angst en specifieke fobieën",
      "provider": {
        "@id": "https://www.tmf-coaching.nl/#organization"
      },
      "serviceType": "Hypnotherapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hypnotherapie Diensten",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Behandeling Paniekaanvallen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sociale Angst Therapie"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stoppen met Roken"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Trauma en PTSD Behandeling"
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
