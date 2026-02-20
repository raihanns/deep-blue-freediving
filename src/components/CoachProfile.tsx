import { motion } from 'motion/react';
import { Award, Clock, Globe } from 'lucide-react';

export default function CoachProfile() {
  return (
    <section id="instructor" className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradients - Soft and airy to contrast the deep ocean sections */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-light/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image Column - Inspired by the central visual in the screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] group">
              <img
                src="./src/components/assets/instructor.webp"
                alt="Jenifer - DDA Founder & Freediving Instructor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 via-transparent to-transparent opacity-60" />

              {/* Name Overlay on Image (Mobile/Tablet style) */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-3xl font-bold">Jenifer</p>
                <p className="text-white/80 text-sm tracking-wider uppercase mt-1">DDA Founder & Freediving Instructor</p>
              </div>
            </div>

            {/* Decorative floating element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block border border-gray-100"
            >
              <p className="font-serif italic text-ocean-dark text-lg leading-snug">
                "The ocean is not a place to visit, it is home."
              </p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-coral font-semibold tracking-widest uppercase text-sm mb-2 block">Meet Your Guide</span>
              <h2 className="font-serif text-5xl md:text-6xl text-ocean-dark mb-8 leading-tight">
                Mastering the Art of <br />
                <span className="italic text-ocean-light">Breath & Mind</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                With over a decade of experience exploring the depths, Jenifer has dedicated her life to sharing the transformative power of freediving. As the DDA Founder and a certified Freediving Instructor, she combines technical precision with a holistic approach to relaxation and mental fortitude.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
                Her teaching philosophy centers on safety, comfort, and the belief that everyone holds a dormant aquatic potential waiting to be awakened.
              </p>

              {/* Stats/Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-ocean-light/5 transition-colors">
                  <Award className="text-coral mb-2" size={28} />
                  <span className="text-3xl font-serif font-bold text-ocean-dark">10+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-ocean-light/5 transition-colors">
                  <Clock className="text-gold mb-2" size={28} />
                  <span className="text-3xl font-serif font-bold text-ocean-dark">4min</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Static Apnea</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-ocean-light/5 transition-colors">
                  <Globe className="text-ocean-light mb-2" size={28} />
                  <span className="text-3xl font-serif font-bold text-ocean-dark">50+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Countries Dived</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
