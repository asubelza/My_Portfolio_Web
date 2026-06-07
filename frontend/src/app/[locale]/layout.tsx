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
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(', '),
    authors: [{ name: "Subelza CG" }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: locale,
      alternateLocale: ['es', 'en', 'pt'],
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

  return (
    <html lang={locale}>
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