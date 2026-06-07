'use client';

import Link from 'next/link';
import { Code, Globe, Mail, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const serviciosLinks = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
  const enlacesLinks = ['l1', 'l2', 'l3', 'l4'];

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">Subelza CG</span>
            </Link>
            <p className="text-muted text-sm max-w-md mb-4">{t('description')}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-primary hover:bg-surface transition-colors"><Code className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-primary hover:bg-surface transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-primary hover:bg-surface transition-colors"><MessageSquare className="w-5 h-5" /></a>
              <a href="mailto:contacto@subelzacg.com" className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-primary hover:bg-surface transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              {serviciosLinks.map(link => <li key={link}><Link href="#servicios" className="text-muted hover:text-foreground text-sm transition-colors">{t(link)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('links')}</h4>
            <ul className="space-y-2">
              {enlacesLinks.map((link, i) => {
                const hrefs = ['#home', '#proyectos', '#nosotros', '#contacto'];
                return <li key={link}><Link href={hrefs[i]} className="text-muted hover:text-foreground text-sm transition-colors">{t(link)}</Link></li>;
              })}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">© 2026 Subelza CG. {t('copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted hover:text-foreground text-sm transition-colors">{t('privacy')}</a>
            <a href="#" className="text-muted hover:text-foreground text-sm transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}