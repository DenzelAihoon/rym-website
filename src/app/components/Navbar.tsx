import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import NavLink from './NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0d5a5a] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">RYM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/schools">Schools</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <Link to="/register">
              <Button className="bg-[#fbbf24] text-black hover:bg-[#f59e0b]">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#0a4848]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0a4848]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" mobile onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/schools" mobile onClick={() => setIsOpen(false)}>Schools</NavLink>
            <NavLink to="/gallery" mobile onClick={() => setIsOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to="/donate" mobile onClick={() => setIsOpen(false)}>Donate</NavLink>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#fbbf24] text-black hover:bg-[#f59e0b] mt-2">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
