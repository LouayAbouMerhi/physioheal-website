import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop',
    title: 'Physical Therapy Session',
    category: 'Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    title: 'Rehabilitation Exercise',
    category: 'Exercise',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=500&fit=crop',
    title: 'Modern Equipment',
    category: 'Facility',
  },
  {
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
    title: 'Doctor Consultation',
    category: 'Consultation',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop',
    title: 'Patient Assessment',
    category: 'Assessment',
  },
  {
    src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop',
    title: 'Stretching Therapy',
    category: 'Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=500&fit=crop',
    title: 'Spine Treatment',
    category: 'Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    title: 'Medical Lab',
    category: 'Facility',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Treatment', 'Exercise', 'Facility', 'Consultation', 'Assessment'];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Our <span className="gradient-text">Clinic</span> & Sessions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Take a look inside our modern facility and see our experienced therapists in action.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${
                index % 3 === 0 ? 'row-span-1 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index % 3 === 0 ? 'h-full min-h-[300px]' : 'h-[220px] md:h-[260px]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                  <p className="text-primary-300 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={filteredImages[selectedImage]?.src.replace('w=600', 'w=1200').replace('h=500', 'h=900').replace('h=400', 'h=700')}
            alt={filteredImages[selectedImage]?.title}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-semibold text-xl">{filteredImages[selectedImage]?.title}</p>
            <p className="text-primary-400 text-sm mt-1">{filteredImages[selectedImage]?.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
