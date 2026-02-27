import { Heart, BookOpen } from 'lucide-react';

const footerLinks = [
  { label: 'Wellness Guide', href: '#wellness' },
  { label: 'Health Conditions', href: '#health-tips' },
  { label: 'Helpline Directory', href: '#directory' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Health & Medical', href: '#health' },
  { label: 'Elder Care', href: '#elder-care' },
  { label: 'Mental Health', href: '#mental-health' },
];

const quickDials = [
  { number: '112', label: 'National Emergency' },
  { number: '108', label: 'Ambulance' },
  { number: '14567', label: 'Elder Line' },
  { number: '100', label: 'Police' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border"
      style={{ background: 'oklch(0.18 0.07 265)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'oklch(0.72 0.18 55)' }}
              >
                <Heart className="w-5 h-5" style={{ color: 'oklch(0.12 0.05 50)' }} />
              </div>
              <div>
                <span
                  className="font-bold text-lg block leading-tight"
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: 'oklch(0.95 0.01 100)',
                  }}
                >
                  Senior Health Guide
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: 'oklch(0.72 0.18 55)' }}
                >
                  Tips &amp; Helplines for Seniors
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.65 0.03 255)' }}>
              A student project providing health tips, wellness advice, and important helpline
              numbers for senior citizens across India.
            </p>
            <div
              className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg w-fit"
              style={{
                background: 'oklch(0.25 0.06 265)',
                color: 'oklch(0.65 0.03 255)',
              }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              School Project — For Educational Purposes
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-bold text-base mb-4"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                color: 'oklch(0.72 0.18 55)',
              }}
            >
              Sections
            </h3>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors min-h-[36px] flex items-center"
                    style={{ color: 'oklch(0.65 0.03 255)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.85 0.10 60)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.65 0.03 255)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick dial */}
          <div>
            <h3
              className="font-bold text-base mb-4"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                color: 'oklch(0.72 0.18 55)',
              }}
            >
              Quick Dial
            </h3>
            <div className="space-y-2">
              {quickDials.map((item) => (
                <a
                  key={item.number}
                  href={`tel:${item.number}`}
                  className="flex items-center gap-3 group min-h-[44px]"
                  aria-label={`Call ${item.label} at ${item.number}`}
                >
                  <span
                    className="font-bold text-lg"
                    style={{
                      fontFamily: 'JetBrains Mono, Courier New, monospace',
                      color: 'oklch(0.72 0.18 55)',
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-sm group-hover:underline"
                    style={{ color: 'oklch(0.65 0.03 255)' }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Indian flag stripe */}
        <div className="section-divider mb-6" style={{ borderRadius: '0' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'oklch(0.52 0.03 250)' }}>
            © {year} Senior Health Guide. For informational purposes only.
          </p>
          <p className="text-xs" style={{ color: 'oklch(0.45 0.03 250)' }}>
            All helpline numbers are government-verified. Subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}
