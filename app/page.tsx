'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InstallationSteps from '@/components/InstallationSteps';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <InstallationSteps />
      <Footer />
    </main>
  );
}
