import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Spécialisations', path: '/specializations' },
    { name: 'Conseils & Actus', path: '/articles' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-white/90 shadow-sm py-3' : 'bg-white/70 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 drop-shadow-sm" onClick={closeMenu}>
            <img src="/logo.png" alt="Cabinet Dr Laila El Ouali" className="h-12 w-auto object-contain" />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 leading-tight tracking-tight">Dr Laila El Ouali</h1>
              <p className="text-xs text-primary font-bold tracking-widest uppercase mt-0.5">Cardiologue</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-base font-medium transition-colors"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
