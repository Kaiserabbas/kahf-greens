"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, History, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

// ────────────────────────────────────────────────
// Search Index (your updated version + all pages)
// ────────────────────────────────────────────────
const searchIndex = [
  // Main Pages
  {
    name: 'Home',
    path: '/',
    category: 'Main',
    keywords: ['kahf greens', 'home', 'welcome', 'sustainable landscaping', 'agriculture uae'],
    snippet:
      'Welcome to Kahf Greens — your trusted partner for premium sustainable landscaping and agriculture solutions across the UAE. From luxury villa gardens to large-scale farming systems, we deliver climate-resilient beauty and productivity.',
  },
  {
    name: 'About Us',
    path: '/about',
    category: 'Main',
    keywords: ['about', 'who we are', 'history', 'team', 'mission', 'vision', '20 years'],
    snippet:
      'With over 20 years of excellence, Kahf Greens is the UAE’s leading provider of sustainable landscaping and agricultural solutions. We combine local expertise with innovative, water-efficient technologies to create thriving green spaces in the desert environment.',
  },
  {
    name: 'Contact Us',
    path: '/contact',
    category: 'Main',
    keywords: ['contact', 'get in touch', 'phone', 'email', 'location', 'whatsapp', 'ras al khor'],
    snippet:
      'Reach our team in Ras Al Khor, Dubai. Call +971 56 509 6880, WhatsApp us, or email info@kahfgreens.ae for expert advice on landscaping, irrigation, planters, greenhouses and more.',
  },
  {
    name: 'Partners & Clients',
    path: '/partners',
    category: 'Main',
    keywords: ['partners', 'clients', 'collaborations', 'dubai municipality', 'dewa', 'sewa', 'government'],
    snippet:
      'Proudly trusted by Dubai Municipality, DEWA, SEWA, Dubai South, Sharjah Municipality, Ajman Municipality, and leading private developers across the UAE for sustainable landscaping and agriculture projects.',
  },
  {
    name: 'Projects',
    path: '/projects',
    category: 'Main',
    keywords: ['projects', 'portfolio', 'case studies', 'dubai marina', 'palm jumeirah', 'university campus'],
    snippet:
      'Browse our portfolio of completed projects — luxury residential gardens, university campuses, commercial malls, government complexes, beach resorts and more — showcasing sustainable design and premium execution across the Emirates.',
  },

  // Agriculture Section
  {
    name: 'Agriculture',
    path: '/agriculture',
    category: 'Agriculture',
    keywords: ['agriculture', 'farming', 'greenhouse', 'irrigation', 'planter pots', 'water saving'],
    snippet:
      'Complete agricultural solutions tailored for the UAE climate: high-quality planter pots & bags, advanced greenhouses, smart irrigation systems, pumps & hoses, machinery, and water-saving technologies for maximum yield and efficiency.',
  },
  {
    name: 'Planter Pots',
    path: '/agriculture/planter-pots',
    category: 'Agriculture',
    keywords: ['planter pots', 'pots', 'containers', 'outdoor growing', 'vertical farming', 'large trees'],
    snippet:
      'Durable, UV-stabilized planter pots designed for UAE conditions — perfect for outdoor growing, vertical farming, fruit trees, date palms, and large specimen trees. Available in various sizes with excellent drainage and root aeration.',
  },
  {
    name: 'Planter Bags',
    path: '/agriculture/planter-bags',
    category: 'Agriculture',
    keywords: ['planter bags', 'grow bags', 'woven bags', 'non-woven bags', 'fabric pots'],
    snippet:
      'High-quality woven and non-woven planter bags offering superior aeration, moisture regulation, and root pruning — ideal for professional nurseries, date palm cultivation, and container farming in hot climates.',
  },
  {
    name: 'Green Houses',
    path: '/agriculture/green-houses',
    category: 'Agriculture',
    keywords: ['greenhouses', 'cooling pads', 'shade nets', 'ground covers', 'protected cultivation'],
    snippet:
      'State-of-the-art greenhouse structures and accessories for the UAE — including cooling pads, shade nets, ground covers, and climate-control systems to extend growing seasons and protect crops from extreme heat.',
  },
  {
    name: 'Irrigation',
    path: '/agriculture/irrigation',
    category: 'Agriculture',
    keywords: ['irrigation', 'smart irrigation', 'drip irrigation', 'pipe fittings', 'misting', 'nozzles'],
    snippet:
      'Water-efficient irrigation solutions for UAE agriculture — smart controllers, drip systems, sprinklers, pipe & fittings, misting setups, and precision nozzles designed to minimize water usage while maximizing crop health.',
  },
  {
    name: 'Pumps & Hoses',
    path: '/agriculture/pumps-and-hoses',
    category: 'Agriculture',
    keywords: ['pumps', 'hoses', 'suction hose', 'delivery hose', 'agricultural pumps'],
    snippet:
      'Reliable agricultural pumps and heavy-duty hoses — including suction & delivery hoses, submersible pumps, and centrifugal systems built for high-temperature, dusty conditions common in UAE farms and nurseries.',
  },
  {
    name: 'Machinery',
    path: '/agriculture/machinery',
    category: 'Agriculture',
    keywords: ['machinery', 'pot transportation', 'tray system', 'tree lifting', 'greenhouse equipment'],
    snippet:
      'Specialized agricultural machinery for efficiency — pot & tray transportation systems, tree lifting equipment, greenhouse automation tools, and handling solutions designed for large-scale UAE nurseries and farms.',
  },
  {
    name: 'Water Saving',
    path: '/agriculture/water-saving',
    category: 'Agriculture',
    keywords: ['water saving', 'super absorbent', 'hydrogel', 'granules', 'soil moisture'],
    snippet:
      'Advanced water-saving technologies for arid climates — super absorbent polymers (hydrogels), soil moisture granules, and retention additives that significantly reduce irrigation needs while improving plant survival in the UAE.',
  },

  // Landscaping Section
  {
    name: 'Landscaping',
    path: '/landscaping',
    category: 'Landscaping',
    keywords: ['landscaping', 'garden design', 'outdoor living', 'maintenance', 'planters'],
    snippet:
      'Expert landscaping services for residential, commercial, and public spaces — including design, installation, maintenance, outdoor living features, planters, green walls, and smart irrigation systems tailored for the UAE.',
  },
  {
    name: 'Maintenance',
    path: '/landscaping/maintenance',
    category: 'Landscaping',
    keywords: ['maintenance', 'garden care', 'lawn mowing', 'shrub trimming', 'turf care'],
    snippet:
      'Professional ongoing maintenance packages — garden care, lawn mowing, shrub trimming, indoor plant care, turf management, and seasonal treatments to keep your landscape healthy and beautiful year-round.',
  },
  {
    name: 'New Services',
    path: '/landscaping/new-services',
    category: 'Landscaping',
    keywords: ['new services', 'sustainable landscaping', 'tree planting', 'green walls'],
    snippet:
      'Latest landscaping innovations — sustainable design packages, large tree planting, vertical gardens, green walls, and eco-friendly hardscaping solutions for modern UAE properties.',
  },
  {
    name: 'Outdoor Living',
    path: '/landscaping/outdoor-living',
    category: 'Landscaping',
    keywords: ['outdoor living', 'pergola', 'gazebo', 'seating areas', 'shade structure'],
    snippet:
      'Create luxurious outdoor living spaces — custom pergolas, gazebos, seating areas, shade structures, outdoor kitchens, and entertainment zones designed for comfort and style in the UAE climate.',
  },
  {
    name: 'Systems',
    path: '/landscaping/systems',
    category: 'Landscaping',
    keywords: ['systems', 'smart irrigation', 'landscape lighting'],
    snippet:
      'Advanced landscaping systems — smart irrigation controllers, automated drip & sprinkler setups, low-voltage landscape lighting, and integrated control solutions for efficiency and ambiance.',
  },
  {
    name: 'Water Saving (Landscaping)',
    path: '/landscaping/water-saving',
    category: 'Landscaping',
    keywords: ['water saving', 'xeriscaping', 'drought tolerant', 'moisture retention'],
    snippet:
      'Water-wise landscaping solutions — xeriscaping principles, drought-tolerant plants, soil moisture retainers, and efficient irrigation designs that dramatically reduce water consumption without sacrificing beauty.',
  },
  {
    name: 'Planters',
    path: '/landscaping/planters',
    category: 'Landscaping',
    keywords: ['planters', 'indoor planters', 'outdoor planters', 'street planters', 'urban dividers'],
    snippet:
      'Premium planters for every space — indoor decorative pots, outdoor large-scale containers, street & urban planters, and modular dividers that combine aesthetics with functionality.',
  },
];

// ────────────────────────────────────────────────
// Fuse.js Setup (outside component for performance)
// ────────────────────────────────────────────────
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'name', weight: 0.5 },
    { name: 'category', weight: 0.2 },
    { name: 'keywords', weight: 0.15 },
    { name: 'snippet', weight: 0.15 },
  ],
  threshold: 0.4,           // 0.0 = exact, 1.0 = very loose
  includeScore: true,
  shouldSort: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved).slice(0, 5));
    }
  }, []);

  // Focus input & reset scroll when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 150);
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Keyboard navigation: Arrow Up/Down + Enter
  useEffect(() => {
    const handleKeys = (e) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        handleResultClick(results[selectedIndex].path);
      }
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, results, selectedIndex]);

  // Debounced search with Fuse.js
  const performSearch = useCallback(
    debounce((searchTerm) => {
      if (!searchTerm.trim()) {
        setResults([]);
        return;
      }

      const fuseResults = fuse.search(searchTerm.trim());

      const filtered = fuseResults
        .slice(0, 12) // top 12 results
        .map((r) => r.item);

      setResults(filtered);
    }, 180),
    []
  );

  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  const handleResultClick = (path) => {
    // Save to recent searches
    const newRecent = [
      { query, timestamp: Date.now(), path },
      ...recentSearches.filter((s) => s.query !== query),
    ].slice(0, 5);

    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));

    navigate(path);
    onClose();
  };

  // Highlight matched text
  const highlightMatch = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-emerald-200 dark:bg-emerald-800/60 px-0.5 rounded">$1</mark>');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -40 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="fixed top-[8%] md:top-[12%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 sm:px-6"
          >
            <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/70 backdrop-blur-md">
              {/* Search Input */}
              <div className="relative border-b border-gray-200 dark:border-gray-800">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  size={22}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, services, products..."
                  className="w-full pl-14 pr-14 py-5 text-lg bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  autoComplete="off"
                  spellCheck="false"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-600/50 dark:scrollbar-thumb-emerald-500/50 scrollbar-track-transparent">
                {query.trim() === '' ? (
                  <div className="p-10 text-center text-gray-500 dark:text-gray-400">
                    <Search size={48} className="mx-auto mb-4 opacity-40" />
                    <p className="text-lg font-medium">Start typing to search</p>
                    <p className="text-sm mt-2 opacity-80">Find pages, services, products, and more...</p>

                    {recentSearches.length > 0 && (
                      <div className="mt-10">
                        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                          <History size={16} />
                          Recent Searches
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {recentSearches.map((s) => (
                            <button
                              key={s.timestamp}
                              onClick={() => setQuery(s.query)}
                              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                              {s.query}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                    <AlertCircle size={48} className="mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-medium">No results found for "{query}"</p>
                    <p className="text-sm mt-2 opacity-80">
                      Try different keywords, check spelling, or browse categories
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {results.map((result, index) => {
                      const isSelected = index === selectedIndex;
                      const nameHighlighted = highlightMatch(result.name, query);
                      const snippetHighlighted = highlightMatch(result.snippet, query);

                      return (
                        <button
                          key={result.path}
                          onClick={() => handleResultClick(result.path)}
                          className={`w-full px-6 py-5 text-left flex items-start gap-5 group hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors ${
                            isSelected ? 'bg-emerald-50 dark:bg-emerald-950/40' : ''
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium ${
                              result.category === 'Main'
                                ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200'
                            }`}
                          >
                            {result.category}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div
                              className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 text-lg mb-1"
                              dangerouslySetInnerHTML={{ __html: nameHighlighted }}
                            />
                            <p
                              className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: snippetHighlighted }}
                            />
                          </div>

                          <ArrowRight
                            size={18}
                            className="flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-1.5"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>
                  Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Esc</kbd> to close
                </span>
                <span>
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ────────────────────────────────────────────────
// Highlight matched text
// ────────────────────────────────────────────────
function highlightMatch(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-emerald-200 dark:bg-emerald-800/60 px-0.5 rounded">$1</mark>');
}

export default SearchModal;