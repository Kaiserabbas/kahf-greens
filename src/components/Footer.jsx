import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock,
  Send,
} from 'lucide-react';
import { useToast } from './ui/use-toast';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Landscaping', path: '/landscaping' },
    { name: 'Agriculture', path: '/agriculture' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Green Houses', path: '/agriculture/green-houses' },
    { name: 'Planter Pots', path: '/agriculture/planter-pots' },
    { name: 'Machinery', path: '/agriculture/machinery' },
    { name: 'Irrigation', path: '/agriculture/irrigation' },
    { name: 'Planters', path: '/landscaping/planters' },
    { name: 'Systems', path: '/landscaping/systems' },    
    { name: 'Outdoor Living', path: '/landscaping/outdoor-living' },
    { name: 'Maintenance', path: '/landscaping/maintenance' },
  ];

  const contactInfo = [
    {
      type: 'address',
      icon: MapPin,
      text: 'Ras Al Khor, Dubai, UAE',
      href: 'https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE',
    },
    {
      type: 'phone',
      icon: Phone,
      text: '+971 56 509 6880',
      href: 'tel:+971565096880',
    },
    {
      type: 'phone',
      icon: Phone,
      text: '+974 4 2240733',
      href: 'tel:+97442240733',
    },
    {
      type: 'email',
      icon: Mail,
      text: 'info@kahfgreens.ae',
      href: 'mailto:info@kahfgreens.ae',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/kahfgreens',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kahf-greens/',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/kahfgreens',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (path) => {
    if (!path) {
      toast({
        title: 'Feature coming soon',
        description: 'This section is under development. Stay tuned!',
        duration: 4000,
      });
      return;
    }
    navigate(path);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Thank you for subscribing!',
        description: 'You will receive our latest updates and news.',
        duration: 4000,
      });
      setEmail('');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f3d24] via-[#0d4730] to-[#1a4d2e] text-white relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="bg-[#0a2d1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a5c3a]/30">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src={logo} 
                alt="Kahf Greens Logo" 
                className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
              />
              <h3 className="text-2xl font-bold tracking-tight">
                Kahf Greens
              </h3>
            </div>
            <p className="text-[#c8e6c9] leading-relaxed mb-6 max-w-xs">
              Sustainable landscaping and agricultural solutions across the UAE
              and GCC for over 20 years.
            </p>

            {/* Newsletter Section */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold mb-3 text-[#90b77d] uppercase tracking-wider">
                Newsletter
              </h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-[#1a4d2e] border border-[#2d5f3f] rounded-lg px-3 py-2 text-sm placeholder-[#6b9b6e] focus:outline-none focus:ring-2 focus:ring-[#90b77d] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#3a7c50] hover:bg-[#4a8c60] p-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#2a5c3a] hover:bg-[#3a7c50] p-3 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#90b77d]"
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="bg-[#0a2d1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a5c3a]/30">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 bg-[#90b77d] rounded-full"></div>
              <h4 className="text-lg font-semibold">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="text-[#c8e6c9] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform text-[#90b77d]">
                      →
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="bg-[#0a2d1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a5c3a]/30">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 bg-[#90b77d] rounded-full"></div>
              <h4 className="text-lg font-semibold">Services</h4>
            </div>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="text-[#c8e6c9] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform text-[#90b77d]">
                      →
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Card */}
            <div className="bg-[#0a2d1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a5c3a]/30">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-[#90b77d] rounded-full"></div>
                <h4 className="text-lg font-semibold">Contact Us</h4>
              </div>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i}>
                      <a
                        href={item.href}
                        target={item.type === 'address' ? '_blank' : undefined}
                        rel={
                          item.type === 'address'
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="text-[#c8e6c9] hover:text-white transition-colors flex items-start gap-3 group"
                      >
                        <Icon size={18} strokeWidth={2.4} className="mt-1 text-[#90b77d] group-hover:text-white transition-colors" />
                        <span>{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Working Hours Card */}
            <div className="bg-[#0a2d1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1a5c3a]/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-[#90b77d] rounded-full"></div>
                <h4 className="text-lg font-semibold">Working Hours</h4>
              </div>
              <ul className="space-y-2">
                {workingHours.map((item, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-[#c8e6c9]">{item.day}</span>
                    <span className="text-[#90b77d] font-medium">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d5f3f]/60 pt-8 pb-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#b0d0b8]">
            <div className="text-center sm:text-left">
              © {currentYear} Kahf Greens. All rights reserved.
              <span className="mx-2">|</span>
              <span className="text-[#6b9b6e]">{currentDate}</span>
              <span className="mx-2">|</span>
              <span className="text-[#6b9b6e]">{currentTime}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#c8e6c9] hover:text-white transition-colors group"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Floating Scroll Button with Pulse Animation */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute -top-5 right-8 bg-gradient-to-r from-[#3a7c50] to-[#4a8c60] text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#90b77d] hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#4a8c60] rounded-full"
            />
            <div className="relative z-10">
              <ArrowUp size={20} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
