import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+96176008036';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-semibold text-primary-700">#1 Rated Physical Therapy Clinic</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Restore Your
              <span className="block gradient-text">Movement</span>
              <span className="block">& Live Pain-Free</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Expert physical therapy services tailored to your unique needs. Our certified therapists use evidence-based techniques to help you recover faster, move better, and live without pain.
            </p>

            <div className="space-y-3">
              {['Personalized Treatment Plans', 'Certified & Experienced Therapists', 'Modern Equipment & Techniques'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-200 hover:shadow-2xl hover:shadow-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-dark px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">5,000+</p>
                  <p className="text-sm text-gray-500">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">15+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">4.9/5</p>
                  <p className="text-sm text-gray-500">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary-200/40">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=850&fit=crop"
                alt="Physical Therapist helping a patient"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">98% Recovery Rate</p>
                    <p className="text-sm text-gray-500">Our patients achieve full recovery goals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-200/50 rounded-2xl -z-0 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200/50 rounded-full -z-0 animate-float delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
