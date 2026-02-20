import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Safety Priority",
    description: "Each session follows international freediving safety standards to ensure a safe and controlled diving experience."
  },
  {
    icon: Award,
    title: "Professional Training",
    description: "Certified instructors who attentively guide each student in practicing safe, calm, and mindful freediving."
  },
  {
    icon: Heart,
    title: "Ocean Awareness",
    description: "We don't just teach techniques, but also instill awareness and responsibility towards the preservation of the underwater ecosystem."
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
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Why Choose Dive Diary Academy?</h2>
          <div className="text-sand/80 max-w-3xl mx-auto text-lg font-light space-y-6">
            <p>
              At Dive Diary Academy, we believe that freediving is not just a sport, but a journey to know yourself. Through every breath and every dive, we invite divers to build self-awareness, calmness, and self-confidence in the water.
            </p>
            <p>
              Our mission is to guide every individual to explore the underwater world safely, responsibly, and with full respect for the ocean. With a safety-first approach, experienced instructors, and personal teaching methods, we provide freediving training from beginner to advanced levels according to each diver's ability and goals.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
