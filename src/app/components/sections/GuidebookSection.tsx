import { Link } from 'react-router';
import { Button } from '../ui/button';
import { FileText, Download, CheckCircle } from 'lucide-react';

export default function GuidebookSection() {
  const features = [
    'Complete competition rules and regulations',
    'Sample questions and practice materials',
    'Registration guidelines and deadlines',
    'Scoring system and judging criteria',
    'Important dates and schedule',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-[#fbbf24]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Competition Guidebook
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Everything you need to know about participating in Rack Your Mind 2026.
              Download our comprehensive guidebook for detailed information.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#fbbf24] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/download-form">
              <Button size="lg" className="bg-[#fbbf24] text-black hover:bg-[#f59e0b]">
                <Download className="mr-2 h-5 w-5" />
                Download Guidebook (PDF)
              </Button>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl p-12 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <FileText className="h-32 w-32 text-[#0d5a5a] mx-auto mb-4" />
                  <p className="text-[#0d5a5a] font-bold text-xl">RYM Guidebook 2026</p>
                  <p className="text-gray-600 mt-2">Comprehensive Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
