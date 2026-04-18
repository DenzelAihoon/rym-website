import { Play } from 'lucide-react';

export default function MediaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Video Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Watch the excitement and energy of Rack Your Mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1 Placeholder */}
          <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block group-hover:bg-white/30 transition-colors">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <p className="text-white text-lg font-semibold">RYM Promotional Video 1</p>
              </div>
            </div>
          </div>

          {/* Video 2 Placeholder */}
          <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block group-hover:bg-white/30 transition-colors">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <p className="text-white text-lg font-semibold">RYM Promotional Video 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
