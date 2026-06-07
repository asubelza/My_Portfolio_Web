'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Workflow, Globe } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const services = [
    { icon: Bot, labelKey: 'serviceIa' },
    { icon: Workflow, labelKey: 'serviceRpa' },
    { icon: Globe, labelKey: 'serviceWeb' },
  ];

  const stats = [
    { number: '3+', labelKey: 'statsYears' },
    { number: '50+', labelKey: 'statsProjects' },
    { number: '100%', labelKey: 'statsSatisfaction' },
    { number: '24/7', labelKey: 'statsSupport' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted">{t('subtitle')}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('title')}{' '}
              <span className="gradient-text">{t('ia')}</span>{' '}
              {t('y')}{' '}
              <span className="gradient-text">{t('automatizacion')}</span>
            </h1>

            <p className="text-xl text-muted mb-8 max-w-xl">{t('description')}</p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all hover:scale-105">
                {t('cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-surface-elevated text-foreground rounded-lg font-medium transition-all">
                {t('proyectos')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {services.map((service, i) => (
                <motion.div key={service.labelKey} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-2 text-muted">
                  <service.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm">{t(service.labelKey)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-accent-secondary/20 rounded-3xl animate-pulse-glow" />
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-surface-elevated rounded-2xl border border-border">
                    <Bot className="w-10 h-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{t('feature1Title')}</h3>
                    <p className="text-sm text-muted">{t('feature1Desc')}</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-surface-elevated rounded-2xl border border-border">
                    <Workflow className="w-10 h-10 text-accent mb-3" />
                    <h3 className="font-semibold mb-1">{t('feature2Title')}</h3>
                    <p className="text-sm text-muted">{t('feature2Desc')}</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-surface-elevated rounded-2xl border border-border">
                    <Globe className="w-10 h-10 text-accent-secondary mb-3" />
                    <h3 className="font-semibold mb-1">{t('feature3Title')}</h3>
                    <p className="text-sm text-muted">{t('feature3Desc')}</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-surface-elevated rounded-2xl border border-border">
                    <svg className="w-10 h-10 text-success mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <h3 className="font-semibold mb-1">{t('feature4Title')}</h3>
                    <p className="text-sm text-muted">{t('feature4Desc')}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-12 mt-20">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-muted text-sm">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}