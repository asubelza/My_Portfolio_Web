'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useToast } from './Toast';

export default function Contacto() {
  const t = useTranslations('contacto');
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacto`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (data.success) {
        showToast('success', t('success'));
        setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
      } else {
        showToast('error', data.message || t('error'));
      }
    } catch {
      showToast('error', t('error'));
    } finally {
      setStatus('idle');
    }
  };

  const servicios = ['service1', 'service2', 'service3', 'service4', 'service5', 'service6', 'service7', 'service8', 'service9'];
  const whyItems = ['why1', 'why2', 'why3', 'why4', 'why5', 'why6'];

  return (
    <section id="contacto" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-2 block">{t('title')}</span>
          <h2 className="text-4xl font-bold mb-4">{t('heading')} <span className="gradient-text">{t('highlight')}</span></h2>
          <p className="text-muted max-w-2xl mx-auto">{t('description')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">{t('formTitle')}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm text-muted mb-2">{t('name')}</label><input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:border-primary focus:outline-none" placeholder={t('namePlaceholder')} /></div>
                  <div><label className="block text-sm text-muted mb-2">{t('email')}</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:border-primary focus:outline-none" placeholder={t('emailPlaceholder')} /></div>
                </div>
                <div><label className="block text-sm text-muted mb-2">{t('phone')}</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:border-primary focus:outline-none" placeholder={t('phonePlaceholder')} /></div>
                <div><label className="block text-sm text-muted mb-2">{t('service')}</label><select name="servicio" value={formData.servicio} onChange={handleChange} required className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:border-primary focus:outline-none"><option value="">{t('servicePlaceholder')}</option>{servicios.map(s => <option key={s} value={t(s)}>{t(s)}</option>)}</select></div>
                <div><label className="block text-sm text-muted mb-2">{t('message')}</label><textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:border-primary focus:outline-none resize-none" placeholder={t('messagePlaceholder')} /></div>
                <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:hover:scale-100">
                  {status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" />{t('sending')}</> : <><Send className="w-5 h-5" />{t('submit')}</>}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">{t('infoTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div><div><div className="text-sm text-muted">{t('emailLabel')}</div><div className="font-medium">{t('emailValue')}</div></div></div>
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div><div><div className="text-sm text-muted">{t('phoneLabel')}</div><div className="font-medium">{t('phoneValue')}</div></div></div>
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-accent-secondary/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent-secondary" /></div><div><div className="text-sm text-muted">{t('locationLabel')}</div><div className="font-medium">{t('locationValue')}</div></div></div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-4">{t('whyTitle')}</h3>
              <ul className="space-y-3">{whyItems.map(item => <li key={item} className="flex items-center gap-2 text-muted"><div className="w-2 h-2 rounded-full bg-success" />{t(item)}</li>)}</ul>
            </div>
            <a href="https://wa.me/5491137772254" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 bg-success hover:bg-green-600 text-white rounded-xl font-medium transition-all hover:scale-[1.02]">
              <MessageCircle className="w-5 h-5" />{t('whatsapp')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}