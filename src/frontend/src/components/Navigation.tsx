import { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Wellness', href: '#wellness' },
  { label: 'Health Tips', href: '#health-tips' },
  { label: 'Helplines', href: '#directory' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Elder Care', href: '#elder-care' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-nav border-b border-border' : ''
      }`}
      style={{ background: 'oklch(0.20 0.08 265)' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group min-h-[44px]"
            aria-label="Go to home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'oklch(0.72 0.18 55)' }}
            >
              <Heart className="w-5 h-5" style={{ color: 'oklch(0.12 0.05 50)' }} />
            </div>
            <div className="hidden sm:block leading-tight">
              <span
                className="font-bold text-base block"
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  color: 'oklch(0.98 0.01 100)',
                }}
              >
                Senior Health Guide
              </span>
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: 'oklch(0.72 0.18 55)' }}
              >
                Tips &amp; Helplines for Seniors
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-sm font-medium"
                  style={{ color: 'oklch(0.82 0.03 260)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Emergency badge desktop */}
          <a
            href="tel:112"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm min-h-[44px]"
            style={{
              background: 'oklch(0.55 0.22 25)',
              color: 'oklch(0.98 0.01 100)',
            }}
          >
            <Phone className="w-4 h-4" />
            112 — Emergency
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg"
            style={{ background: 'oklch(0.28 0.08 260)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <X className="w-5 h-5" style={{ color: 'oklch(0.82 0.03 260)' }} />
              : <Menu className="w-5 h-5" style={{ color: 'oklch(0.82 0.03 260)' }} />
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t pb-4"
            style={{
              background: 'oklch(0.20 0.08 265)',
              borderColor: 'oklch(0.28 0.08 260)',
            }}
          >
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-colors min-h-[44px]"
                    style={{ color: 'oklch(0.82 0.03 260)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.28 0.08 260)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-2 pt-2">
                <a
                  href="tel:112"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg font-bold text-base min-h-[44px] w-full"
                  style={{
                    background: 'oklch(0.55 0.22 25)',
                    color: 'oklch(0.98 0.01 100)',
                  }}
                >
                  <Phone className="w-4 h-4" />
                  112 — Emergency
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
