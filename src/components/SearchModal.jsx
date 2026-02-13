import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Website pages data for search
const searchPages = [
  // Main pages
  { name: 'Home', path: '/', category: 'Main' },
  { name: 'About Us', path: '/about', category: 'Main' },
  { name: 'Contact Us', path: '/contact', category: 'Main' },
  { name: 'Partners & Clients', path: '/partners', category: 'Main' },
  { name: 'Projects', path: '/projects', category: 'Main' },
  
  // Agriculture pages
  { name: 'Agriculture', path: '/agriculture', category: 'Agriculture' },
  { name: 'Planter Pots', path: '/agriculture/planter-pots', category: 'Agriculture' },
  { name: 'Planter Bags', path: '/agriculture/planter-bags', category: 'Agriculture' },
  { name: 'Green Houses', path: '/agriculture/green-houses', category: 'Agriculture' },
  { name: 'Irrigation', path: '/agriculture/irrigation', category: 'Agriculture' },
  { name: 'Pumps & Hoses', path: '/agriculture/pumps-hoses', category: 'Agriculture' },
  { name: 'Machinery', path: '/agriculture/machinery', category: 'Agriculture' },
  { name: 'Water Saving', path: '/agriculture/water-saving', category: 'Agriculture' },
  
  // Landscaping pages
  { name: 'Landscaping', path: '/landscaping', category: 'Landscaping' },
  { name: 'Maintenance', path: '/landscaping/maintenance', category: 'Landscaping' },
  { name: 'New Services', path: '/landscaping/new-services', category: 'Landscaping' },
  { name: 'Systems', path: '/landscaping/systems', category: 'Landscaping' },
  { name: 'Outdoor Living', path: '/landscaping/outdoor-living', category: 'Landscaping' },
  { name: 'Planters', path: '/landscaping/planters', category: 'Landscaping' },
  { name: 'Water Saving (Landscaping)', path: '/landscaping/water-saving', category: 'Landscaping' },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Reset state when closing
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search functionality
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = searchPages.filter(page =>
      page.name.toLowerCase().includes(searchTerm) ||
      page.category.toLowerCase().includes(searchTerm)
    );
    setResults(filtered);
  }, [query]);

  const handleResultClick = (path) => {
    navigate(path);
    onClose();
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Search Input */}
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for pages, products, services..."
                  className="w-full pl-12 pr-12 py-4 text-lg bg-transparent border-b border-gray-100 focus:outline-none focus:border-gray-200 placeholder:text-gray-400"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close search"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim() === '' ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search size={40} className="mx-auto mb-3 text-gray-300" />
                    <p>Start typing to search...</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                ) : (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <button
                        key={result.path}
                        onClick={() => handleResultClick(result.path)}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#f0f7f0] transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-[#1a4d2e] bg-[#1a4d2e]/10 px-2 py-1 rounded-md">
                            {result.category}
                          </span>
                          <span className="text-gray-800 font-medium">
                            {result.name}
                          </span>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-gray-400 group-hover:text-[#1a4d2e] group-hover:translate-x-1 transition-all"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <span>Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs">Esc</kbd> to close</span>
                <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
