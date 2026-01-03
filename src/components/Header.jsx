import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Agriculture', path: '/agriculture' },
    { name: 'Landscaping', path: '/landscaping' },
    { name: 'Partners & Clients', path: '/partners' }, 
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    
    // Check for implemented routes
    const implementedRoutes = ['/','/agriculture', '/landscaping', '/contact', '/about'];
    
    if (implementedRoutes.includes(item.path)) {
      navigate(item.path);
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
            >
              <img src={Logo} alt="Kahf Greens Logo" className="h-12 md:h-16" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-[#1a4d2e] font-bold border-b-2 border-[#1a4d2e]' 
                      : 'text-[#2d5f3f] hover:text-[#1a4d2e]'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#1a4d2e]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-[#e8f5e9] text-[#1a4d2e] font-bold'
                    : 'text-[#2d5f3f] hover:bg-[#f5f5f5]'
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

export default Header;