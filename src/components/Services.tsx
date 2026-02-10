import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '+96176008036';

const services = [
  {
    title: 'Orthopedic Therapy',
    desc: 'Treatment for injuries and conditions affecting muscles, bones, ligaments, and joints. Ideal for post-surgical recovery and chronic pain.',
    icon: '🦴',
    features: ['Joint Mobilization', 'Post-Surgery Rehab', 'Fracture Recovery'],
  },
  {
    title: 'Sports Rehabilitation',
    desc: 'Specialized programs designed for athletes to recover from sports injuries and optimize performance through targeted exercises.',
    icon: '🏃',
    features: ['ACL Recovery', 'Performance Training', 'Injury Prevention'],
  },
  {
    title: 'Neurological Therapy',
    desc: 'Expert care for neurological conditions including stroke recovery, spinal cord injuries, and neurodegenerative diseases.',
    icon: '🧠',
    features: ['Stroke Recovery', 'Balance Training', 'Nerve Rehab'],
  },
  {
    title: 'Manual Therapy',
    desc: 'Hands-on techniques including massage, joint mobilization, and manipulation to reduce pain and improve mobility.',
    icon: '🤲',
    features: ['Deep Tissue Massage', 'Trigger Point', 'Myofascial Release'],
  },
  {
    title: 'Pediatric Therapy',
    desc: 'Gentle, specialized care for children with developmental delays, motor skill challenges, and pediatric conditions.',
    icon: '👶',
    features: ['Motor Development', 'Coordination', 'Postural Training'],
  },
  {
    title: 'Geriatric Therapy',
    desc: 'Specialized programs for older adults focusing on fall prevention, mobility improvement, and age-related conditions.',
    icon: '🧓',
    features: ['Fall Prevention', 'Arthritis Care', 'Mobility Training'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Comprehensive <span className="gradient-text">Therapy</span> Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a wide range of physical therapy services to address your specific needs and help you achieve optimal health and mobility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Book This Service
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
