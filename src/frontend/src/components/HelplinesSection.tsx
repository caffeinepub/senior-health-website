import { AlertTriangle, Heart, Users, Brain, ShieldCheck, Landmark, Wallet, SearchX } from 'lucide-react';
import HelplineCard, { type Helpline } from './HelplineCard';

const CATEGORIES: {
  id: string;
  label: string;
  icon: React.ReactNode;
  headingColor: string;
  bgColor: string;
  helplines: Omit<Helpline, 'category'>[];
}[] = [
  {
    id: 'emergency',
    label: 'Emergency Services',
    icon: <AlertTriangle className="w-5 h-5" />,
    headingColor: 'oklch(0.45 0.22 25)',
    bgColor: 'oklch(0.97 0.02 25)',
    helplines: [
      { name: 'Police', number: '100', description: 'National police emergency helpline.', availability: '24/7' },
      { name: 'Ambulance', number: '108', description: 'Free ambulance service across India.', availability: '24/7' },
      { name: 'Fire Brigade', number: '101', description: 'Fire emergency service.', availability: '24/7' },
      { name: 'National Emergency', number: '112', description: 'All-in-one emergency number — police, fire, ambulance.', availability: '24/7' },
      { name: 'Disaster Management', number: '1078', description: 'National disaster helpline.', availability: '24/7' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Medical',
    icon: <Heart className="w-5 h-5" />,
    headingColor: 'oklch(0.38 0.14 255)',
    bgColor: 'oklch(0.97 0.02 255)',
    helplines: [
      { name: 'AIIMS Helpline', number: '011-26588500', description: 'All India Institute of Medical Sciences helpline.', availability: 'Mon–Sat, 8am–8pm' },
      { name: 'Telemedicine (eSanjeevani)', number: '14477', description: 'Free online doctor consultation by the Government of India.', availability: '24/7' },
      { name: 'National Health Helpline', number: '104', description: 'Health advisory and information helpline.', availability: '24/7' },
      { name: 'COVID Helpline', number: '1075', description: 'National COVID-19 helpline.', availability: '24/7' },
      { name: 'Blood Bank', number: '104', description: 'Blood availability and donor information.', availability: '24/7' },
    ],
  },
  {
    id: 'elder-care',
    label: 'Elder Care',
    icon: <Users className="w-5 h-5" />,
    headingColor: 'oklch(0.36 0.14 155)',
    bgColor: 'oklch(0.96 0.03 155)',
    helplines: [
      { name: 'Elder Line — National Helpline for Senior Citizens', number: '14567', description: 'Free helpline for senior citizens — emotional support, pension issues, and abuse complaints.', availability: '24/7' },
      { name: 'HelpAge India', number: '1800-180-1253', description: 'Free helpline for elder care support and abuse prevention.', availability: '24/7' },
      { name: 'Senior Citizen Helpline Delhi', number: '011-23386868', description: 'Dedicated helpline for senior citizens in Delhi.', availability: 'Mon–Sat, 9am–5pm' },
      { name: 'Agewell Foundation', number: '1800-180-3690', description: 'Elder care and welfare helpline.', availability: 'Mon–Fri, 10am–5pm' },
    ],
  },
  {
    id: 'mental-health',
    label: 'Mental Health',
    icon: <Brain className="w-5 h-5" />,
    headingColor: 'oklch(0.38 0.14 295)',
    bgColor: 'oklch(0.97 0.02 295)',
    helplines: [
      { name: 'iCall', number: '9152987821', description: 'Mental health support by TISS.', availability: 'Mon–Sat, 8am–10pm' },
      { name: 'Vandrevala Foundation', number: '1860-2662-345', description: '24/7 mental health helpline.', availability: '24/7' },
      { name: 'NIMHANS', number: '080-46110007', description: 'National Institute of Mental Health and Neurosciences.', availability: 'Mon–Sat, 9am–5pm' },
      { name: 'Snehi', number: '044-24640050', description: 'Emotional support and suicide prevention helpline.', availability: '24/7' },
      { name: 'iMind', number: '9995200552', description: 'Mental health helpline for crisis support.', availability: '24/7' },
    ],
  },
  {
    id: 'women-safety',
    label: 'Women Safety',
    icon: <ShieldCheck className="w-5 h-5" />,
    headingColor: 'oklch(0.48 0.18 355)',
    bgColor: 'oklch(0.97 0.02 355)',
    helplines: [
      { name: 'Women Helpline', number: '1091', description: 'National women safety helpline.', availability: '24/7' },
      { name: 'Domestic Violence Helpline', number: '181', description: 'Helpline for women facing domestic violence.', availability: '24/7' },
      { name: 'NCW Helpline', number: '7827170170', description: 'National Commission for Women.', availability: 'Mon–Sat, 9am–5pm' },
    ],
  },
  {
    id: 'government',
    label: 'Government Services',
    icon: <Landmark className="w-5 h-5" />,
    headingColor: 'oklch(0.40 0.18 50)',
    bgColor: 'oklch(0.97 0.03 55)',
    helplines: [
      { name: 'Central Government Services', number: '1800-11-0031', description: 'Queries about central government schemes and services.', availability: 'Mon–Fri, 9am–5pm' },
      { name: 'Pension Seva', number: '1800-11-7788', description: 'Central Pension Accounting Office helpline.', availability: 'Mon–Fri, 9am–5pm' },
      { name: 'Income Tax', number: '1800-180-1961', description: 'Income tax queries and assistance.', availability: 'Mon–Fri, 9am–6pm' },
      { name: 'Consumer Helpline', number: '1915', description: 'National consumer dispute and complaint helpline.', availability: 'Mon–Sat, 9:30am–5:30pm' },
      { name: 'Railway Enquiry', number: '139', description: 'Indian Railways enquiry and complaint.', availability: '24/7' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial & Banking',
    icon: <Wallet className="w-5 h-5" />,
    headingColor: 'oklch(0.40 0.15 80)',
    bgColor: 'oklch(0.97 0.03 80)',
    helplines: [
      { name: 'RBI Helpline', number: '14448', description: 'Reserve Bank of India banking ombudsman.', availability: 'Mon–Fri, 9:30am–5:15pm' },
      { name: 'Banking Ombudsman', number: '1800-22-1740', description: 'Bank complaint and grievance helpline.', availability: 'Mon–Fri, 9:30am–5:15pm' },
      { name: 'EPFO Helpline', number: '1800-118-005', description: 'Employees Provident Fund Organisation.', availability: 'Mon–Sat, 9am–6pm' },
      { name: 'Cyber Crime', number: '1930', description: 'National cyber crime and online fraud helpline.', availability: '24/7' },
    ],
  },
];

export type { Helpline };
export { CATEGORIES };

interface HelplinesSectionProps {
  searchQuery: string;
}

export default function HelplinesSection({ searchQuery }: HelplinesSectionProps) {
  const q = searchQuery.toLowerCase().trim();

  // Filter all helplines across categories
  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    helplines: cat.helplines.filter(
      (h) =>
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.number.includes(q) ||
        h.description.toLowerCase().includes(q) ||
        cat.label.toLowerCase().includes(q) ||
        cat.id.toLowerCase().includes(q)
    ),
  })).filter((cat) => cat.helplines.length > 0);

  const totalResults = filteredCategories.reduce((sum, c) => sum + c.helplines.length, 0);

  return (
    <section id="directory" className="py-16 px-4 sm:px-6 lg:px-8">
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
            Helpline Directory
          </h2>
          <p className="text-base" style={{ color: 'oklch(0.45 0.03 255)' }}>
            {q
              ? `${totalResults} result${totalResults !== 1 ? 's' : ''} for "${searchQuery}"`
              : 'Browse by category — tap any number to call directly'}
          </p>
        </div>

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <SearchX
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: 'oklch(0.72 0.03 255)' }}
            />
            <p
              className="text-xl font-bold mb-2"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                color: 'oklch(0.28 0.08 265)',
              }}
            >
              No helplines found
            </p>
            <p className="text-base" style={{ color: 'oklch(0.52 0.03 250)' }}>
              Try searching by name, number, or category (e.g. "ambulance", "108", "elder")
            </p>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-14">
          {filteredCategories.map((category) => (
            <div key={category.id} id={category.id}>
              {/* Category heading */}
              <div
                className="flex items-center gap-3 mb-6 pb-3 border-b-2"
                style={{ borderColor: category.headingColor }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                  style={{
                    background: category.headingColor,
                    color: 'oklch(0.98 0.01 100)',
                  }}
                >
                  {category.icon}
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: category.headingColor,
                  }}
                >
                  {category.label}
                </h2>
                <span
                  className="ml-auto text-sm font-medium px-2 py-1 rounded"
                  style={{
                    background: category.bgColor,
                    color: category.headingColor,
                  }}
                >
                  {category.helplines.length} helpline{category.helplines.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.helplines.map((helpline) => (
                  <HelplineCard
                    key={`${helpline.name}-${helpline.number}`}
                    helpline={{ ...helpline, category: category.id }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
