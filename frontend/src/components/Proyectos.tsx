'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

const proyectos = [
  { titleKey: 'p1Title', descKey: 'p1Desc', tecnologias: ['UiPath', 'N8N', 'Python', 'PostgreSQL'], imagen: 'rpa' },
  { titleKey: 'p2Title', descKey: 'p2Desc', tecnologias: ['Python', 'TensorFlow', 'Dialogflow', 'Node.js'], imagen: 'ia' },
  { titleKey: 'p3Title', descKey: 'p3Desc', tecnologias: ['Next.js', 'Stripe', 'PostgreSQL', 'Docker'], imagen: 'web' },
  { titleKey: 'p4Title', descKey: 'p4Desc', tecnologias: ['Node.js', 'GraphQL', 'AWS Lambda', 'Redis'], imagen: 'api' },
];

const gradients: Record<string, string> = { rpa: 'from-orange-500 to-red-500', ia: 'from-purple-500 to-pink-500', web: 'from-blue-500 to-cyan-500', api: 'from-green-500 to-emerald-500' };

export default function Proyectos() {
  const t = useTranslations('proyectos');

  return (
    <section id="proyectos" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-2 block">{t('title')}</span>
          <h2 className="text-4xl font-bold mb-4">{t('heading')} <span className="gradient-text">{t('highlight')}</span></h2>
          <p className="text-muted max-w-2xl mx-auto">{t('description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, i) => (
            <motion.div key={proyecto.titleKey} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group glass rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all">
              <div className={`h-48 bg-gradient-to-br ${gradients[proyecto.imagen]} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center"><span className="text-3xl font-bold text-white">{i + 1}</span></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{t(proyecto.titleKey)}</h3>
                <p className="text-muted mb-4 text-sm">{t(proyecto.descKey)}</p>
                <div className="flex flex-wrap gap-2 mb-4">{proyecto.tecnologias.map(tech => <span key={tech} className="px-3 py-1 text-xs bg-surface-elevated rounded-full text-muted">{tech}</span>)}</div>
                <button className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" />{t('view')}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <button className="px-6 py-3 glass rounded-lg font-medium hover:bg-surface-elevated transition-colors">{t('viewAll')}</button>
        </motion.div>
      </div>
    </section>
  );
}