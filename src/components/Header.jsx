import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // string | null
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Agriculture',
      path: '/agriculture',
      subItems: [
        { name: 'Planter Pots', path: '/agriculture/planter-pots' },
        { name: 'Planter Bags', path: '/agriculture/planter-bags' },
        { name: 'Green Houses', path: '/agriculture/green-houses' },
        { name: 'Irrigation', path: '/agriculture/irrigation' },
        { name: 'Pumps & Hoses', path: '/agriculture/pumps-hoses' },
        { name: 'Machinery', path: '/agriculture/machinery' },
        { name: 'Water Saving', path: '/agriculture/water-saving' },
      ],
    },
    {
      name: 'Landscaping',
      path: '/landscaping',
      subItems: [
        { name: 'Maintenance', path: '/landscaping/maintenance' },
        { name: 'New Services', path: '/landscaping/new-services' },
        { name: 'Systems', path: '/landscaping/systems' },
        { name: 'Water Saving', path: '/landscaping/water-saving' },
        { name: 'Outdoor Living', path: '/landscaping/outdoor-living' },
        { name: 'Planters', path: '/landscaping/planters' },
      ],
    },
    { name: 'Partners & Clients', path: '/partners' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isImplemented = (path) => {
    return navItems.some(
      (item) =>
        item.path === path ||
        item.subItems?.some((sub) => sub.path === path)
    );
  };

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (isImplemented(path)) {
      navigate(path);
    } else {
      toast({
        title: "Page under development",
        description: "This section will be available soon. Thank you for your interest!",
      });
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={Logo}
              alt="Kahf Greens Logo"
              className="h-14 md:h-16 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isOpen = openDropdown === item.name;
                const hasSubs = !!item.subItems;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasSubs && setOpenDropdown(item.name)}
                    onMouseLeave={() => hasSubs && setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className={`flex items-center gap-1.5 px-1 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#1a4d2e] font-semibold'
                          : 'text-gray-700 hover:text-[#1a4d2e]'
                      }`}
                    >
                      {item.name}
                      {hasSubs && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {hasSubs && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {item.subItems.map((sub) => (
                              <button
                                key={sub.name}
                                onClick={() => handleNavigate(sub.path)}
                                className={`block w-full px-5 py-3 text-left text-sm transition-colors hover:bg-[#f0f7f0] ${
                                  location.pathname === sub.path
                                    ? 'text-[#1a4d2e] font-medium bg-[#f5fbf5]'
                                    : 'text-gray-700'
                                }`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+971565096880"
                className="flex items-center gap-2 text-[#1a4d2e] hover:text-[#2d5f3f] font-medium transition-colors"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">+971 56 509 6880</span>
              </a>

              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white px-6 py-2.5 rounded-full font-medium shadow-sm transition-all hover:shadow-md"
              >
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
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
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.subItems ? toggleDropdown(item.name) : handleNavigate(item.path)
                    }
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-lg text-left font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#e8f5e9] text-[#1a4d2e]'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.subItems && openDropdown === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 mt-1 space-y-1 overflow-hidden"
                      >
                        {item.subItems.map((sub) => (
                          <li key={sub.name}>
                            <button
                              onClick={() => handleNavigate(sub.path)}
                              className={`block w-full px-4 py-2.5 text-sm rounded-md transition-colors ${
                                location.pathname === sub.path
                                  ? 'bg-[#f0f7f0] text-[#1a4d2e] font-medium'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-6 px-4 space-y-4">
                <a
                  href="tel:+971565096880"
                  className="flex items-center justify-center gap-3 bg-[#1a4d2e]/10 hover:bg-[#1a4d2e]/20 text-[#1a4d2e] font-medium py-3.5 rounded-xl transition-colors"
                >
                  <Phone size={20} />
                  Call Us: +971 56 509 6880
                </a>

                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white py-3.5 rounded-xl font-medium shadow-sm"
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

export default Header;