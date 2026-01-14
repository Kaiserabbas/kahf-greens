import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    agriculture: false,
    landscaping: false
  });

  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

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
        { name: 'Water Saving', path: '/agriculture/water-saving' }
      ]
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
        { name: 'Planters', path: '/landscaping/planters' }
      ]
    },
    { name: 'Partners & Clients', path: '/partners' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const implementedRoutes = navItems
    .flatMap(item => [item.path, ...(item.subItems?.map(s => s.path) || [])]);

  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (implementedRoutes.includes(item.path)) {
      navigate(item.path);
    } else {
      toast({
        title: "🚧 Page coming soon!"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <motion.img
              src={Logo}
              alt="Kahf Greens Logo"
              className="h-12 md:h-16 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubItems = !!item.subItems;
              const dropdownKey = item.name.toLowerCase();

              if (hasSubItems) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      setDropdowns(prev => ({ ...prev, [dropdownKey]: true }))
                    }
                    onMouseLeave={() =>
                      setDropdowns(prev => ({ ...prev, [dropdownKey]: false }))
                    }
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item)}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#1a4d2e] font-bold border-b-2 border-[#1a4d2e]'
                          : 'text-[#2d5f3f] hover:text-[#1a4d2e]'
                      }`}
                    >
                      {item.name}
                    </motion.button>

                    {dropdowns[dropdownKey] && (
                      <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md py-2 min-w-52 z-50">
                        {item.subItems.map(subItem => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem)}
                            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                              location.pathname === subItem.path
                                ? 'text-[#1a4d2e] font-bold'
                                : 'text-[#2d5f3f]'
                            }`}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors ${
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
            className="lg:hidden mt-4 space-y-2"
          >
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-[#e8f5e9] text-[#1a4d2e] font-bold'
                    : 'text-[#2d5f3f] hover:bg-gray-100'
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
