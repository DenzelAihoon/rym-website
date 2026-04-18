import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function SponsorshipPack() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success('Download initiated!', {
        description: 'The sponsorship pack is being downloaded.',
      });
      // In a real application, this would trigger the actual download
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#0d5a5a] p-4 rounded-full mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sponsorship Pack
            </h1>
            <p className="text-xl text-gray-600">
              Download our comprehensive sponsorship information package
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
                <CardDescription>Complete sponsorship information</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Detailed breakdown of all sponsorship tiers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Complete list of benefits and exposure opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Event timeline and key dates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Previous year's impact statistics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Media coverage and reach information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#0d5a5a] rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Custom partnership opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Download Form</CardTitle>
                <CardDescription>Enter your details to access the sponsorship pack</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]"
                    disabled={loading}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {loading ? 'Preparing...' : 'Download Sponsorship Pack'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
