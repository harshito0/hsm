'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/Services/Services';
import Consultation from '@/components/Consultation/Consultation';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';

export default function ServicesPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '64px' }}>
      <Navbar />
      <Services />
      <Consultation />
      <Footer />
      <FloatingActions />
    </main>
  );
}
