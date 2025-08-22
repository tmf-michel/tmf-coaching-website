// 🏆 LOGO CONFIGURATIE - Update deze paden naar jouw eigen logo's
// ================================================================

export const logoConfig = {
  // TMF-Coaching hoofdlogo - placeholder for now, you can replace with your actual logo
  tmfLogo: {
    src: "/images/logos/tmf-logo.svg", // Simple SVG placeholder logo
    alt: "TMF-Coaching Logo",
    width: 80,
    height: 80
  },

  // Favicon
  favicon: {
    src: "/favicon.ico", // Now using your uploaded favicon
    sizes: "16x16 32x32 48x48"
  },

  // Certificering logo's - Now using your actual uploaded logos!
  certifications: {
    omni: {
      src: "/images/logos/omni-logo.png", // ✅ Your actual OMNI logo
      alt: "OMNI Hypnosis Training Center",
      width: 48,
      height: 48,
      name: "OMNI Hypnosis"
    },

    gat: {
      src: "/images/logos/gat-logo.png", // ✅ Your actual GAT logo
      alt: "GAT Geschillen Alternatieve Therapeuten",
      width: 48,
      height: 48,
      name: "GAT Erkend"
    },

    cat: {
      src: "/images/logos/cat-logo.png", // ✅ Your actual CAT logo
      alt: "CAT Collectief Alternatieve Therapeuten",
      width: 48,
      height: 48,
      name: "CAT Collectief"
    }
  }
};

// Helper functie voor logo URLs
export const getLogoUrl = (logoKey: keyof typeof logoConfig.certifications | 'tmfLogo') => {
  if (logoKey === 'tmfLogo') {
    return logoConfig.tmfLogo.src;
  }
  return logoConfig.certifications[logoKey].src;
};

// ✅ LOGO'S TOEGEVOEGD!
// =====================
// ✓ OMNI logo: /images/logos/omni-logo.png
// ✓ GAT logo: /images/logos/gat-logo.png
// ✓ CAT logo: /images/logos/cat-logo.png
// ✓ Favicon: /favicon.ico
//
// 📝 TMF LOGO TOEVOEGEN:
// Als je jouw eigen TMF logo hebt, upload deze naar:
// public/images/logos/tmf-logo.png
//
// 🔄 HERSTART DEV SERVER:
// Na deze wijzigingen, herstart de development server om de logo's te zien!
