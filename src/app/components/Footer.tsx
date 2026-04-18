import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d5a5a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rack Your Mind</h3>
            <p className="text-gray-300 text-sm">
              A national literacy and numeracy quiz competition by Omnicare Foundation, Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#fbbf24] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-[#fbbf24] text-sm">
                  Register School
                </Link>
              </li>
              <li>
                <Link to="/schools" className="text-gray-300 hover:text-[#fbbf24] text-sm">
                  Registered Schools
                </Link>
              </li>
              <li>
                <Link to="/ways-to-help" className="text-gray-300 hover:text-[#fbbf24] text-sm">
                  Ways to Help
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="text-gray-300 hover:text-[#fbbf24] text-sm">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300">+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300">info@rackyourmind.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbbf24] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbbf24] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbbf24] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbbf24] transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Omnicare Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
