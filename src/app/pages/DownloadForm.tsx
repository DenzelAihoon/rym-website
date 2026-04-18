import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function DownloadForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success('Download initiated!', {
        description: 'The RYM Guidebook is being downloaded.',
      });
      // In a real application, this would trigger the actual download
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#0d5a5a] p-4 rounded-full mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Download Guidebook
            </h1>
            <p className="text-xl text-gray-600">
              Get the complete RYM 2026 Competition Guidebook
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>What's in the Guidebook</CardTitle>
                <CardDescription>Everything you need to participate</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    'Complete competition rules and format',
                    'Sample questions and practice materials',
                    'Registration guidelines and deadlines',
                    'Detailed scoring and judging criteria',
                    'Important dates and event schedule',
                    'Eligibility requirements',
                    'Frequently asked questions',
                    'Contact information and support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Download Form</CardTitle>
                <CardDescription>Enter your details to access the guidebook</CardDescription>
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
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="school">School Name</Label>
                    <Input
                      id="school"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder="Optional"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]"
                    disabled={loading}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {loading ? 'Preparing Download...' : 'Download Guidebook (PDF)'}
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    By downloading, you agree to receive updates about RYM 2026
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-200 mb-6">
                  If you have questions about the competition or need assistance with registration,
                  our team is here to help.
                </p>
                <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
