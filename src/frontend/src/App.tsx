import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WellnessSection from './components/WellnessSection';
import HealthTipsSection from './components/HealthTipsSection';
import HelplinesSection from './components/HelplinesSection';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed navigation */}
      <Navigation />

      {/* Main content — offset for fixed nav */}
      <main className="flex-1">
        <Hero onSearch={setSearchQuery} />
        <WellnessSection />
        <HealthTipsSection />
        <HelplinesSection searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
}
