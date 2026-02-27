import { Phone, Clock } from 'lucide-react';

export interface Helpline {
  name: string;
  number: string;
  description: string;
  availability: string;
  category: string;
}

interface CategoryStyle {
  badgeBg: string;
  badgeText: string;
  numberColor: string;
  borderAccent: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  emergency: {
    badgeBg: 'oklch(0.55 0.22 25)',
    badgeText: 'oklch(0.98 0.01 100)',
    numberColor: 'oklch(0.45 0.22 25)',
    borderAccent: 'oklch(0.55 0.22 25 / 0.25)',
  },
  health: {
    badgeBg: 'oklch(0.42 0.14 255)',
    badgeText: 'oklch(0.98 0.01 100)',
    numberColor: 'oklch(0.38 0.14 255)',
    borderAccent: 'oklch(0.42 0.14 255 / 0.25)',
  },
  'elder-care': {
    badgeBg: 'oklch(0.40 0.14 155)',
    badgeText: 'oklch(0.98 0.01 100)',
    numberColor: 'oklch(0.36 0.14 155)',
    borderAccent: 'oklch(0.40 0.14 155 / 0.25)',
  },
  'mental-health': {
    badgeBg: 'oklch(0.40 0.14 295)',
    badgeText: 'oklch(0.98 0.01 100)',
    numberColor: 'oklch(0.38 0.14 295)',
    borderAccent: 'oklch(0.40 0.14 295 / 0.25)',
  },
  'women-safety': {
    badgeBg: 'oklch(0.50 0.18 355)',
    badgeText: 'oklch(0.98 0.01 100)',
    numberColor: 'oklch(0.48 0.18 355)',
    borderAccent: 'oklch(0.50 0.18 355 / 0.25)',
  },
  government: {
    badgeBg: 'oklch(0.52 0.18 50)',
    badgeText: 'oklch(0.12 0.05 50)',
    numberColor: 'oklch(0.45 0.18 50)',
    borderAccent: 'oklch(0.52 0.18 50 / 0.25)',
  },
  financial: {
    badgeBg: 'oklch(0.50 0.15 80)',
    badgeText: 'oklch(0.12 0.04 80)',
    numberColor: 'oklch(0.44 0.15 80)',
    borderAccent: 'oklch(0.50 0.15 80 / 0.25)',
  },
};

const categoryLabels: Record<string, string> = {
  emergency: 'Emergency',
  health: 'Health & Medical',
  'elder-care': 'Elder Care',
  'mental-health': 'Mental Health',
  'women-safety': 'Women Safety',
  government: 'Government',
  financial: 'Financial',
};

interface HelplineCardProps {
  helpline: Helpline;
}

export default function HelplineCard({ helpline }: HelplineCardProps) {
  const style = categoryStyles[helpline.category] ?? categoryStyles.government;
  const label = categoryLabels[helpline.category] ?? helpline.category;
  const is247 = helpline.availability.toLowerCase().includes('24/7');

  return (
    <article
      className="helpline-card flex flex-col gap-3"
      style={{
        borderLeftWidth: '3px',
        borderLeftColor: style.badgeBg,
        borderLeftStyle: 'solid',
      }}
    >
      {/* Category badge */}
      <div className="flex items-start justify-between gap-2">
        <span
          className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide"
          style={{
            background: style.badgeBg,
            color: style.badgeText,
          }}
        >
          {label}
        </span>

        {/* Availability badge */}
        {is247 ? (
          <span
            className="availability-badge-247 inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold"
            style={{
              background: 'oklch(0.92 0.08 155)',
              color: 'oklch(0.28 0.12 155)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: 'oklch(0.42 0.14 155)' }}
            />
            24/7
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium"
            style={{
              background: 'oklch(0.93 0.01 250)',
              color: 'oklch(0.45 0.03 250)',
            }}
          >
            <Clock className="w-3 h-3" />
            {helpline.availability}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        className="font-bold text-base leading-snug"
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          color: 'oklch(0.20 0.08 265)',
        }}
      >
        {helpline.name}
      </h3>

      {/* Phone number — large & clickable */}
      <a
        href={`tel:${helpline.number.replace(/[^0-9+]/g, '')}`}
        className="phone-number text-2xl font-bold flex items-center gap-2 group transition-opacity hover:opacity-80 min-h-[44px]"
        style={{ color: style.numberColor }}
        aria-label={`Call ${helpline.name} at ${helpline.number}`}
      >
        <Phone
          className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        />
        {helpline.number}
      </a>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'oklch(0.45 0.03 255)' }}
      >
        {helpline.description}
      </p>
    </article>
  );
}
