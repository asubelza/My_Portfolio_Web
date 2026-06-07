'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const currentLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-sm font-medium hover:bg-surface-elevated transition-colors">
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
      </button>
      <div className="absolute right-0 mt-2 w-40 glass rounded-lg border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={pathname}
            locale={lang.code}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-elevated transition-colors ${
              locale === lang.code ? 'bg-primary/20 text-primary' : 'text-foreground'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}