/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoachProfile from './components/CoachProfile';
import GalleryTestimonials from './components/GalleryTestimonials';
import Courses from './components/Courses';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <main className="bg-ocean-dark min-h-screen text-sand font-sans selection:bg-coral selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <CoachProfile />
      <GalleryTestimonials />
      <Courses />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
