import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../components/ui/use-toast';
const ContactPage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interests: []
  });
  const interests = ['Product Inquiry', 'Landscape Design', 'Maintenance Services', 'Green Walls', 'Irrigation Systems'];
  const handleCheckboxChange = (checked, interest) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== interest)
      }));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. Our team will get back to you shortly.",
      variant: "default"
    });
    // Reset form logic would go here
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interests: []
    });
  };
  return <div className="bg-white min-h-screen">
      <Helmet>
        <title>Contact Us | Kahf Greens</title>
        <meta name="description" content="Get in touch with Kahf Greens for your landscaping and product needs in UAE. Visit us in Ras Al Khor or contact via phone/email." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#1a4d2e] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </motion.h1>
          <p className="text-xl text-[#e8f5e9]">We're here to help you grow.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }}>
            <h2 className="text-3xl font-bold text-[#1a4d2e] mb-8">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#f1f8e9] p-3 rounded-full text-[#1a4d2e]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">Ras Al Khor Industrial Area 2<br />Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#f1f8e9] p-3 rounded-full text-[#1a4d2e]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">+971 56 509 6880</p>
                  <p className="text-gray-600 mb-2">+974 4 2240733</p>
                  <Button variant="outline" size="sm" className="gap-2 text-[#1a4d2e] border-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white">
                    <Phone size={14} /> Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f1f8e9] p-3 rounded-full text-[#1a4d2e]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Chat with our sales team instantly.</p>
                  <Button variant="outline" size="sm" className="gap-2 text-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white">
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f1f8e9] p-3 rounded-full text-[#1a4d2e]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@kahfgreens.ae</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
               <iframe title="Ras Al Khor Map" src="https://www.openstreetmap.org/export/embed.html?bbox=55.334000%2C25.180000%2C55.380000%2C25.210000&amp;layer=mapnik" width="100%" height="100%" frameBorder="0" style={{
              border: 0
            }}></iframe>
              <div className="absolute bottom-0 left-0 bg-white/80 p-2 text-xs">
                <a href="https://www.openstreetmap.org/#map=14/25.1950/55.3570" target="_blank" rel="noreferrer">View Larger Map</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.4
        }} className="bg-[#f9fafb] p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a4d2e] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input id="name" required type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input id="phone" required type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent" placeholder="+971 50 000 0000" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" required type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 block">I'm interested in:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map(interest => <div key={interest} className="flex items-center space-x-2">
                      <Checkbox id={interest} checked={formData.interests.includes(interest)} onCheckedChange={checked => handleCheckboxChange(checked, interest)} />
                      <label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer">
                        {interest}
                      </label>
                    </div>)}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent" placeholder="Tell us about your project requirements..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} />
              </div>

              <Button type="submit" className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] h-12 text-lg">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default ContactPage;