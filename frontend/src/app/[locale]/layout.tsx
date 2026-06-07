import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist } from 'next/font/google';
import type { Metadata } from 'next';
import "../globals.css";
import ErrorBoundary from '@/components/ErrorBoundary';
import { ToastProvider } from '@/components/Toast';

export const dynamic = 'force-dynamic';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const metadataByLocale: Record<string, { title: string; description: string; keywords: string }> = {
  es: {
    title: "Subelza CG | Consultora de Ingeniería de Software",
    description: "Consultora especializada en IA, Automatizaciones (RPA, UI Path, N8N) y desarrollo de software a medida. Transformamos tu negocio con soluciones tecnológicas.",
    keywords: "consultora, software, IA, RPA, automatización, desarrollo web, consultoría tecnológica, Argentina",
  },
  en: {
    title: "Subelza CG | Software Engineering Consulting",
    description: "Consultancy specializing in AI, Automations (RPA, UI Path, N8N) and custom software development. We transform your business with technological solutions.",
    keywords: "consulting, software, AI, RPA, automation, web development, tech consultancy, Argentina",
  },
  pt: {
    title: "Subelza CG | Consultoria de Engenharia de Software",
    description: "Consultoria especializada em IA, Automações (RPA, UI Path, N8N) e desenvolvimento de software personalizado. Transformamos seu negócio com soluções tecnológicas.",
    keywords: "consultoria, software, IA, RPA, automação, desenvolvimento web, consultoria tecnológica, Argentina",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale.es;
  const baseUrl = 'https://subelzacg.com.ar';
  const ogImage = `${baseUrl}/og-image.png`;
  
  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(', '),
    authors: [{ name: 'Subelza CG', url: baseUrl }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        pt: '/pt',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: 'Subelza CG',
      type: 'website',
      locale: locale,
      alternateLocale: ['es', 'en', 'pt'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Subelza CG - Consultora de Ingeniería de Software',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Subelza CG',
    url: 'https://subelzacg.com.ar',
    logo: 'https://subelzacg.com.ar/og-image.png',
    description: 'Consultora de Ingeniería de Software especializada en IA, Automatizaciones y Desarrollo a Medida',
    foundingDate: '2023',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: process.env.EMAIL_USER || 'contacto@subelzacg.com.ar',
    },
    sameAs: [
      'https://github.com/asubelza',
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen bg-background text-foreground antialiased ${geistSans.variable}`}>
        <ErrorBoundary>
          <ToastProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}