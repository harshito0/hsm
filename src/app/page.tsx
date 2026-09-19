'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import TrustMarquee from '@/components/TrustMarquee/TrustMarquee';
import EligibilityCalculator from '@/components/EligibilityCalculator/EligibilityCalculator';
import Services from '@/components/Services/Services';
import StatsBar from '@/components/StatsBar/StatsBar';
import Consultation from '@/components/Consultation/Consultation';
import News from '@/components/News/News';
import Process from '@/components/Process/Process';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import FloatingActions from '@/components/FloatingActions/FloatingActions';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <EligibilityCalculator />
      <Services />
      <StatsBar />
      <Consultation />
      <News />
      <Process />
      <Testimonials />
      <Footer />
      <FloatingActions />
    </main>
  );
}
