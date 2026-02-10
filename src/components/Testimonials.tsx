import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Knee Surgery Recovery',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    text: 'After my knee surgery, I was terrified I would never walk normally again. The team at PhysioHeal created a recovery plan that had me back on my feet in just 8 weeks. Their patience and expertise made all the difference.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Sports Injury Recovery',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'As a competitive runner, my ACL tear felt like the end of my career. PhysioHeal not only helped me recover but actually improved my performance. I am now running faster than before my injury!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chronic Back Pain',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'I suffered from chronic lower back pain for over 5 years. Other clinics just gave me temporary relief, but PhysioHeal identified the root cause and taught me exercises that have kept me pain-free for over a year now.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Stroke Rehabilitation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'The neurological therapy at PhysioHeal was exceptional. After my stroke, I could barely move my right side. Their dedicated therapists helped me regain 90% of my mobility. I cannot thank them enough.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Post-Pregnancy Recovery',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    text: 'The pelvic floor therapy and postpartum recovery program was exactly what I needed. The therapists were incredibly understanding and professional. I felt comfortable from day one.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Shoulder Injury',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'My frozen shoulder was making everyday tasks impossible. The manual therapy combined with home exercises they prescribed brought incredible results. Professional, caring, and highly effective treatment.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            What Our <span className="gradient-text">Patients</span> Say
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Real stories from real patients who have experienced the difference our personalized physical therapy can make.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 border border-primary-100 mb-12 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-24 h-24 text-primary-100" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg shadow-primary-200/40 border-4 border-white"
              />
            </div>
            <div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <p className="font-bold text-dark text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-primary-600 text-sm font-medium">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? 'ring-3 ring-primary-500 ring-offset-2 shadow-lg scale-105'
                  : 'opacity-60 hover:opacity-100 hover:shadow-md'
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-20 md:h-24 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <p className="absolute bottom-1.5 left-0 right-0 text-center text-white text-[10px] md:text-xs font-medium px-1 truncate">
                {t.name.split(' ')[0]}
              </p>
            </button>
          ))}
        </div>

        {/* Review Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '5,000+', label: 'Patients Treated' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '500+', label: 'Five Star Reviews' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
