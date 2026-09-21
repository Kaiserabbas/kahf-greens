import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Search,
  Trees,
  Sprout,
  Home,
  ArrowRight,
  Sparkles,
  Droplets,
  Layers,
  Wrench,
  Sun,
  Maximize2
} from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import SearchModal from './SearchModal';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
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

  const agricultureItems = [
    { name: t('sectors.agriculture.greenhouses.name'), path: '/agriculture/greenhouses', desc: t('sectors.agriculture.greenhouses.desc') },
    { name: t('sectors.agriculture.irrigation.name'), path: '/agriculture/irrigation', desc: t('sectors.agriculture.irrigation.desc') },
    { name: t('sectors.agriculture.planterPots.name'), path: '/agriculture/planter-pots', desc: t('sectors.agriculture.planterPots.desc') },
    { name: t('sectors.agriculture.planterBags.name'), path: '/agriculture/planter-bags', desc: t('sectors.agriculture.planterBags.desc') },
    { name: t('sectors.agriculture.pumpsHoses.name'), path: '/agriculture/pumps-and-hoses', desc: t('sectors.agriculture.pumpsHoses.desc') },
    { name: t('sectors.agriculture.machinery.name'), path: '/agriculture/machinery', desc: t('sectors.agriculture.machinery.desc') },
    { name: t('sectors.agriculture.waterSaving.name'), path: '/agriculture/water-saving', desc: t('sectors.agriculture.waterSaving.desc') },
  ];

  const landscapingItems = [
    { name: t('sectors.landscaping.waterSaving.name'), path: '/landscaping/water-saving', desc: t('sectors.landscaping.waterSaving.desc') },
    { name: t('sectors.landscaping.balcony.name'), path: '/landscaping/balcony', desc: t('sectors.landscaping.balcony.desc') },
    { name: t('sectors.landscaping.planters.name'), path: '/landscaping/planters', desc: t('sectors.landscaping.planters.desc') },
    { name: t('sectors.landscaping.outdoorLiving.name'), path: '/landscaping/outdoor-living', desc: t('sectors.landscaping.outdoorLiving.desc') },
    { name: t('sectors.landscaping.maintenance.name'), path: '/landscaping/maintenance', desc: t('sectors.landscaping.maintenance.desc') },
    { name: t('sectors.landscaping.systems.name'), path: '/landscaping/systems', desc: t('sectors.landscaping.systems.desc') },
    { name: t('sectors.landscaping.newServices.name'), path: '/landscaping/new-services', desc: t('sectors.landscaping.newServices.desc') },
  ];

  const navItems = [
    { name: t('nav.about'), path: '/about' },
    {
      name: t('nav.agriculture'),
      path: '/agriculture',
      subItems: agricultureItems,
    },
    {
      name: t('nav.landscaping'),
      path: '/landscaping',
      subItems: landscapingItems,
    },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
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

              {/* Interactive Sector Switcher */}
              <div
                className="relative hidden xl:block"
                onMouseEnter={() => setIsSectorDropdownOpen(true)}
                onMouseLeave={() => setIsSectorDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsSectorDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 hover:bg-emerald-100/80 text-[#1a4d2e] border border-emerald-200/80 transition-all shadow-sm"
                  aria-haspopup="true"
                  aria-expanded={isSectorDropdownOpen}
                >
                  <Sparkles size={13} className="text-emerald-700" />
                  <span>{isRTL ? "القطاعات" : "Sectors"}</span>
                  <ChevronDown
                    size={13}
                    className={`text-emerald-700 transition-transform ${
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
                      className={`absolute top-full ${isRTL ? "right-0 text-right" : "left-0 text-left"} mt-2 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden z-50 py-1.5`}
                    >
                      <div className="px-3.5 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                        {isRTL ? "اختر القطاع المتخصص" : "Select Specialized Division"}
                      </div>

                      <Link
                        to="/landscaping"
                        onClick={() => setIsSectorDropdownOpen(false)}
                        className="w-full px-4 py-3 flex items-center gap-3 text-xs font-semibold text-gray-800 hover:bg-emerald-50 hover:text-[#1a4d2e] transition-colors"
                      >
                        <div className="p-1.5 rounded-lg bg-emerald-100 text-[#1a4d2e]">
                          <Trees size={16} />
                        </div>
                        <div>
                          <div className="font-bold">{isRTL ? "قطاع تنسيق الحدائق" : "Landscaping Division"}</div>
                          <div className="text-[10px] text-gray-500 font-normal">{isRTL ? "الفلل، الشرفات والتصميم الحضري" : "Villas, balconies & urban design"}</div>
                        </div>
                      </Link>

                      <Link
                        to="/agriculture"
                        onClick={() => setIsSectorDropdownOpen(false)}
                        className="w-full px-4 py-3 flex items-center gap-3 text-xs font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                      >
                        <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                          <Sprout size={16} />
                        </div>
                        <div>
                          <div className="font-bold">{isRTL ? "قطاع التقنيات الزراعية" : "Agriculture Division"}</div>
                          <div className="text-[10px] text-gray-500 font-normal">{isRTL ? "المزارع، البيوت المحمية وشبكات الري" : "Farms, greenhouses & irrigation"}</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <nav className="flex items-center gap-1 xl:gap-3" aria-label="Main navigation">
                {navItems.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);
                  const isOpen = openDropdown === item.name;
                  const hasSubs = !!item.subItems;

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => hasSubs && setOpenDropdown(item.name)}
                      onMouseLeave={() => hasSubs && setOpenDropdown(null)}
                    >
                      {hasSubs ? (
                        <button
                          onClick={() => {
                            navigate(item.path);
                            setOpenDropdown(null);
                          }}
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            isActive
                              ? 'text-[#1a4d2e] font-bold bg-emerald-50/70'
                              : 'text-gray-700 hover:text-[#1a4d2e] hover:bg-gray-50'
                          }`}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1a4d2e]' : 'text-gray-400'}`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            isActive
                              ? 'text-[#1a4d2e] font-bold bg-emerald-50/70'
                              : 'text-gray-700 hover:text-[#1a4d2e] hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Mega Dropdown */}
                      <AnimatePresence>
                        {hasSubs && isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18 }}
                            className={`absolute top-full ${isRTL ? "right-0 text-right" : "left-0 text-left"} mt-2 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden z-50 p-2`}
                            role="menu"
                          >
                            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 flex items-center justify-between">
                              <span>{isRTL ? `حلول ${item.name}` : `${item.name} Solutions`}</span>
                              <Link
                                to={item.path}
                                onClick={() => setOpenDropdown(null)}
                                className="text-[#1a4d2e] hover:underline font-semibold lowercase text-[11px]"
                              >
                                {isRTL ? "← عرض النظرة العامة" : "view overview →"}
                              </Link>
                            </div>

                            <div className="py-1 space-y-0.5">
                              {item.subItems.map((sub) => {
                                const isSubActive = location.pathname === sub.path;
                                return (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    role="menuitem"
                                    onClick={() => setOpenDropdown(null)}
                                    className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                                      isSubActive
                                        ? 'bg-emerald-50 text-[#1a4d2e]'
                                        : 'hover:bg-gray-50 text-gray-800'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold">{sub.name}</span>
                                      <ArrowRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1a4d2e]" />
                                    </div>
                                    <span className="text-[11px] text-gray-500 font-normal line-clamp-1">{sub.desc}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                {/* Language Switcher */}
                <LanguageToggle />

                {/* Search Trigger */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 text-[#1a4d2e] hover:bg-emerald-50 rounded-xl font-medium transition-all duration-200 border border-gray-200"
                  aria-label="Search (Ctrl+K)"
                  title="Search services (Ctrl+K)"
                >
                  <Search size={16} />
                  <span className="text-xs hidden xl:inline">{t('nav.quickSearch')}</span>
                  <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-500 rounded border border-gray-200">⌘K</kbd>
                </button>

                {/* Primary CTA Button */}
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  {t('common.getFreeQuote')}
                </Button>
              </div>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle />

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-gray-700 hover:text-[#1a4d2e] hover:bg-gray-50 rounded-xl"
                aria-label="Search site"
              >
                <Search size={22} />
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="text-[#1a4d2e] p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
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
                {/* Mobile Language Switcher */}
                <LanguageToggle variant="mobile" />

                {/* Mobile Search Button */}
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full bg-gray-50 hover:bg-gray-100 text-gray-500 text-sm px-4 py-3 rounded-xl border border-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Search size={18} className="text-gray-400" />
                    <span>{isRTL ? "ابحث في الخدمات، المنتجات والتقنيات..." : "Search services, products, tech..."}</span>
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-400 font-mono">⌘K</span>
                </button>

                {/* Sector Switch Tabs */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
                  <Link
                    to="/landscaping"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg text-[#1a4d2e] bg-white shadow-sm"
                  >
                    <Trees size={14} />
                    <span>{isRTL ? "تنسيق الحدائق" : "Landscaping"}</span>
                  </Link>
                  <Link
                    to="/agriculture"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg text-amber-900 hover:bg-white/60"
                  >
                    <Sprout size={14} />
                    <span>{isRTL ? "الحلول الزراعية" : "Agriculture"}</span>
                  </Link>
                </div>

                {/* Nav Links */}
                <div className="space-y-1 pt-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 last:border-0 pb-1">
                      <div className="flex items-center justify-between w-full py-2.5 font-medium">
                        <Link
                          to={item.path}
                          className={`text-base flex-1 ${
                            location.pathname.startsWith(item.path) && item.path !== '/'
                              ? 'text-[#1a4d2e] font-bold'
                              : 'text-gray-800'
                          }`}
                          onClick={() => !item.subItems && setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.subItems && (
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="p-2 text-gray-500 hover:text-gray-900"
                            aria-label={`Toggle ${item.name} submenu`}
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${
                                openDropdown === item.name ? 'rotate-180 text-[#1a4d2e]' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Sub Items Accordion */}
                      <AnimatePresence>
                        {item.subItems && openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 pb-2 space-y-1 overflow-hidden"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 text-xs rounded-lg transition-colors ${
                                  location.pathname === sub.path
                                    ? 'bg-emerald-50 text-[#1a4d2e] font-bold'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Direct Action Buttons */}
                <div className="pt-4 space-y-2.5 border-t border-gray-100">
                  <a
                    href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-sm text-sm"
                  >
                    <span>{isRTL ? "محادثة عبر واتساب" : "Chat on WhatsApp"}</span>
                  </a>

                  <a
                    href="tel:+97142240733"
                    className="flex items-center justify-center gap-2.5 bg-[#1a4d2e]/10 text-[#1a4d2e] font-bold py-3.5 rounded-xl text-sm"
                  >
                    <Phone size={17} />
                    <span>{isRTL ? "الخط الساخن: 0733 224 4 971+" : "Call Hotline: +971 4 224 0733"}</span>
                  </a>

                  <Button
                    onClick={() => {
                      navigate('/contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white font-bold py-3.5 rounded-xl text-sm shadow-md"
                  >
                    {t('nav.contact')}
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

export default Header;
