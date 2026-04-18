import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0d5a5a] to-[#0a4848] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-[#fbbf24]" />
              <span className="text-sm font-semibold">Registration Now Open</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Join RYM 2026?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Don't miss this opportunity to showcase your students' talents and compete for amazing prizes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-[#fbbf24] text-black hover:bg-[#f59e0b] text-lg px-10">
                Register Your School
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-10"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-gray-300">
            Questions? Check our <Link to="/download-form" className="underline hover:text-[#fbbf24]">guidebook</Link> or{' '}
            <Link to="/contact" className="underline hover:text-[#fbbf24]">reach out to our team</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
