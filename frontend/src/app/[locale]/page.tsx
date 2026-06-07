import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import { SectionSkeleton } from '@/components/Skeleton';

// Componentes lazy-loaded (carga cuando el usuario scrollea)
const Proyectos = dynamic(() => import('@/components/Proyectos'), {
  loading: () => <SectionSkeleton />,
});
const SobreNosotros = dynamic(() => import('@/components/SobreNosotros'), {
  loading: () => <SectionSkeleton />,
});
const Contacto = dynamic(() => import('@/components/Contacto'), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <SectionSkeleton />,
});

export default function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}
