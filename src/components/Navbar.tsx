import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Our Instructor', href: '#instructor' },
    { name: 'Moments', href: '#gallery' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleBookNow = () => {
    const phoneNumber = "6285121361515";
    const text = "Halo Dive Diary Academy! I would like to book a session.";
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between text-sand mix-blend-difference">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-ocean-dark rounded-full" />
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight">DiveDiaryAcademy</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium hover:text-coral transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button
          onClick={handleBookNow}
          className="bg-gold text-ocean-dark px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-sand"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-ocean-light p-6 rounded-2xl md:hidden flex flex-col gap-4 shadow-xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleBookNow}
            className="bg-gold text-ocean-dark px-6 py-3 rounded-xl font-bold w-full"
          >
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
