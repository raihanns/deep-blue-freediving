import { motion } from 'motion/react';
import { ArrowUpRight, Anchor, Waves, Fish } from 'lucide-react';
import heroVideo from './assets/hero2.mp4';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-ocean-dark overflow-hidden flex items-center justify-center text-sand">

      {/* 3D Video Background Container */}
      <div className="absolute inset-0 z-0 perspective-2000 flex items-center justify-center p-8 lg:p-12">
        <motion.div
          initial={{ rotateY: 0, rotateX: 0, scale: 0.9, opacity: 0 }}
          animate={{
            rotateY: [-1, 1, -1],
            rotateX: [0.5, -0.5, 0.5],
            scale: 1,
            opacity: 1
          }}
          transition={{
            rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 1.5 }
          }}
          className="relative w-full h-full max-w-[95vw] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/5"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Layered Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/60 via-transparent to-ocean-dark/80" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
        </motion.div>
      </div>

      {/* Background Glows shifted to match new palette */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-[1]">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-ocean-light rounded-full blur-[180px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-ocean-mid rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 h-full relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

        {/* Left Side: Headline */}
        <div className="lg:col-span-5 flex flex-col items-start text-left pt-20 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-white mb-6"
          >
            Find Your <br />
            <span className="text-gold italic">Calm</span> <br />
            Beneath the <br />
            Surface.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-default"
          >
            <div className="h-px w-12 bg-white" />
            <span className="text-xs uppercase tracking-[0.4em] font-medium font-sans">Dive Diary Academy</span>
          </motion.div>
        </div>

        {/* Center: Empty Space for Video Subject */}
        <div className="hidden lg:col-span-2 lg:block h-full" />

        {/* Right Side: Quote, Description, Actions */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right pt-0 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 lg:mb-16"
          >
            <Waves className="mx-auto lg:ml-auto mb-6 text-ocean-light" size={42} />
            <p className="font-serif italic text-xl lg:text-2xl text-white/70 max-w-md leading-relaxed">
              "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg lg:text-xl text-white/80 max-w-sm ml-auto mb-12 font-light leading-relaxed"
          >
            Join Dive Diary Academy, the leading AIDA International certified freediving school.
            Master your breath, explore the deep, and discover a new world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-end gap-6"
          >
            <a
              href="#courses"
              className="group bg-coral text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-coral/90 transition-all flex items-center gap-3 shadow-2xl shadow-coral/30"
            >
              Start Journey
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-full border border-white/20 flex items-center gap-2 hover:bg-white/10 transition-all group font-semibold text-lg backdrop-blur-sm"
            >
              <Fish className="text-gold" size={20} />
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Decorative Dive Indicator - Simplified and positioned bottom center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/60">Dive</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
