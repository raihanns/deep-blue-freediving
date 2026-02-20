import { motion } from 'motion/react';
import { Check, MapPin, Info, Users, User, Anchor, HeartPulse, BookOpen, Waves } from 'lucide-react';

const courses = [
  {
    title: "Trial Session",
    subtitle: "Introduction to Freediving",
    description: "Experience the sensation of freediving in a safe, controlled environment. Perfect for absolute beginners.",
    pricing: [
      { label: "Aquatic GBK (2m Depth)", price: "IDR 1.000.000" },
      { label: "Tribuana TDC (16m Depth)", price: "IDR 1.499.000" }
    ],
    features: [
      "Basic Breathwork",
      "Equalization Techniques",
      "Finning Technique",
      "Safety Briefing",
      "Pool Tickets Included"
    ],
    recommended: false,
    type: 'trial'
  },
  {
    title: "AIDA 2 (3 Days)",
    subtitle: "Beginner Class",
    description: "Perfect for those with some water confidence looking for a fast-track introduction to freediving.",
    pricing: [
      { label: "Group Course", price: "IDR 3.600.000" },
      { label: "Private Course", price: "IDR 4.800.000" }
    ],
    features: [
      "Theory Sessions",
      "Pool Sessions",
      "Open Water Sessions",
      "International Certification",
      "Equipment Rental Included"
    ],
    recommended: false,
    type: 'course'
  },
  {
    title: "AIDA 2 (4 Days)",
    subtitle: "Beginner Class",
    description: "Our recommended option. The extra day allows for more relaxed progression and skill refinement.",
    pricing: [
      { label: "Group Course", price: "IDR 3.900.000" },
      { label: "Private Course", price: "IDR 5.000.000" }
    ],
    features: [
      "Extended Theory",
      "Extra Pool Practice",
      "More Open Water Time",
      "Video Analysis",
      "International Certification",
      "Equipment Rental Included"
    ],
    recommended: true,
    type: 'course'
  }
];

const locations = [
  {
    name: "Apartemen Puri Mansion",
    duration: "2 Hours",
    price: "Free of Charge",
    note: "Ideal for static apnea practice."
  },
  {
    name: "Aquatic GBK Senayan",
    duration: "2 Hours",
    price: "IDR 110.000",
    note: "Payment via E-Money/Flazz at gate."
  },
  {
    name: "Tribuana Dive Center",
    duration: "4 Hours",
    price: "IDR 300.000",
    note: "Deep pool. Transfer H-3 required."
  }
];

const requirements = [
  {
    title: "Prerequisites",
    icon: User,
    items: [
      "Minimum age 18 years",
      "Basic swimming ability & comfort in water",
      "Good physical health"
    ]
  },
  {
    title: "AIDA 2 Certification Standards",
    icon: AwardBadge,
    items: [
      "Static Apnea (STA): min 2:00 min",
      "Dynamic Apnea (DYN): min 40 meters",
      "Free Immersion (FIM): min 16 meters",
      "Constant Weight (CWT): min 16 meters",
      "Rescue: 10 meters depth",
      "Theory Exam: min 75% score"
    ]
  }
];

// Custom icon component for the requirement section since Award is used elsewhere
function AwardBadge(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}

export default function Courses() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="courses">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-ocean-dark mb-4"
          >
            Start Your Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ocean-dark/80 max-w-2xl mx-auto text-lg"
          >
            Choose the pace that suits you. From trial sessions to full certification courses.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border flex flex-col ${course.recommended ? 'border-coral ring-4 ring-coral/10' : 'border-gray-100'}`}
            >
              {course.recommended && (
                <div className="absolute top-0 right-0 bg-coral text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-ocean-dark mb-1">{course.title}</h3>
                <p className="text-ocean-light font-medium text-sm">{course.subtitle}</p>
              </div>

              <p className="text-gray-500 mb-8 text-sm leading-relaxed min-h-[60px]">
                {course.description}
              </p>

              {/* Pricing Blocks */}
              <div className="space-y-3 mb-8 flex-grow">
                {course.pricing.map((price, idx) => (
                  <div key={idx} className={`flex flex-col p-3 rounded-xl border ${idx === 0 ? 'bg-gray-50 border-gray-100' : 'bg-ocean-dark/5 border-ocean-dark/10'}`}>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{price.label}</span>
                    <span className="font-bold text-ocean-dark text-lg">{price.price}</span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all mt-auto ${course.recommended ? 'bg-coral text-white hover:bg-coral/90 shadow-lg shadow-coral/20' : 'bg-ocean-dark text-white hover:bg-ocean-dark/90'}`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-ocean-dark text-white p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <req.icon size={100} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <req.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl">{req.title}</h3>
                </div>

                <ul className="space-y-4">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sand/90">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pool Fees Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-ocean-light/20 p-3 rounded-full text-ocean-dark flex-shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-ocean-dark mb-2">Pool Facility Fees</h3>
              <p className="text-gray-500">
                For certification courses, pool entry tickets are <strong>not included</strong> in the course price.
                <br />
                <span className="text-sm italic text-coral">*Trial sessions include pool entry.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-ocean-light/30 transition-colors shadow-sm">
                <div className="flex items-center gap-2 text-ocean-light mb-3">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">{loc.duration}</span>
                </div>
                <h4 className="font-bold text-ocean-dark mb-2">{loc.name}</h4>
                <p className="text-coral font-bold text-lg mb-2">{loc.price}</p>
                <p className="text-xs text-gray-500 leading-tight">{loc.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

