import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const HeaderAgriculture = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Planter Pots', path: '/agriculture/planter-pots' },
    { name: 'Planter Bags', path: '/agriculture/planter-bags' },
    { name: 'Green Houses', path: '/agriculture/green-houses' },
    { name: 'Irrigation', path: '/agriculture/irrigation' },
    { name: 'Pumps & Hoses', path: '/agriculture/pumps-hoses' },
    { name: 'Machinery', path: '/agriculture/machinery' },
    { name: 'Water Saving', path: '/agriculture/water-saving' },
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - links back to main home */}
          <a href="/" className="flex-shrink-0">
            <motion.img
              src={Logo}
              alt="Kahf Greens Logo"
              className="h-14 md:h-16 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </a>

          {/* Category Indicator (helps orientation) */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-gray-500">Agriculture</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-7">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  onClick={() => handleNavigate(item.path)}
                  className={`text-sm font-medium transition-colors px-1 py-2 ${
                    isActive(item.path)
                      ? 'text-[#1a4d2e] font-semibold border-b-2 border-[#1a4d2e]'
                      : 'text-gray-700 hover:text-[#1a4d2e]'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+971565096880"
                className="flex items-center gap-2 text-[#1a4d2e] hover:text-[#2d5f3f] font-medium transition-colors"
                aria-label="Call us"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">+971 56 509 6880</span>
              </a>

              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white px-6 py-2.5 rounded-full font-medium shadow-sm transition-all hover:shadow-md"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#1a4d2e]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.path)}
                  className={`block w-full text-left px-5 py-4 rounded-xl font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#e8f5e9] text-[#1a4d2e]'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-6 px-5 space-y-4">
                <a
                  href="tel:+971565096880"
                  className="flex items-center justify-center gap-3 bg-[#1a4d2e]/10 hover:bg-[#1a4d2e]/20 text-[#1a4d2e] font-medium py-4 rounded-xl transition-colors"
                >
                  <Phone size={20} />
                  Call Us: +971 56 509 6880
                </a>

                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white py-4 rounded-xl font-medium shadow-sm"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderAgriculture;