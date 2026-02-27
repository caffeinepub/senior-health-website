import { Heart, Droplets, Bone, Eye, Ear, ShieldAlert } from 'lucide-react';

const healthTopics = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Heart Health',
    tagline: 'Keep your heart strong every day',
    description:
      'Cardiovascular disease is the leading cause of illness in seniors. Small lifestyle changes make a big difference.',
    tips: [
      'Walk briskly for at least 30 minutes most days',
      'Reduce salt, fried foods, and processed snacks',
      'Know your blood pressure numbers — aim below 130/80',
    ],
    color: 'oklch(0.50 0.22 25)',
    tag: 'Very Common',
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Diabetes Management',
    tagline: 'Keep blood sugar stable naturally',
    description:
      'Type 2 diabetes is very manageable with the right diet and daily habits.',
    tips: [
      'Choose whole grains: brown rice, jowar, bajra',
      'Check blood sugar regularly as advised by doctor',
      'Stay hydrated — drink 8 glasses of water daily',
    ],
    color: 'oklch(0.42 0.14 155)',
    tag: 'Common in Seniors',
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'Arthritis & Joint Pain',
    tagline: 'Move more, hurt less',
    description:
      'Arthritis affects most seniors. Gentle movement and warm compresses can ease daily discomfort.',
    tips: [
      'Gentle swimming or water aerobics is joint-friendly',
      'Apply warm compresses to stiff joints each morning',
      'Avoid staying in one position for too long',
    ],
    color: 'oklch(0.52 0.18 50)',
    tag: 'Pain Management',
  },
  {
    icon: <Bone className="w-6 h-6" />,
    title: 'Bone Strength',
    tagline: 'Prevent fractures before they happen',
    description:
      'Bone density decreases with age. Nutrition and weight-bearing exercise are your best protection.',
    tips: [
      '1–2 glasses of milk or curd daily for calcium',
      '15 minutes of morning sunlight for Vitamin D',
      'Weight-bearing walks help maintain bone density',
    ],
    color: 'oklch(0.40 0.14 295)',
    tag: 'Osteoporosis Prevention',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Eye Care',
    tagline: 'Protect your vision for life',
    description:
      'Many common eye conditions — like cataracts and glaucoma — are treatable if caught early.',
    tips: [
      'Annual eye check-up even if vision feels fine',
      'Eat carrots, leafy greens, and eggs for eye nutrients',
      'Wear UV-protective sunglasses outdoors',
    ],
    color: 'oklch(0.38 0.14 255)',
    tag: 'Preventive Care',
  },
  {
    icon: <Ear className="w-6 h-6" />,
    title: 'Hearing Care',
    tagline: 'Stay connected to the world around you',
    description:
      'Hearing loss in seniors is often gradual. Early detection prevents social isolation and cognitive decline.',
    tips: [
      'Hearing test recommended every 3 years after 60',
      'Avoid prolonged exposure to loud noise',
      'Modern hearing aids are small, effective, and affordable',
    ],
    color: 'oklch(0.48 0.18 355)',
    tag: 'Sensory Health',
  },
];

export default function HealthTipsSection() {
  return (
    <section
      id="health-tips"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'oklch(0.97 0.01 255)' }}
    >
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
            Common Health Conditions
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.45 0.03 255)' }}>
            Practical tips for managing the most common health challenges that affect seniors.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{
                background: 'oklch(1.0 0 0)',
                border: '1.5px solid oklch(0.88 0.02 255)',
                boxShadow: '0 2px 10px oklch(0.28 0.08 260 / 0.06)',
              }}
            >
              {/* Coloured top bar */}
              <div
                className="h-2 w-full"
                style={{ background: topic.color }}
                aria-hidden="true"
              />

              <div className="p-6">
                {/* Icon + title row */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 mt-0.5"
                    style={{ background: topic.color, color: 'oklch(0.98 0.01 100)' }}
                  >
                    {topic.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-xl leading-tight mb-0.5"
                      style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        color: 'oklch(0.20 0.08 265)',
                      }}
                    >
                      {topic.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: topic.color }}
                    >
                      {topic.tagline}
                    </p>
                  </div>
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3"
                  style={{
                    background: `${topic.color}18`,
                    color: topic.color,
                  }}
                >
                  {topic.tag}
                </span>

                {/* Description */}
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: 'oklch(0.38 0.05 265)' }}
                >
                  {topic.description}
                </p>

                {/* Tips */}
                <ul className="space-y-2">
                  {topic.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: 'oklch(0.35 0.06 265)' }}
                    >
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ background: topic.color }}
                        aria-hidden="true"
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
