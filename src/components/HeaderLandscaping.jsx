import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Search, Trees, Sprout, Home, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import SearchModal from './SearchModal';

const HeaderLandscaping = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSectorDropdownOpen(false);
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Water Saving', path: '/landscaping/water-saving' },
    { name: 'Balcony Gardens', path: '/landscaping/balcony' },
    { name: 'Planters', path: '/landscaping/planters' },
    { name: 'Outdoor Living', path: '/landscaping/outdoor-living' },
    { name: 'Maintenance', path: '/landscaping/maintenance' },
    { name: 'Systems', path: '/landscaping/systems' },
    { name: 'New Services', path: '/landscaping/new-services' },
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setIsSectorDropdownOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo & Interactive Sector Switcher */}
            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
              <Link to="/" className="flex-shrink-0" aria-label="Kahf Greens Home">
                <motion.img
                  src={Logo}
                  alt="Kahf Greens Logo"
                  className="h-13 sm:h-14 md:h-16 w-auto"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Link>

              {/* Interactive Sector Switcher Dropdown */}
              <div
                className="relative hidden md:block"
                onMouseEnter={() => setIsSectorDropdownOpen(true)}
                onMouseLeave={() => setIsSectorDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsSectorDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 hover:bg-emerald-100/80 text-[#1a4d2e] border border-emerald-200/80 transition-all shadow-sm"
                  aria-haspopup="true"
                  aria-expanded={isSectorDropdownOpen}
                >
                  <Trees size={14} className="text-[#1a4d2e]" />
                  <span>Landscaping Division</span>
                  <ChevronDown
                    size={14}
                    className={`text-[#1a4d2e] transition-transform ${
                      isSectorDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isSectorDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden z-50 py-1 text-left"
                    >
                      <div className="px-3.5 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                        Switch Website Sector
                      </div>

                      <button
                        onClick={() => handleNavigate('/landscaping')}
                        className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold bg-emerald-50/70 text-[#1a4d2e] hover:bg-emerald-100/80 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Trees size={16} className="text-[#1a4d2e]" />
                          <span>Landscaping Division</span>
                        </div>
                        <span className="text-[10px] bg-emerald-200/60 text-[#1a4d2e] px-1.5 py-0.5 rounded font-medium">Active</span>
                      </button>

                      <button
                        onClick={() => handleNavigate('/agriculture')}
                        className="w-full px-4 py-2.5 flex items-center gap-2.5 text-xs text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                      >
                        <Sprout size={16} className="text-amber-700" />
                        <span>Agriculture Division</span>
                      </button>

                      <div className="border-t border-gray-100 my-1" />

                      <button
                        onClick={() => handleNavigate('/')}
                        className="w-full px-4 py-2 flex items-center gap-2.5 text-xs text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <Home size={15} className="text-gray-400" />
                        <span>Main Website Home</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <nav className="flex items-center gap-1 xl:gap-3" aria-label="Landscaping sub-navigation">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                      isActive(item.path)
                        ? 'text-[#1a4d2e] font-bold bg-emerald-50/70'
                        : 'text-gray-700 hover:text-[#1a4d2e] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* CTA & Search Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 text-[#1a4d2e] hover:bg-emerald-50 rounded-xl font-medium transition-all duration-200 border border-gray-200"
                  aria-label="Search (Ctrl+K)"
                  title="Press Ctrl+K to search"
                >
                  <Search size={16} />
                  <span className="text-xs hidden xl:inline">Search</span>
                  <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-500 rounded border border-gray-200">⌘K</kbd>
                </button>

                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#1a4d2e] hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Open search"
              >
                <Search size={22} />
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="text-[#1a4d2e]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-2xl"
            >
              <div className="container mx-auto px-4 py-5 space-y-4 max-h-[calc(100dvh-6rem)] overflow-y-auto">
                {/* Sector Switcher Header in Mobile */}
                <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trees size={16} className="text-[#1a4d2e]" />
                      <span className="text-xs font-bold text-[#1a4d2e]">Landscaping Division</span>
                    </div>
                    <Link
                      to="/agriculture"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                    >
                      <span>Switch to Agriculture</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>

                {/* Nav items */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.path)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-sm transition-colors text-left ${
                        isActive(item.path)
                          ? 'bg-emerald-100/70 text-[#1a4d2e] font-bold'
                          : 'hover:bg-gray-50 text-gray-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-gray-400">→</span>
                    </button>
                  ))}
                </div>

                {/* Mobile Direct Action Buttons */}
                <div className="pt-4 space-y-2.5 border-t border-gray-100">
                  <a
                    href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20landscaping%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-sm text-sm"
                  >
                    <span>WhatsApp Design Team</span>
                  </a>

                  <a
                    href="tel:+97142240733"
                    className="flex items-center justify-center gap-2.5 bg-[#1a4d2e]/10 text-[#1a4d2e] font-bold py-3.5 rounded-xl text-sm"
                  >
                    <Phone size={17} />
                    <span>Call Us: +971 4 224 0733</span>
                  </a>

                  <Button
                    onClick={() => {
                      navigate('/contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-bold py-3.5 rounded-xl text-sm shadow-md"
                  >
                    Request Landscaping Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>
  );
};

export default HeaderLandscaping;
