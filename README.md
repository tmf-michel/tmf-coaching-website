# TMF-Coaching Website

Modern therapeutic coaching platform featuring anxiety treatment and smoking cessation services.

## Features

- **Multi-therapy logos**: TMF, CAT, GAT, and OMNI therapy logos
- **Specialized landing pages**:
  - Anxiety treatment (angst-behandeling)
  - Smoking cessation (stoppen-met-roken)
- **WhatsApp booking widget**: Direct contact integration
- **Modern responsive design**: Built with Tailwind CSS and shadcn/ui
- **Content management system**: Easy content updates
- **Static site generation**: Optimized for performance

## Technologies

- Next.js 15.3.2
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives

## Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
bun run build
```

This creates a static export in the `out/` directory, ready for deployment.

## Deployment Options

### Netlify (Recommended)
- Push to GitHub
- Connect repository to Netlify
- Deploy automatically with `netlify.toml` configuration

### Vercel
- Import GitHub repository
- Auto-deploy on commits

### Other Static Hosts
- Upload the `out/` folder after running `bun run build`

## Project Structure

```
src/
├── app/
│   ├── angst-behandeling/    # Anxiety treatment page
│   ├── stoppen-met-roken/    # Smoking cessation page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── BookingForm.tsx       # Contact form
│   └── WhatsAppWidget.tsx    # WhatsApp integration
└── lib/
    ├── cms-content.ts        # Content management
    └── logos.ts              # Logo configuration
```

## License

Private project for TMF-Coaching.
