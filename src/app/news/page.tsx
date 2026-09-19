'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar/Navbar';
import News from '@/components/News/News';
import Consultation from '@/components/Consultation/Consultation';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';

export default function NewsPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '64px' }}>
      <Navbar />
      <News />
      <Consultation />
      <Footer />
      <FloatingActions />
    </main>
  );
}
