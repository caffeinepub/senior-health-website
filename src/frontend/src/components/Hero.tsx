import { useState } from 'react';
import { Search, Phone, Heart, BookOpen } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-gradient pt-16 pb-0"
      style={{ minHeight: '440px' }}
    >
      {/* Decorative flag-stripe */}
      <div className="section-divider mb-0" style={{ borderRadius: '0' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            color: 'oklch(0.97 0.01 100)',
          }}
        >
          Your Complete{' '}
          <span style={{ color: 'oklch(0.72 0.18 55)' }}>Senior Health</span>{' '}
          Guide
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'oklch(0.78 0.03 260)' }}
        >
          Health tips, wellness advice, and 30+ Indian helpline numbers for
          emergencies, elder care, medical support, and more — all in one place.
        </p>

        {/* Search bar — filters helplines */}
        <div className="relative max-w-xl mx-auto mb-8">
          <label htmlFor="helpline-search" className="sr-only">
            Search helplines
          </label>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              style={{ color: 'oklch(0.52 0.03 250)' }}
            />
            <input
              id="helpline-search"
              type="search"
              placeholder="Search helplines by name, number, or category…"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-base font-medium shadow-lg focus:outline-none focus:ring-2"
              style={{
                background: 'oklch(1.0 0 0)',
                color: 'oklch(0.18 0.06 265)',
                border: '2px solid oklch(0.88 0.02 255)',
                fontSize: '1.05rem',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'oklch(0.72 0.18 55)';
                e.currentTarget.style.boxShadow = '0 0 0 3px oklch(0.72 0.18 55 / 0.25)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'oklch(0.88 0.02 255)';
                e.currentTarget.style.boxShadow = '';
              }}
            />
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {[
            { icon: <Heart className="w-4 h-4" />, label: '6 Wellness Topics' },
            { icon: <BookOpen className="w-4 h-4" />, label: '6 Health Conditions' },
            { icon: <Phone className="w-4 h-4" />, label: '30+ Helplines' },
            { icon: <span className="text-sm font-bold">24/7</span>, label: 'Most Helplines Free' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: 'oklch(0.72 0.03 260)' }}
            >
              <span style={{ color: 'oklch(0.72 0.18 55)' }}>{stat.icon}</span>
              {stat.label}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('#wellness')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 min-h-[56px]"
            style={{
              background: 'oklch(0.72 0.18 55)',
              color: 'oklch(0.12 0.05 50)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.64 0.20 50)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.72 0.18 55)';
            }}
          >
            <Heart className="w-4 h-4" />
            Health Tips
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#directory')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 min-h-[56px]"
            style={{
              background: 'oklch(0.30 0.08 265)',
              color: 'oklch(0.97 0.01 100)',
              border: '1.5px solid oklch(0.50 0.08 260)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.38 0.10 265)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.30 0.08 265)';
            }}
          >
            <Phone className="w-4 h-4" />
            Helpline Numbers
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px' }}
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0,60 L0,20 Q360,60 720,30 Q1080,0 1440,30 L1440,60 Z"
            fill="oklch(0.98 0.005 250)"
          />
        </svg>
      </div>
    </section>
  );
}
