import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "AIDA International Certified",
    description: "We adhere to the highest global standards of freediving education. Our certifications are recognized worldwide, opening oceans for you to explore anywhere."
  },
  {
    icon: ShieldCheck,
    title: "Safety First Philosophy",
    description: "Your safety is our absolute priority. We maintain strict small student-to-instructor ratios (max 3:1) to ensure personalized attention and maximum security."
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from the best. Our team consists of national record holders and passionate educators who understand the physiology and psychology of the deep."
  },
  {
    icon: Heart,
    title: "Vibrant Community",
    description: "More than just a school, we are a family of ocean lovers. Join our regular fun dives, training sessions, and social events to connect with like-minded divers."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-ocean-dark relative overflow-hidden">
      {/* Background Gradient/Glow - subtle variation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Why Dive With Deep Blue?</h2>
          <p className="text-sand/80 max-w-2xl mx-auto text-lg font-light">
            We don't just teach you how to hold your breath; we teach you how to discover a new version of yourself through the silence of the ocean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-ocean-light/20 rounded-2xl flex items-center justify-center mb-6 text-coral group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-sand/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
