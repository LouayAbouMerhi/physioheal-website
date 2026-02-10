import { MessageCircle, Phone, Clock, MapPin, Mail, ArrowRight , Navigation , ExternalLink } from 'lucide-react';

const WA_NUMBER = '1234567890';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

function AppointmentForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = encodeURIComponent(
      `Hello! I'd like to book an appointment.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Preferred Time:* ${time}\n` +
      `*Additional Notes:* ${message || 'None'}`
    );

    window.open(`https://wa.me/${WA_NUMBER}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+96176008036"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Service Required *</label>
        <select
          name="service"
          required
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 bg-white"
        >
          <option value="">Select a service</option>
          <option value="Orthopedic Therapy">Orthopedic Therapy</option>
          <option value="Sports Rehabilitation">Sports Rehabilitation</option>
          <option value="Neurological Therapy">Neurological Therapy</option>
          <option value="Manual Therapy">Manual Therapy</option>
          <option value="Pediatric Therapy">Pediatric Therapy</option>
          <option value="Geriatric Therapy">Geriatric Therapy</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Preferred Date *</label>
          <input
            type="date"
            name="date"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Preferred Time *</label>
          <select
            name="time"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 bg-white"
          >
            <option value="">Select time</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Additional Notes</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Describe your condition or any specific requirements..."
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full group bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send via WhatsApp
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-center text-sm text-gray-400">
        By clicking &quot;Send via WhatsApp&quot;, you will be redirected to WhatsApp to confirm your appointment.
      </p>
    </form>
  );
}

export function Appointment() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Book Appointment</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Start Your <span className="gradient-text">Recovery</span> Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ready to take the first step towards a pain-free life? Book your appointment through WhatsApp for a quick and easy scheduling experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl shadow-green-200/40">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Book via WhatsApp</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                The fastest way to book your appointment. Send us a message on WhatsApp and we will respond within minutes.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-green-600 px-6 py-3.5 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-dark">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <p className="text-gray-500">+96176008036</p>
                  
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-gray-500">info@physioheal.com</p>
                  <p className="text-gray-500">appointments@physioheal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Working Hours</p>
                  <p className="text-gray-500">Mon - Fri: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-500">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Location</p>
                  <p className="text-gray-500">Zarout</p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-dark mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Request an Appointment
            </h3>
            <p className="text-gray-500 mb-8">Fill in the details below and we will redirect you to WhatsApp to confirm your booking.</p>

            <AppointmentForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d406.74641436048324!2d35.41620346789666!3d33.64810136018145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2slb!4v1770689124570!5m2!1sar!2slb"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=33.64810136018145,35.41620346789666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="https://maps.app.goo.gl/xZNBwzhaMxfbHoo39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </div>
      </div>
    </section>
  );
}
