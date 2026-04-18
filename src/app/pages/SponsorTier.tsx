import { useParams, Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

export default function SponsorTier() {
  const { tier } = useParams();

  const tierData: Record<string, any> = {
    gold: {
      name: 'Gold Sponsor',
      amount: 'GHS 50,000+',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Prominent logo placement on all event materials',
        'VIP seating at grand finale event',
        'Speaking opportunity at main event',
        'Extensive media coverage and press mentions',
        'Featured in all social media campaigns',
        'Dedicated sponsor page on website',
        'Private meet-and-greet with winning teams',
        'Full-page advertisement in event program',
        'Recognition in email newsletters',
        'Exclusive sponsor merchandise package',
      ],
    },
    silver: {
      name: 'Silver Sponsor',
      amount: 'GHS 25,000+',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo placement on event materials',
        'Premium seating at grand finale',
        'Recognition in social media posts',
        'Half-page advertisement in event program',
        'Featured in email newsletters',
        'Sponsor page on website',
        'Acknowledgment during event',
        'Sponsor merchandise package',
      ],
    },
    bronze: {
      name: 'Bronze Sponsor',
      amount: 'GHS 10,000+',
      color: 'from-orange-400 to-orange-600',
      benefits: [
        'Logo on event website',
        'General seating at event',
        'Social media recognition',
        'Quarter-page ad in program',
        'Certificate of appreciation',
        'Thank you mention at event',
      ],
    },
  };

  const currentTier = tierData[tier || 'gold'];

  if (!currentTier) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tier Not Found</h1>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className={`bg-gradient-to-r ${currentTier.color} p-8 text-white`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentTier.name}</h1>
              <p className="text-3xl font-bold">{currentTier.amount}</p>
              <p className="text-lg opacity-90 mt-2">Annual sponsorship package</p>
            </div>

            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Package Benefits</h2>
              <ul className="space-y-4 mb-8">
                {currentTier.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Link to="/become-partner">
                  <Button size="lg" className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]">
                    Become a {currentTier.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/sponsorship-pack">
                  <Button size="lg" variant="outline" className="w-full">
                    Download Full Sponsorship Pack
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="font-bold mb-2">Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our partnerships team to discuss custom sponsorship opportunities
                </p>
                <Link to="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
