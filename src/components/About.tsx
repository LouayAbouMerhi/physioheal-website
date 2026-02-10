import { Award, Heart, Shield, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Dedicated to Your <span className="gradient-text">Recovery</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With over 15 years of experience, we've helped thousands of patients regain their mobility, reduce pain, and improve their quality of life through personalized physical therapy programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=350&fit=crop"
                    alt="Physical therapy session"
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop"
                    alt="Rehabilitation equipment"
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop"
                    alt="Doctor consultation"
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=350&fit=crop"
                    alt="Patient recovery"
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-6 shadow-2xl shadow-primary-300/40 z-10">
              <p className="text-4xl font-bold text-center">15+</p>
              <p className="text-sm font-medium text-primary-100 text-center">Years of<br/>Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Why Choose PhysioHeal?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At PhysioHeal, we believe in a holistic approach to rehabilitation. Our team of certified physical therapists combines advanced medical knowledge with compassionate care to create individualized treatment plans that address the root cause of your pain, not just the symptoms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Certified Experts',
                  desc: 'Board-certified therapists with specialized training',
                  color: 'bg-primary-50 text-primary-600',
                },
                {
                  icon: Heart,
                  title: 'Patient-Centered',
                  desc: 'Compassionate care tailored to your unique needs',
                  color: 'bg-red-50 text-red-500',
                },
                {
                  icon: Shield,
                  title: 'Evidence-Based',
                  desc: 'Proven techniques backed by medical research',
                  color: 'bg-blue-50 text-blue-500',
                },
                {
                  icon: Target,
                  title: 'Goal-Oriented',
                  desc: 'Clear milestones to track your recovery progress',
                  color: 'bg-accent-50 text-accent-600',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group p-5 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
