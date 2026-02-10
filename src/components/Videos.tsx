import { Play } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Effective Lower Back Pain Exercises',
    description: 'Learn proven exercises to relieve lower back pain and strengthen your core muscles at home.',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=350&fit=crop',
    duration: '12:30',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Shoulder Recovery Program',
    description: 'A complete guide to shoulder rehabilitation exercises for frozen shoulder and rotator cuff injuries.',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=350&fit=crop',
    duration: '15:45',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Knee Strengthening Routine',
    description: 'Step-by-step knee strengthening exercises to prevent injuries and improve joint stability.',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=350&fit=crop',
    duration: '10:20',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Posture Correction Tips',
    description: 'Daily exercises and tips to correct poor posture and prevent neck and back pain.',
    thumbnail: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=350&fit=crop',
    duration: '08:15',
  },
];

export function Videos() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Video Resources</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Helpful <span className="gradient-text">Exercise</span> Videos
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Watch our expert-guided exercise videos to support your recovery at home. These videos complement your in-clinic therapy sessions.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-500"
            >
              <div className="relative">
                {playingVideo === index ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[260px] md:h-[300px]"
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-[260px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/40 transition-colors flex items-center justify-center">
                      <button
                        onClick={() => setPlayingVideo(index)}
                        className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
                      >
                        <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-dark/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {video.duration}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary-600 transition-colors">{video.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl overflow-hidden shadow-2xl shadow-primary-300/30">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-14 text-white">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Featured Video</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Complete Guide to Physical Therapy Recovery
              </h3>
              <p className="text-primary-100 leading-relaxed mb-6">
                Watch our comprehensive guide on what to expect during your physical therapy journey. Learn about assessment, treatment planning, and the recovery process.
              </p>
              <button
                onClick={() => setPlayingVideo(0)}
                className="inline-flex items-center gap-3 bg-white text-primary-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Now
              </button>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop"
                alt="Featured video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700/60 to-transparent lg:from-primary-800/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
