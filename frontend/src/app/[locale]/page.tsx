import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';
import SobreNosotros from '@/components/SobreNosotros';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

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