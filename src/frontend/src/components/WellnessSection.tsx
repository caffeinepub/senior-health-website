import {
  Activity,
  Apple,
  Stethoscope,
  Brain,
  Moon,
  Pill,
} from 'lucide-react';

const wellnessTips = [
  {
    icon: <Activity className="w-7 h-7" />,
    title: 'Stay Active',
    description:
      'Regular gentle movement keeps joints flexible, improves balance, and lifts your mood.',
    tips: [
      '30-minute morning walk daily',
      'Chair yoga or light stretching',
      'Balance exercises to prevent falls',
    ],
    color: 'oklch(0.42 0.14 155)',
    bg: 'oklch(0.96 0.04 155)',
  },
  {
    icon: <Apple className="w-7 h-7" />,
    title: 'Balanced Diet',
    description:
      'Good nutrition supports energy, bone strength, and immune health as you age.',
    tips: [
      'Calcium-rich foods: milk, curd, ragi',
      'Iron sources: spinach, lentils, dates',
      'Vitamins B12 & D from sunlight and eggs',
    ],
    color: 'oklch(0.52 0.18 50)',
    bg: 'oklch(0.97 0.04 55)',
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: 'Regular Check-ups',
    description:
      'Routine doctor visits catch problems early and keep you on top of your health.',
    tips: [
      'Blood pressure check every 3 months',
      'Annual blood sugar and cholesterol test',
      'Eye and dental check-ups yearly',
    ],
    color: 'oklch(0.38 0.14 255)',
    bg: 'oklch(0.96 0.03 255)',
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Mental Wellness',
    description:
      'Keeping the mind engaged and connected greatly reduces the risk of cognitive decline.',
    tips: [
      'Daily puzzles, crosswords, or reading',
      'Stay socially active — call friends & family',
      'Try guided meditation for 10 min/day',
    ],
    color: 'oklch(0.40 0.14 295)',
    bg: 'oklch(0.96 0.03 295)',
  },
  {
    icon: <Moon className="w-7 h-7" />,
    title: 'Sleep Health',
    description:
      'Quality sleep is the foundation of healing and mental sharpness for seniors.',
    tips: [
      'Keep a fixed bedtime and wake time',
      'Avoid screens 1 hour before sleep',
      'Keep bedroom cool, dark, and quiet',
    ],
    color: 'oklch(0.42 0.16 270)',
    bg: 'oklch(0.96 0.03 270)',
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: 'Medication Management',
    description:
      'Taking the right medicine at the right time is critical for managing chronic conditions.',
    tips: [
      'Use a weekly pill organiser',
      'Keep a written list of all medicines & doses',
      'Never skip doses without doctor advice',
    ],
    color: 'oklch(0.48 0.18 355)',
    bg: 'oklch(0.97 0.03 355)',
  },
];

export default function WellnessSection() {
  return (
    <section id="wellness" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              color: 'oklch(0.20 0.08 265)',
            }}
          >
            Wellness Guide for Seniors
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.45 0.03 255)' }}>
            Simple, actionable habits to stay healthy, happy, and independent every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wellnessTips.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: item.bg,
                border: `1.5px solid ${item.color}30`,
                boxShadow: '0 2px 10px oklch(0.28 0.08 260 / 0.07)',
              }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ background: item.color, color: 'oklch(0.98 0.01 100)' }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-xl leading-tight"
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: item.color,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base mb-4 leading-relaxed"
                style={{ color: 'oklch(0.30 0.06 265)' }}
              >
                {item.description}
              </p>

              {/* Tips list */}
              <ul className="space-y-2">
                {item.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                    style={{ color: 'oklch(0.35 0.06 265)' }}
                  >
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                      style={{ background: item.color }}
                      aria-hidden="true"
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
