import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';
import { useToast } from './ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Landscaping', path: '/landscaping' },
    { name: 'Agriculture', path: '/agriculture' },
    { name: 'Partners', path: '/partners' },
  ];

  const services = [
    { name: 'Green Houses', path: '/agriculture/green-houses' },
    { name: 'Planter Pots', path: '/agriculture/planter-pots' },
    { name: 'Planters', path: '/landscaping/planters' },
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

  return (
    <footer className="bg-gradient-to-b from-[#0f3d24] to-[#1a4d2e] text-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight">
              Kahf Greens
            </h3>
            <p className="text-[#c8e6c9] leading-relaxed mb-8 max-w-xs">
              Sustainable landscaping and agricultural solutions across the UAE
              and GCC for over 20 years.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-[#2a5c3a] hover:bg-[#3a7c50] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#90b77d]"
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="text-[#c8e6c9] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="text-[#c8e6c9] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
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
                      className="text-[#c8e6c9] hover:text-white transition-colors flex items-start gap-3"
                    >
                      <Icon size={18} strokeWidth={2.4} className="mt-1" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d5f3f]/60 pt-8 pb-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#b0d0b8]">
            <div>
              © {currentYear} Kahf Greens. All rights reserved. | {currentDate}
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

          {/* Floating Scroll Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute -top-5 right-8 bg-[#3a7c50] hover:bg-[#4a8c60] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#90b77d] hidden md:block"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
