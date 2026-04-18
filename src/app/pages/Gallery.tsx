import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play } from 'lucide-react';

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?w=800', caption: 'Students at RYM 2025' },
    { url: 'https://images.unsplash.com/photo-1774686030499-27af852cbc73?w=800', caption: 'Focused learning' },
    { url: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=800', caption: 'Classroom excellence' },
    { url: 'https://images.unsplash.com/photo-1655028150050-d27aa121926d?w=800', caption: 'Competition day' },
    { url: 'https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800', caption: 'Mathematics mastery' },
    { url: 'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?w=800', caption: 'Engaged students' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Photo & Video Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Celebrating moments from Rack Your Mind competitions
            </p>
          </div>

          {/* Photo Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block group-hover:bg-white/30 transition-colors">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-white text-lg font-semibold">RYM 2025 Highlights</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block group-hover:bg-white/30 transition-colors">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-white text-lg font-semibold">Student Testimonials</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
