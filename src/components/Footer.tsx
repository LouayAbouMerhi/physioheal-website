import { ArrowUp } from 'lucide-react';

const WA_NUMBER = '+96176008036';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-0">
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 -translate-y-16 shadow-2xl shadow-primary-400/20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to Start Your Recovery?
            </h3>
            <p className="text-primary-100 text-lg">Book your first appointment today and take the first step.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12 -mt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M8 6h10v10" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M4 20l4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  Physio<span className="text-primary-400">Heal</span>
                </h4>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional physical therapy services dedicated to helping you recover, move better, and live pain-free. Your journey to wellness starts here.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-dark-light hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm capitalize text-gray-400 hover:text-white">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Videos', href: '#videos' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Orthopedic Therapy',
                'Sports Rehabilitation',
                'Neurological Therapy',
                'Manual Therapy',
                'Pediatric Therapy',
                'Geriatric Therapy',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Working Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8AM - 7PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span className="text-white font-medium">9AM - 5PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-dark-light rounded-xl">
              <p className="text-sm text-gray-400 mb-2">Emergency Contact</p>
              <p className="text-primary-400 font-bold">+96176008036</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PhysioHeal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary-300/40 transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
