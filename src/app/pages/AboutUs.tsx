import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0d5a5a] to-[#0a4848] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Rack Your Mind</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Empowering Ghana's future through literacy and numeracy excellence
            </p>
          </div>
        </section>

        {/* Organization */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">The Omnicare Foundation</h2>
                <p className="text-lg text-gray-600 mb-4">
                  The Omnicare Foundation is a Ghanaian non-profit organization dedicated to improving
                  educational outcomes for students across the nation.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Founded on the principle that every child deserves access to quality education,
                  we work tirelessly to create opportunities for academic excellence and personal growth.
                </p>
                <p className="text-lg text-gray-600">
                  Rack Your Mind (RYM) is our flagship initiative, bringing together schools from all
                  16 regions of Ghana in a celebration of literacy, numeracy, and academic achievement.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzYwOTc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students learning"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#0d5a5a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in education</p>
              </div>

              <div className="text-center">
                <div className="bg-[#0d5a5a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">Maintaining fairness and transparency</p>
              </div>

              <div className="text-center">
                <div className="bg-[#0d5a5a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600">Supporting every student's journey</p>
              </div>

              <div className="text-center">
                <div className="bg-[#0d5a5a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Achievement</h3>
                <p className="text-gray-600">Celebrating success at every level</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#0d5a5a] mb-2">500+</div>
                <p className="text-gray-600">Schools Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0d5a5a] mb-2">16</div>
                <p className="text-gray-600">Regions Covered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0d5a5a] mb-2">10,000+</div>
                <p className="text-gray-600">Students Impacted</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0d5a5a] mb-2">5</div>
                <p className="text-gray-600">Years Running</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
