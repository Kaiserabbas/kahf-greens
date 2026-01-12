import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const HeaderAgriculture = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Overview', path: '/agriculture' },
    { name: 'Planter Pots', path: '/agriculture/planter-pots' },
    { name: 'Planter Bags', path: '/agriculture/planter-bags' },
    { name: 'Green Houses', path: '/agriculture/green-houses' },
    { name: 'Irrigation', path: '/agriculture/irrigation' },
    { name: 'Pumps & Hoses', path: '/agriculture/pumps-hoses' },
    { name: 'Machinery', path: '/agriculture/machinery' },
    { name: 'Water Saving', path: '/agriculture/water-saving' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    navigate(item.path);
  };

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 z-50 bg-gray-300 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.img
              src={Logo}
              alt="Kahf Greens Logo"
              className="h-12 md:h-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-[#1a4d2e] font-bold border-b-2 border-[#1a4d2e]'
                    : 'text-[#2d5f3f] hover:text-[#1a4d2e]'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden mt-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  isActive(item.path)
                    ? 'bg-[#e8f5e9] font-bold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default HeaderAgriculture;
