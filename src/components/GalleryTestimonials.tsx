import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    src: './src/components/assets/IMG_0554.jpg',
    alt: 'Freediver exploring coral reef',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2'
  },
  {
    type: 'testimonial',
    quote: "I never thought I could hold my breath for over 3 minutes. The coaching was phenomenal and I felt safe every second.",
    author: "Alex M.",
    role: "AIDA 2 Graduate",
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    type: 'image',
    src: './src/components/assets/IMG_9225.jpg',
    alt: 'Diver silhouette against sun rays',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    type: 'image',
    src: './src/components/assets/IMG_9224.jpg',
    alt: 'Peaceful underwater bubbles',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2'
  },
  {
    type: 'testimonial',
    quote: "A life-changing experience. The ocean is now my sanctuary. Sarah's patience is unmatched.",
    author: "Jamie L.",
    role: "AIDA 3 Student",
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    type: 'image',
    src: './src/components/assets/IMG_5103.jpg',
    alt: 'Freediving fins preparation',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    type: 'image',
    src: './src/components/assets/IMG_9365.jpg',
    alt: 'Sea turtle encounter',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1'
  }
];

export default function GalleryTestimonials() {
  return (
    <section id="gallery" className="py-24 bg-ocean-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ocean-light/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Moments from the Deep</h2>
          <p className="text-sand/80 max-w-2xl mx-auto text-lg font-light">
            Glimpses into our underwater world and the stories of those who dared to dive in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${item.colSpan} ${item.rowSpan}`}
            >
              {item.type === 'image' ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </>
              ) : (
                <div className="w-full h-full bg-ocean-light/10 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between hover:bg-ocean-light/20 transition-colors">
                  <Quote className="text-coral mb-4" size={32} />
                  <p className="text-white font-serif text-xl italic leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="text-white font-bold">{item.author}</p>
                    <p className="text-sand/60 text-sm uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
