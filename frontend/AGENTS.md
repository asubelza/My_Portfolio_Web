# Subelza CG - Portfolio Website

## Project Overview
- **Type**: Professional portfolio website for a software consultancy (AI, RPA, Automation, Custom Development)
- **Stack**: Next.js 16 + Tailwind CSS + Framer Motion
- **Languages**: Spanish (es), Portuguese (pt), English (en) - scalable for more
- **i18n**: next-intl (v4.11.1)

## Project Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Localized pages (next-intl routing)
│   │   │   ├── layout.tsx      # Locale-specific layout with NextIntlClientProvider
│   │   │   └── page.tsx        # Main page (renders all components)
│   │   ├── globals.css         # Tailwind + custom styles
│   │   └── layout.tsx          # Root layout (minimal, just wrapper)
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with language switcher
│   │   ├── LanguageSwitcher.tsx # Dropdown language selector
│   │   ├── Hero.tsx            # Hero section with stats
│   │   ├── Servicios.tsx       # Services grid (8 services)
│   │   ├── Proyectos.tsx        # Projects showcase
│   │   ├── SobreNosotros.tsx   # About us with values
│   │   ├── Contacto.tsx        # Contact form
│   │   └── Footer.tsx          # Footer with links
│   ├── i18n/
│   │   ├── routing.ts          # Locale routing configuration
│   │   └── request.ts          # Request config for next-intl
│   ├── locales/                # Translation files (JSON)
│   │   ├── es.json             # Spanish
│   │   ├── pt.json             # Portuguese
│   │   └── en.json             # English
│   ├── i18n.ts                 # next-intl configuration
│   └── middleware.ts           # Middleware for locale routing
├── next.config.ts              # Next.js config with next-intl plugin
├── package.json
└── tsconfig.json
```

## How to Run
```bash
cd frontend
npm run dev
# Opens at http://localhost:3000
```

## How to Add New Languages
1. Add locale to `src/i18n/routing.ts`:
   ```typescript
   locales: ['es', 'pt', 'en', 'fr']
   ```
2. Add language option in `LanguageSwitcher.tsx`:
   ```typescript
   { code: 'fr', name: 'Français', flag: '🇫🇷' }
   ```
3. Create `src/locales/fr.json` with translations (copy from es.json as base)

## Key Decisions

### i18n Approach
- **next-intl** chosen over LanguageContext for scalability
- Uses routing-based i18n (URLs like `/es/`, `/pt/`, `/en/`)
- All translations in separate JSON files per locale
- Uses `useTranslations('namespace')` hook in components

### Components Pattern
- Each component uses `useTranslations('section_name')` to get its translations
- Translation keys follow nesting: `hero.title`, `hero.cta`, etc.
- Components are client-side (`'use client'`) for animations

### Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API for contact form (e.g., `http://localhost:4001`)

## Available Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Dependencies
- `next`: 16.2.6
- `next-intl`: 4.11.1
- `framer-motion`: 12.38.0
- `lucide-react`: 1.14.0
- `react`: 19.2.4
- `tailwindcss`: 4

## Translation Structure
Each locale file has this namespace structure:
- `nav`: Navigation items
- `hero`: Hero section
- `servicios`: Services section
- `proyectos`: Projects section
- `nosotros`: About us section
- `contacto`: Contact section + form
- `footer`: Footer section

## Notes
- Middleware handles locale detection and routing
- Default locale is Spanish (es)
- Contact form submits to backend at `NEXT_PUBLIC_API_URL/contacto`
- All component translations use the `t()` function from next-intl