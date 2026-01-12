import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sprout, TreeDeciduous, Droplets, Leaf } from 'lucide-react';

const Agriculture = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  const categories = [
    {
      id: 'growing',
      title: 'Growing',
      icon: TreeDeciduous,
      color: 'bg-[#e8f5e9]',
      textColor: 'text-[#1a4d2e]',
      description: 'Everything you need to cultivate thriving plants from seed to harvest.',
      products: [
        {
          name: 'GreenHouses',
          desc: 'Climate-controlled environments for optimal plant growth in UAE conditions.',
          uses: 'Commercial farms, research centers, private estates.',
          benefit: 'Year-round cultivation protection.',
          eco: 'Energy-efficient cooling options available.',
          image: 'greenhouse',
          path: '/agriculture/green-houses'
        },
        {
          name: 'Machinery',
          desc: 'High-quality UV protected netting to reduce heat stress on crops.',
          uses: 'Nurseries, car parks, agricultural fields.',
          benefit: 'Reduces temperature by up to 5-10°C.',
          eco: 'Long-lasting recyclable materials.',
          image: 'shade net agriculture',
          path: '/agriculture/machinery'
        }
      ]
    },
    {
      id: 'planting',
      title: 'Planting',
      icon: Sprout,
      color: 'bg-[#f1f8e9]',
      textColor: 'text-[#33691e]',
      description: 'The foundation of your landscape: pots, planters, and accessories.',
      products: [
        {
          name: 'Planter Bags',
          desc: 'Standard production pots in various sizes for growers.',
          uses: 'Wholesale nurseries, propagation.',
          benefit: 'Standardized sizes for automation.',
          eco: 'Made from recycled plastics.',
          image: 'plastic plant pots',
          path: '/agriculture/planter-bags'
        },
        {
          name: 'Planter Pots',
          desc: 'Aesthetic pots for interior and exterior design statements.',
          uses: 'Hotels, offices, luxury villas.',
          benefit: 'Lightweight and durable fiberglass/ceramic.',
          eco: 'Sustainable material sourcing.',
          image: 'modern large planters',
          path: '/agriculture/planter-pots'
        },
        {
          name: 'Landscaping Accessories',
          desc: 'Edging, weed mats, stakes, and ties.',
          uses: 'Garden maintenance, landscape installation.',
          benefit: 'Professional finish and plant support.',
          eco: 'Recycled rubber edging options.',
          image: 'garden tools landscaping'
        }
      ]
    },
    {
      id: 'saving',
      title: 'Saving',
      icon: Droplets,
      color: 'bg-[#e0f2f1]',
      textColor: 'text-[#004d40]',
      description: 'Water conservation technologies essential for our region.',
      products: [
        {
          name: 'Irrigation',
          desc: 'Smart drip and sprinkler systems designed to minimize waste.',
          uses: 'Lawns, agricultural fields, vertical gardens.',
          benefit: 'Saves up to 50% water vs traditional methods.',
          eco: 'Precision watering reduces runoff.',
          image: 'drip irrigation',
          path: '/agriculture/irrigation'
        },
        {
          name: 'Water Saving',
          desc: 'Moisture retention mats and subsurface textiles.',
          uses: 'Roof gardens, arid soil planting.',
          benefit: 'Reduces watering frequency significantly.',
          eco: 'Made from biodegradable fibers.',
          image: 'soil moisture mat',
          path: '/agriculture/water-saving'
        },
        {
          name: 'Pumps And Hoses',
          desc: 'Industrial grade pumps and accurate metering for resource management.',
          uses: 'Commercial facilities, farms.',
          benefit: 'Precise control over resource usage.',
          eco: 'Energy-efficient motor designs.',
          image: 'water pump agriculture',
          path: '/agriculture/pumps-hoses'
        }
      ]
    }
  ];

  const additionalProducts = [
     'Nursery Transport Equipment', 'Water Saving Granules', 'Pumps & Hoses'
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Products | Kahf Greens</title>
        <meta name="description" content="Explore our range of sustainable landscaping products: Greenhouses, Planters, Irrigation Systems, and Water Saving technologies." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Products for a Greener Tomorrow
          </motion.h1>
          <p className="text-xl text-[#e8f5e9] max-w-2xl mx-auto">
            High-quality, sustainable solutions for planting, growing, and saving resources in the UAE environment.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, catIndex) => {
          const CatIcon = cat.icon;
          return (
            <section key={cat.id} id={cat.id}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8 border-b pb-4"
              >
                <div className={`p-3 rounded-full ${cat.color} ${cat.textColor}`}>
                  <CatIcon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a4d2e]">{cat.title}</h2>
                  <p className="text-gray-600">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.products.map((product, prodIndex) => (
                  <motion.div
                    key={prodIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: prodIndex * 0.1 }}
                    className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden group">
                       <img 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        src={`https://source.unsplash.com/800x600/?${encodeURIComponent(product.image)}`} 
                      />
                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{product.desc}</p>
                      
                      <div className="space-y-2 text-sm mb-6">
                        <div className="flex gap-2">
                          <span className="font-semibold text-[#556b2f]">Uses:</span>
                          <span className="text-gray-600">{product.uses}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-semibold text-[#556b2f]">Key Benefit:</span>
                          <span className="text-gray-600">{product.benefit}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Leaf size={14} className="text-[#90b77d]" />
                          <span className="text-[#90b77d] italic">{product.eco}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => product.path ? navigate(product.path) : handleQuoteClick()}
                        className="w-full mt-auto bg-[#1a4d2e] hover:bg-[#2d5f3f]"
                      >
                        {product.path ? 'Learn More' : 'Request Quote'}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Additional List */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a4d2e] mb-8">More Specialized Equipment</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalProducts.map((item, idx) => (
              <span key={idx} className="bg-white px-6 py-3 rounded-full shadow-sm text-[#2d5f3f] font-medium border border-[#e8f5e9]">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button onClick={handleQuoteClick} size="lg" className="bg-[#556b2f] hover:bg-[#6b8e23]">
              Contact for Full Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;