"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  History,
  AlertCircle,
  Sparkles,
  Layers,
  Trees,
  Sprout,
  Building2,
  CornerDownLeft,
  Trash2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';

// ────────────────────────────────────────────────
// Comprehensive Search Index
// ────────────────────────────────────────────────
const searchIndex = [
  // --- Main / Corporate Pages ---
  {
    name: 'Home',
    path: '/',
    category: 'Company',
    keywords: ['kahf greens', 'home', 'welcome', 'sustainable landscaping', 'agriculture uae', 'villas', 'estates', 'dubai'],
    snippet:
      'Welcome to Kahf Greens — your trusted partner for premium sustainable landscaping and agriculture solutions across the UAE. Over 20 years of excellence in desert greening.',
  },
  {
    name: 'About Us',
    path: '/about',
    category: 'Company',
    keywords: ['about', 'who we are', 'history', 'team', 'mission', 'vision', '20 years', 'leadership', 'credentials'],
    snippet:
      'With over 20 years of excellence, Kahf Greens is the UAE leading provider of sustainable landscaping and agricultural solutions for government, commercial, and private clients.',
  },
  {
    name: 'Contact Us',
    path: '/contact',
    category: 'Company',
    keywords: ['contact', 'get in touch', 'phone', 'email', 'location', 'whatsapp', 'ras al khor', 'quote', 'inquiry'],
    snippet:
      'Reach our team in Ras Al Khor, Dubai. Call +971 4 224 0733 / +971 56 509 6880, or submit a request for expert advice and customized quotations.',
  },
  {
    name: 'Partners & Clients',
    path: '/partners',
    category: 'Company',
    keywords: ['partners', 'clients', 'collaborations', 'dubai municipality', 'dewa', 'sewa', 'government', 'approvals'],
    snippet:
      'Proudly trusted by Dubai Municipality, DEWA, SEWA, Dubai South, Sharjah Municipality, Ajman Municipality, and leading private developers across the UAE.',
  },
  {
    name: 'Projects & Portfolio',
    path: '/projects',
    category: 'Company',
    keywords: ['projects', 'portfolio', 'case studies', 'dubai marina', 'palm jumeirah', 'university campus', 'villa gardens'],
    snippet:
      'Browse our portfolio of completed projects — luxury residential villa landscapes, university campuses, shopping malls, government complexes, and beach resorts across the Emirates.',
  },

  // --- Landscaping Division ---
  {
    name: 'Landscaping Division',
    path: '/landscaping',
    category: 'Landscaping',
    keywords: ['landscaping', 'landscape design', 'garden design', 'outdoor spaces', 'villas', 'contractor dubai'],
    snippet:
      'Turnkey landscape design, construction, and ongoing maintenance for UAE villas, commercial developments, and public spaces.',
  },
  {
    name: 'Garden Maintenance Services',
    path: '/landscaping/maintenance',
    category: 'Landscaping',
    keywords: ['maintenance', 'garden care', 'lawn mowing', 'shrub trimming', 'turf care', 'indoor plant care', 'pruning', 'pest control'],
    snippet:
      'Professional ongoing villa and estate maintenance: scheduled garden care, precision shrub and hedge trimming, turf aeration, and interior plant management.',
  },
  {
    name: 'New Installation Services',
    path: '/landscaping/new-services',
    category: 'Landscaping',
    keywords: ['new services', 'sustainable landscaping', 'tree planting', 'living green walls', 'artificial green walls', 'artificial grass', 'synthetic turf', 'artificial plants'],
    snippet:
      'Transform outdoor areas with sustainable xeriscaping, mature tree planting, premium turf installation, automated living green walls, and UV-resistant artificial foliage.',
  },
  {
    name: 'Landscape Systems',
    path: '/landscaping/systems',
    category: 'Landscaping',
    keywords: ['systems', 'smart irrigation', 'landscape lighting', 'led lights', 'pathway lighting', 'automated timers', 'water conservation'],
    snippet:
      'Intelligent outdoor systems: Wi-Fi weather-adaptive smart irrigation controllers, leak detection networks, and energy-efficient LED architectural landscape lighting.',
  },
  {
    name: 'Outdoor Living Spaces',
    path: '/landscaping/outdoor-living',
    category: 'Landscaping',
    keywords: ['outdoor living', 'pergola', 'gazebo', 'seating areas', 'shade structure', 'tensile sails', 'fencing', 'privacy panels', 'canopies'],
    snippet:
      'Custom pergolas, gazebos, architectural tensile shade structures, built-in sunken seating lounges, and decorative laser-cut privacy fencing for UAE villas.',
  },
  {
    name: 'Planters & Urban Dividers',
    path: '/landscaping/planters',
    category: 'Landscaping',
    keywords: ['planters', 'indoor planters', 'outdoor planters', 'street planters', 'urban dividers', 'planter benches', 'grc pots', 'fiberglass pots'],
    snippet:
      'Architectural fiberglass and GRC planters for villas, commercial streetscapes, hotel plazas, café divider screens, and custom integrated planter bench seating.',
  },
  {
    name: 'Water Saving (Landscaping)',
    path: '/landscaping/water-saving',
    category: 'Landscaping',
    keywords: ['water saving', 'lite strips', 'lite net', 'super absorbent textiles', 'granules', 'soil moisture', 'hydrogels', 'drought'],
    snippet:
      'Super-absorbent polymer geotextile strips for pots, underground net rolls for lawns, tree root kits, and water-retaining granules cutting irrigation by up to 50%.',
  },
  {
    name: 'Balcony Gardens & Packages',
    path: '/landscaping/balcony',
    category: 'Landscaping',
    keywords: ['balcony', 'balcony garden', 'zen starter', 'urban oasis', 'royal retreat', 'apartment terrace', 'penthouse', 'artificial grass', 'green wall dubai'],
    snippet:
      'Turnkey balcony garden packages for Dubai apartments & penthouses: The Zen Starter, The Urban Oasis, and The Royal Retreat with custom green walls and turf.',
  },
  {
    name: 'Balcony Gallery',
    path: '/landscaping/balcony-gallery',
    category: 'Landscaping',
    keywords: ['balcony gallery', 'photos', 'designs', 'high rise balconies', 'terrace ideas', 'dubai apartments'],
    snippet:
      'Visual gallery of transformed apartment balconies, luxury sky terraces, and compact urban gardens executed across Dubai and Abu Dhabi.',
  },

  // --- Agriculture Division ---
  {
    name: 'Agriculture Solutions',
    path: '/agriculture',
    category: 'Agriculture',
    keywords: ['agriculture', 'farming', 'greenhouse', 'irrigation', 'planter pots', 'water saving', 'commercial farm', 'desert agriculture'],
    snippet:
      'Complete agricultural technologies engineered for Gulf climatic conditions: commercial greenhouses, precision irrigation, heavy pumps, pots, bags, and machinery.',
  },
  {
    name: 'Planter Pots (Agriculture)',
    path: '/agriculture/planter-pots',
    category: 'Agriculture',
    keywords: ['planter pots', 'pots', 'containers', 'outdoor growing', 'vertical farming', 'fruit growing', 'large trees', 'date palms'],
    snippet:
      'Heavy-duty UV-stabilized agricultural planter pots engineered for outdoor crop cultivation, vertical farming towers, fruit trees, and mature date palms.',
  },
  {
    name: 'Planter Bags',
    path: '/agriculture/planter-bags',
    category: 'Agriculture',
    keywords: ['planter bags', 'grow bags', 'woven bags', 'non-woven bags', 'fabric pots', 'nursery bags', 'root aeration'],
    snippet:
      'Woven and non-woven fabric grow bags providing superior root aeration, thermal regulation, and air pruning for commercial tree nurseries and crop farms.',
  },
  {
    name: 'Greenhouses & Accessories',
    path: '/agriculture/green-houses',
    category: 'Agriculture',
    keywords: ['greenhouses', 'cooling pads', 'shade nets', 'ground covers', 'protected agriculture', 'evaporative cooling', 'polycarbonate'],
    snippet:
      'Commercial greenhouse structures, evaporative cellulose cooling pads, high-density UV-treated shade nets, and woven ground covers for desert heat mitigation.',
  },
  {
    name: 'Agricultural Irrigation',
    path: '/agriculture/irrigation',
    category: 'Agriculture',
    keywords: ['irrigation', 'smart irrigation', 'drip irrigation', 'pipe fittings', 'misting', 'nozzles', 'sprinklers', 'automation'],
    snippet:
      'High-efficiency agricultural drip networks, misting systems, precision spray nozzles, compression fittings, and automated irrigation control valves.',
  },
  {
    name: 'Pumps & Hoses',
    path: '/agriculture/pumps-and-hoses',
    category: 'Agriculture',
    keywords: ['pumps', 'hoses', 'suction hose', 'delivery hose', 'agricultural pumps', 'submersible pump', 'centrifugal pump'],
    snippet:
      'Submersible deep-well pumps, high-pressure centrifugal surface pumps, armored suction hoses, and heavy-duty lay-flat water delivery hoses.',
  },
  {
    name: 'Agricultural Machinery',
    path: '/agriculture/machinery',
    category: 'Agriculture',
    keywords: ['machinery', 'pot transportation', 'tray system', 'tree lifting', 'greenhouse equipment', 'nursery logistics', 'automation'],
    snippet:
      'Logistics automation for commercial nurseries: seedling tray transport belts, motorized pot movers, hydraulic tree lifters, and greenhouse sprayers.',
  },
  {
    name: 'Water Saving (Agriculture)',
    path: '/agriculture/water-saving',
    category: 'Agriculture',
    keywords: ['water saving', 'super absorbent textiles', 'lite net', 'hydrogel', 'granules', 'soil moisture', 'arid farming'],
    snippet:
      'Advanced polymer geotextile subterranean nets, root-zone moisture reservoirs, and soil conditioning hydrogel granules designed for harsh desert soils.',
  },
];

// ────────────────────────────────────────────────
// Fuse.js Instance
// ────────────────────────────────────────────────
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'name', weight: 0.45 },
    { name: 'keywords', weight: 0.3 },
    { name: 'snippet', weight: 0.15 },
    { name: 'category', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  shouldSort: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

const POPULAR_SEARCHES = [
  'Smart Irrigation',
  'Balcony Gardens',
  'Living Green Walls',
  'Pergolas & Gazebos',
  'Planter Pots',
  'Cooling Pads & Shade Nets',
  'Water Saving Hydrogels',
  'Garden Maintenance',
];

const CATEGORIES = ['All', 'Landscaping', 'Agriculture', 'Company'];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kg_recent_searches');
      if (saved) {
        setRecentSearches(JSON.parse(saved).slice(0, 6));
      }
    } catch {
      // ignore JSON error
    }
  }, []);

  // Focus input when opened and preserve what the user wrote
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Move cursor to end of text if text already exists
          try {
            const len = inputRef.current.value.length;
            inputRef.current.setSelectionRange(len, len);
          } catch {
            // ignore
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Debounced search logic
  useEffect(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    debounceTimerRef.current = setTimeout(() => {
      const trimmed = query.trim();
      if (!trimmed) {
        setResults([]);
        setSelectedIndex(0);
        return;
      }

      const fuseResults = fuse.search(trimmed);
      let items = fuseResults.map((r) => r.item);

      if (activeCategory !== 'All') {
        items = items.filter((item) => item.category === activeCategory);
      }

      setResults(items);
      setSelectedIndex(0);
    }, 150);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, [query, activeCategory]);

  // Ensure selected item is visible when navigating with arrow keys
  useEffect(() => {
    if (resultsContainerRef.current && results.length > 0) {
      const selectedElem = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedElem) {
        selectedElem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, results.length]);

  // Keyboard navigation (Arrow Up, Arrow Down, Enter)
  useEffect(() => {
    const handleKeys = (e) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex].path);
        }
      }
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, results, selectedIndex]);

  const handleResultClick = (path) => {
    const trimmed = query.trim();
    if (trimmed) {
      const updated = [
        { query: trimmed, timestamp: Date.now() },
        ...recentSearches.filter((s) => s.query.toLowerCase() !== trimmed.toLowerCase()),
      ].slice(0, 6);
      setRecentSearches(updated);
      try {
        localStorage.setItem('kg_recent_searches', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }

    navigate(path);
    onClose();
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('kg_recent_searches');
    } catch {
      // ignore
    }
  };

  const handleRemoveRecentItem = (e, q) => {
    e.stopPropagation();
    const updated = recentSearches.filter((s) => s.query !== q);
    setRecentSearches(updated);
    try {
      localStorage.setItem('kg_recent_searches', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Landscaping':
        return <Trees size={14} className="text-[#1a4d2e]" />;
      case 'Agriculture':
        return <Sprout size={14} className="text-amber-700" />;
      default:
        return <Building2 size={14} className="text-gray-600" />;
    }
  };

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'Landscaping':
        return 'bg-emerald-50 text-[#1a4d2e] border border-emerald-200/80';
      case 'Agriculture':
        return 'bg-amber-50 text-amber-900 border border-amber-200/80';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const highlightMatch = (text, term) => {
    if (!term) return text;
    const cleanTerm = term.trim();
    if (!cleanTerm) return text;
    const regex = new RegExp(`(${cleanTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-emerald-200 text-emerald-950 font-semibold px-0.5 rounded">$1</mark>');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8 md:pt-16 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10 flex flex-col max-h-[85vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Search Input Bar */}
            <div className="relative border-b border-gray-100 flex items-center px-4 md:px-6 py-4 bg-white">
              <Search className="text-[#1a4d2e] flex-shrink-0" size={22} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search landscaping, agriculture, products, projects..."
                className="w-full pl-3 pr-8 py-1 text-base md:text-lg bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400"
                autoComplete="off"
                spellCheck="false"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold text-gray-400 bg-gray-100 border border-gray-200 rounded">
                  ESC
                </kbd>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 px-4 md:px-6 py-2.5 bg-gray-50/80 border-b border-gray-100 overflow-x-auto no-scrollbar">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-1 mr-1 flex-shrink-0">
                <Layers size={12} /> Filter:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#1a4d2e] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-200/70 border border-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div
              ref={resultsContainerRef}
              className="overflow-y-auto flex-1 p-2 md:p-4 divide-y divide-gray-50"
            >
              {query.trim() === '' ? (
                <div className="py-6 px-2 space-y-6">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3 px-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                          <History size={14} /> Recent Searches
                        </span>
                        <button
                          onClick={handleClearRecent}
                          className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                        >
                          <Trash2 size={12} /> Clear all
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((s) => (
                          <div
                            key={s.query}
                            onClick={() => setQuery(s.query)}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-[#e8f5e9] text-gray-700 hover:text-[#1a4d2e] rounded-full text-xs font-medium cursor-pointer transition-colors"
                          >
                            <span>{s.query}</span>
                            <button
                              onClick={(e) => handleRemoveRecentItem(e, s.query)}
                              className="text-gray-400 hover:text-gray-700 transition-colors"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <Sparkles size={14} className="text-amber-500" /> Popular Suggestions
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR_SEARCHES.map((item) => (
                        <button
                          key={item}
                          onClick={() => setQuery(item)}
                          className="px-3 py-1.5 bg-emerald-50/60 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white border border-emerald-200/60 rounded-full text-xs font-medium transition-all"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center py-4 text-xs text-gray-400 border-t border-gray-100 mt-4">
                    Tip: Use <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↓</kbd> to navigate results, and{' '}
                    <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">Enter</kbd> to select.
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <AlertCircle size={40} className="mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-700 font-semibold text-base">No results found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
                    Try checking your spelling or explore suggested topics like "irrigation", "balcony", "planters", or "greenhouses".
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    const highlightedName = highlightMatch(item.name, query);
                    const highlightedSnippet = highlightMatch(item.snippet, query);

                    return (
                      <div
                        key={item.path}
                        data-index={idx}
                        onClick={() => handleResultClick(item.path)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`p-3.5 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#e8f5e9] text-[#1a4d2e] shadow-sm'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${getCategoryBadgeStyle(
                                item.category
                              )}`}
                            >
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </span>
                            <h4
                              className="text-sm md:text-base font-bold text-gray-900 truncate"
                              dangerouslySetInnerHTML={{ __html: highlightedName }}
                            />
                          </div>
                          <p
                            className="text-xs text-gray-600 line-clamp-2 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: highlightedSnippet }}
                          />
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0 pt-1 text-gray-400">
                          {isSelected && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#1a4d2e] font-semibold">
                              <CornerDownLeft size={12} /> Select
                            </span>
                          )}
                          <ArrowRight
                            size={16}
                            className={`transition-transform ${
                              isSelected ? 'text-[#1a4d2e] translate-x-1' : ''
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="px-4 md:px-6 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>
                {results.length > 0 ? (
                  <>
                    <strong className="text-gray-700">{results.length}</strong> matching page{results.length > 1 ? 's' : ''}
                  </>
                ) : (
                  'Kahf Greens Fast Navigation'
                )}
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Press</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[11px]">ESC</kbd>
                <span>to exit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
