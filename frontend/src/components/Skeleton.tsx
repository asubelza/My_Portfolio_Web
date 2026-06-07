'use client';

import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-6 border border-border">
      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-surface-elevated" />
        <div className="h-6 w-3/4 rounded bg-surface-elevated" />
        <div className="h-4 w-full rounded bg-surface-elevated" />
        <div className="h-4 w-2/3 rounded bg-surface-elevated" />
        <div className="h-4 w-1/2 rounded bg-surface-elevated" />
      </motion.div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="space-y-4">
          <div className="h-8 w-48 mx-auto rounded bg-surface-elevated" />
          <div className="h-16 w-full max-w-2xl mx-auto rounded bg-surface-elevated" />
          <div className="h-6 w-3/4 mx-auto rounded bg-surface-elevated" />
          <div className="flex justify-center gap-4 pt-8">
            <div className="h-12 w-40 rounded-lg bg-surface-elevated" />
            <div className="h-12 w-40 rounded-lg bg-surface-elevated" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SkeletonServices() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-4 w-24 mx-auto rounded bg-surface-elevated" />
          <div className="h-10 w-64 mx-auto rounded bg-surface-elevated" />
          <div className="h-5 w-96 mx-auto rounded bg-surface-elevated" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkeletonContact() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 text-center mb-16">
          <div className="h-4 w-24 mx-auto rounded bg-surface-elevated" />
          <div className="h-10 w-64 mx-auto rounded bg-surface-elevated" />
          <div className="h-5 w-96 mx-auto rounded bg-surface-elevated" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass rounded-2xl p-8 border border-border space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 rounded-lg bg-surface-elevated" />
            ))}
          </div>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 border border-border h-48" />
            <div className="glass rounded-2xl p-8 border border-border h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}