import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from './ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleUnimplementedClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', path: '/about' },
      { name: 'Products', path: '/products' },
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' }
    ],
    'Services': [
      { name: 'Landscape Design', path: '/services' },
      { name: 'Planting Services', path: '/services' },
      { name: 'Nursery Solutions', path: '/products' },
      { name: 'Maintenance', path: '/contact' }
    ],
    'Contact': [
      { name: 'Ras Al Khor, Dubai, UAE', type: 'address' },
      { name: '+971 56 509 6880', type: 'phone' },
      { name: '+974 4 2240733', type: 'phone' }, // Added new phone number here
      { name: 'info@kahfgreens.ae', type: 'email' }
    ]
  };

  const handleLinkClick = (link) => {
    if (link.type) return; // Don't navigate for contact info
    
    if (link.path && ['/about', '/products', '/contact', '/'].includes(link.path)) {
      navigate(link.path);
    } else {
      handleUnimplementedClick();
    }
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#1a4d2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-bold mb-4 block">Kahf Greens</span>
            <p className="text-[#e8f5e9] mb-6">
              Transforming the UAE landscape with sustainable green solutions for over 20 years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    onClick={handleUnimplementedClick}
                    className="bg-[#2d5f3f] hover:bg-[#90b77d] p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <span className="text-lg font-semibold mb-4 block">{category}</span>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    {category === 'Contact' ? (
                      <span className="text-[#e8f5e9] flex items-center gap-2">
                        {/* Only show MapPin for the first contact item (address) */}
                        {index === 0 && <MapPin size={16} />}
                        {/* Show Phone icon for phone numbers */}
                        {link.type === 'phone' && <Phone size={16} />}
                        {/* Show Mail icon for email */}
                        {link.type === 'email' && <Mail size={16} />}
                        {link.name}
                      </span>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-[#e8f5e9] hover:text-white transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[#2d5f3f] pt-8">
          <p className="text-center text-[#e8f5e9]">
            © 2025 Kahf Greens. All rights reserved. Building greener futures together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;