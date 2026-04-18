import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Heart, Users, Share2, Gift, BookOpen, Handshake } from 'lucide-react';

export default function WaysToHelp() {
  const ways = [
    {
      icon: Heart,
      title: 'Make a Donation',
      description: 'Financial contributions help us expand the program and reach more students.',
      action: 'Donate Now',
      link: '/donate',
      color: 'bg-red-500',
    },
    {
      icon: Handshake,
      title: 'Become a Sponsor',
      description: 'Partner with us through our structured sponsorship packages.',
      action: 'View Packages',
      link: '/become-partner',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Help organize events, mentor students, or assist with operations.',
      action: 'Contact Us',
      link: '/contact',
      color: 'bg-green-500',
    },
    {
      icon: Gift,
      title: 'Donate Items',
      description: 'Contribute books, educational materials, or prizes for participants.',
      action: 'Learn More',
      link: '/contact',
      color: 'bg-purple-500',
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Offer workshops, training sessions, or educational resources.',
      action: 'Get Involved',
      link: '/contact',
      color: 'bg-yellow-500',
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Share RYM on social media and help us reach more schools.',
      action: 'Share Now',
      link: '#share',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0d5a5a] to-[#0a4848] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ways to Help</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Every contribution, big or small, makes a difference in a student's life
            </p>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ways.map((way, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`${way.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                      <way.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle>{way.title}</CardTitle>
                    <CardDescription>{way.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {way.link === '#share' ? (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Rack Your Mind',
                              text: 'Check out Rack Your Mind - Ghana\'s premier literacy and numeracy competition!',
                              url: window.location.origin,
                            });
                          }
                        }}
                      >
                        {way.action}
                      </Button>
                    ) : (
                      <Link to={way.link}>
                        <Button variant="outline" className="w-full">
                          {way.action}
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how your support directly benefits students and schools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] p-8 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">GHS 100</div>
                <p className="text-gray-200">Provides study materials for 5 students</p>
              </div>
              <div className="bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] p-8 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">GHS 500</div>
                <p className="text-gray-200">Sponsors a school's participation</p>
              </div>
              <div className="bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] p-8 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">GHS 2,000</div>
                <p className="text-gray-200">Funds a regional qualifier event</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
