import { Link } from 'react-router';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Check } from 'lucide-react';

export default function SponsorshipSection() {
  const tiers = [
    {
      name: 'Gold Sponsor',
      amount: 'GHS 50,000+',
      slug: 'gold',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Prominent logo placement on all materials',
        'VIP seating at grand finale',
        'Speaking opportunity at event',
        'Extensive media coverage',
        'Social media recognition',
      ],
    },
    {
      name: 'Silver Sponsor',
      amount: 'GHS 25,000+',
      slug: 'silver',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo on event materials',
        'Premium seating at finale',
        'Social media mentions',
        'Newsletter features',
      ],
    },
    {
      name: 'Bronze Sponsor',
      amount: 'GHS 10,000+',
      slug: 'bronze',
      color: 'from-orange-400 to-orange-600',
      benefits: [
        'Logo on website',
        'Event attendance',
        'Social media recognition',
        'Certificate of appreciation',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with us to empower the next generation of Ghanaian scholars
          </p>
          <Link to="/become-partner">
            <Button size="lg" className="bg-[#0d5a5a] hover:bg-[#0a4848]">
              Become a Partner
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-shadow border-2 hover:border-[#0d5a5a]"
            >
              <CardHeader>
                <div className={`bg-gradient-to-r ${tier.color} text-white px-4 py-2 rounded-lg mb-4 inline-block`}>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {tier.name}
                  </Badge>
                </div>
                <CardTitle className="text-3xl">{tier.amount}</CardTitle>
                <CardDescription>Annual sponsorship</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/sponsor/${tier.slug}`}>
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sponsorship-pack">
            <Button variant="outline" size="lg">
              Download Full Sponsorship Pack
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
