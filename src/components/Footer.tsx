import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Send, Share2 } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6285121361515"; // From the user request example
    const text = `Halo Dive Diary Academy!%0A%0ANama: ${encodeURIComponent(formData.name)}%0A%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${text}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-ocean-dark text-sand pt-20 pb-10 relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-ocean-light rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-coral rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <h3 className="font-serif text-3xl text-white mb-2">Get in Touch</h3>
            <p className="text-sand/70 mb-8">Have questions? Send us a message via WhatsApp.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sand/80 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sand/80 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all resize-none"
                  placeholder="Tell us about your diving goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-coral hover:bg-coral/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-coral/20"
              >
                Send via WhatsApp <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="mb-10">
              <h3 className="font-serif text-3xl text-white mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ocean-light/20 p-3 rounded-full text-coral">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Main Training Center</h4>
                    <p className="text-sand/70">Aquatic Stadium GBK<br />Jl. Pintu Satu Senayan, Gelora, Jakarta Pusat</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-ocean-light/20 p-3 rounded-full text-coral">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Us</h4>
                    <a href="mailto:hello@deepblue.com" className="text-sand/70 hover:text-white transition-colors">hello@deepblue.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-ocean-light/20 p-3 rounded-full text-coral">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Call / WhatsApp</h4>
                    <a href="https://wa.me/6285121361515" className="text-sand/70 hover:text-white transition-colors">+62 851-2136-1515</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-ocean-light/20 p-3 rounded-full text-coral">
                    <Share2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Follow Us</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <a href="#" className="text-sand/70 hover:text-coral transition-colors"><Instagram size={20} /></a>
                      <a href="#" className="text-sand/70 hover:text-coral transition-colors"><Youtube size={20} /></a>
                      <a href="#" className="text-sand/70 hover:text-coral transition-colors"><Facebook size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="flex-grow w-full h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.339456608365!2d106.80181331476916!3d-6.218909995498153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f23415266395!2sStadion%20Akuatik%20Gelora%20Bung%20Karno!5e0!3m2!1sen!2sid!4v1679821234567!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-ocean-dark rounded-full" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">DiveDiaryAcademy</span>
          </div>

          <div className="text-sand/50 text-sm">
            © {new Date().getFullYear()} Dive Diary Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
