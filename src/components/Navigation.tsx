import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Artisan Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`transition-colors ${
                isActive('/shop') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Shop
            </Link>
            <a href="/#categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Link
              to="/shop"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <a href="/#categories" className="block text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="/#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Link
              to="/shop"
              className="block w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
