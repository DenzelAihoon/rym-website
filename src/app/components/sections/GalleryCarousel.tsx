import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYSUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwaGFwcHl8ZW58MXx8fHwxNzc2MTk1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Students participating in RYM 2025',
    },
    {
      url: 'https://images.unsplash.com/photo-1774686030499-27af852cbc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwa2lkcyUyMHN0dWR5aW5nJTIwYm9va3N8ZW58MXx8fHwxNzc2MTk1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Focused learning and preparation',
    },
    {
      url: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYSUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzYxOTUwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Classroom excellence across Ghana',
    },
    {
      url: 'https://images.unsplash.com/photo-1655028150050-d27aa121926d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBxdWl6JTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzc2MTk1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Competition day excitement',
    },
    {
      url: 'https://images.unsplash.com/photo-1560785477-d43d2b34e0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbWF0aGVtYXRpY3N8ZW58MXx8fHwxNzc2MTk1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Mastering mathematics together',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Memorable moments from our competitions
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-96 md:h-[600px]">
              <ImageWithFallback
                src={images[currentIndex].url}
                alt={images[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  {images[currentIndex].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#0d5a5a] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
