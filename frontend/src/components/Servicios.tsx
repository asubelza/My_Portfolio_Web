'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Globe, Puzzle, FileText, BarChart3, Smartphone, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const servicios = [
  { title: 'service1', desc: 'service1Desc', features: ['service1f1', 'service1f2', 'service1f3'], color: 'from-primary to-blue-400', icon: Bot },
  { title: 'service2', desc: 'service2Desc', features: ['service2f1', 'service2f2', 'service2f3'], color: 'from-orange-500 to-red-400', icon: FileText },
  { title: 'service3', desc: 'service3Desc', features: ['service3f1', 'service3f2', 'service3f3'], color: 'from-accent to-cyan-400', icon: BarChart3 },
  { title: 'service4', desc: 'service4Desc', features: ['service4f1', 'service4f2', 'service4f3'], color: 'from-green-500 to-emerald-400', icon: Workflow },
  { title: 'service5', desc: 'service5Desc', features: ['service5f1', 'service5f2', 'service5f3'], color: 'from-accent-secondary to-purple-400', icon: Smartphone },
  { title: 'service6', desc: 'service6Desc', features: ['service6f1', 'service6f2', 'service6f3'], color: 'from-pink-500 to-rose-400', icon: Globe },
  { title: 'service7', desc: 'service7Desc', features: ['service7f1', 'service7f2', 'service7f3'], color: 'from-success to-green-400', icon: Puzzle },
  { title: 'service8', desc: 'service8Desc', features: ['service8f1', 'service8f2', 'service8f3'], color: 'from-yellow-500 to-amber-400', icon: Sparkles },
];

export default function Servicios() {
  const t = useTranslations('servicios');

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-2 block">{t('title')}</span>
          <h2 className="text-4xl font-bold mb-4">{t('heading')} <span className="gradient-text">{t('highlight')}</span></h2>
          <p className="text-muted max-w-2xl mx-auto">{t('description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => (
            <motion.div key={servicio.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${servicio.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <servicio.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t(servicio.title)}</h3>
              <p className="text-muted text-sm mb-4 line-clamp-2">{t(servicio.desc)}</p>
              <ul className="space-y-1 mb-4">
                {servicio.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted">
                    <ChevronRight className="w-3 h-3 text-accent flex-shrink-0" />{t(feature)}
                  </li>
                ))}
              </ul>
              <Link href="#contacto" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors">
                {t('cta')}<ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}