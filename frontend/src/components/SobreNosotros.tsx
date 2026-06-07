'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const valores = [
  { icon: Target, key: 'valuesMission' },
  { icon: Zap, key: 'valuesVision' },
  { icon: Users, key: 'valuesTeam' },
  { icon: Award, key: 'valuesCommitment' },
];

export default function SobreNosotros() {
  const t = useTranslations('nosotros');

  const getValue = (key: string) => t(key);

  return (
    <section id="nosotros" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-2 block">{t('title')}</span>
          <h2 className="text-4xl font-bold mb-4">{t('heading')} <span className="gradient-text">{t('highlight')}</span></h2>
          <p className="text-muted max-w-2xl mx-auto">{t('description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-accent-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold gradient-text mb-2">3+</div>
                <div className="text-xl text-muted">{t('statsYears')}</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4">{t('historyTitle')}</h3>
            <p className="text-muted mb-4">{t('historyP1')}</p>
            <p className="text-muted mb-6">{t('historyP2')}</p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 glass rounded-lg"><span className="text-primary font-bold">50+</span><span className="text-muted text-sm ml-2">{t('statsProjects')}</span></div>
              <div className="px-4 py-2 glass rounded-lg"><span className="text-accent font-bold">100%</span><span className="text-muted text-sm ml-2">{t('statsSatisfaction')}</span></div>
              <div className="px-4 py-2 glass rounded-lg"><span className="text-accent-secondary font-bold">24/7</span><span className="text-muted text-sm ml-2">{t('statsSupport')}</span></div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, i) => (
            <motion.div key={valor.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
              <valor.icon className="w-10 h-10 text-accent mb-4" />
              <h4 className="text-lg font-bold mb-2">{getValue(valor.key)}</h4>
              <p className="text-muted text-sm">{getValue(`${valor.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}