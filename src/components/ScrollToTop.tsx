import { motion, useScroll, useAnimationControls } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 500) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setIsVisible(false);
        controls.start({ opacity: 0, y: 20 });
      }
    });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 bg-coral text-white p-3 rounded-full shadow-lg hover:bg-coral/90 transition-colors ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
