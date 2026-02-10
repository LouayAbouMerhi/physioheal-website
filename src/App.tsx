import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Videos } from './components/Videos';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Videos />
      <Testimonials />
      <Appointment />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
