import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    onNavigate(to);
    setIsOpen(false);
  };

  return (
    <nav className="bg-brand-cream shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="/" 
            className="text-ink-900 hover:text-ink-700 transition-colors"
            aria-label="TestLoop Labs Home"
            onClick={(e) => handleClick(e, '/')}
          >
            <Logo className="w-auto h-10" />
          </a>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
            <a href="/" className="text-ink-800 hover:text-ink-900 font-medium tracking-wide" onClick={(e) => handleClick(e, '/')}>Home</a>
            <a href="/services" className="text-ink-800 hover:text-ink-900 font-medium tracking-wide" onClick={(e) => handleClick(e, '/services')}>Services</a>
            <a href="/products" className="text-ink-800 hover:text-ink-900 font-medium tracking-wide" onClick={(e) => handleClick(e, '/products')}>Products</a>
            <a href="/about" className="text-ink-800 hover:text-ink-900 font-medium tracking-wide" onClick={(e) => handleClick(e, '/about')}>About</a>
            <a href="/contact" className="text-ink-800 hover:text-ink-900 font-medium tracking-wide" onClick={(e) => handleClick(e, '/contact')}>Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-indigo-600" onClick={(e) => handleClick(e, '/')}>Home</a>
              <a href="/services" className="text-gray-700 hover:text-indigo-600" onClick={(e) => handleClick(e, '/services')}>Services</a>
              <a href="/products" className="text-gray-700 hover:text-indigo-600" onClick={(e) => handleClick(e, '/products')}>Products</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600" onClick={(e) => handleClick(e, '/about')}>About</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600" onClick={(e) => handleClick(e, '/contact')}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}