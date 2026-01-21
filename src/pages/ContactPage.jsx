import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interests: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    'Product Inquiry',
    'Landscape Design',
    'Maintenance Services',
    'Green Walls',
    'Irrigation Systems',
  ];

  const handleCheckboxChange = (checked, interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay (replace with real fetch/axios to backend later)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast({
      title: "Message Sent Successfully",
      description: "Thank you! Our team will respond within 24-48 hours.",
      variant: "success",
      icon: <CheckCircle className="h-5 w-5" />,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interests: [],
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Contact Kahf Greens | Landscaping & Agricultural Solutions in UAE</title>
        <meta
          name="description"
          content="Contact Kahf Greens for landscaping, agriculture products, maintenance, and irrigation solutions in Dubai. Located in Ras Al Khor – call, email, or WhatsApp us today."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-white py-20 md:py-28 text-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
          >
            Let's Grow Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-[#e8f5e9] max-w-3xl mx-auto"
          >
            We're ready to bring your green vision to life. Reach out today.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left Column - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#f0f7f0] p-4 rounded-xl text-[#1a4d2e] flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ras Al Khor Industrial Area 2<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#f0f7f0] p-4 rounded-xl text-[#1a4d2e] flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Call Us</h3>
                    <div className="space-y-2 text-gray-700">
                      <a href="tel:+971565096880" className="hover:text-[#1a4d2e] transition-colors">
                        +971 56 509 6880
                      </a>
                      <br />
                      <a href="tel:+97442240733" className="hover:text-[#1a4d2e] transition-colors">
                        +974 4 2240733
                      </a>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#1a4d2e] text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white gap-2"
                        asChild
                      >
                        <a href="tel:+971565096880">
                          <Phone size={16} /> Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#f0f7f0] p-4 rounded-xl text-[#1a4d2e] flex-shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-700 mb-4">
                      Instant answers from our team – available 9 AM to 6 PM
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white gap-2"
                      asChild
                    >
                      <a
                        href="https://wa.me/971565096880"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={16} /> Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="bg-[#f0f7f0] p-4 rounded-xl text-[#1a4d2e] flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Us</h3>
                    <a
                      href="mailto:info@kahfgreens.ae"
                      className="text-[#1a4d2e] hover:underline transition-colors"
                    >
                      info@kahfgreens.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-96">
              <iframe
                title="Kahf Greens Location - Ras Al Khor, Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.000!2d55.3575209!3d25.1696089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f678ecd0212b5%3A0xe1afca9da4d254e8!2sKahf%20Greens!5e0!3m2!1sen!2sae!4v1730000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#1a4d2e] mb-8">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]/30 focus:border-[#1a4d2e] transition-all"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]/30 focus:border-[#1a4d2e] transition-all"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]/30 focus:border-[#1a4d2e] transition-all"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  I'm interested in (select all that apply):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleCheckboxChange(checked, interest)}
                        className="border-[#1a4d2e] data-[state=checked]:bg-[#1a4d2e] data-[state=checked]:border-[#1a4d2e]"
                      />
                      <label
                        htmlFor={interest}
                        className="text-sm text-gray-700 cursor-pointer select-none"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4d2e]/30 focus:border-[#1a4d2e] transition-all resize-y min-h-[300px]"
                  placeholder="Please describe your project, requirements, or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white h-14 text-lg font-medium rounded-xl shadow-md transition-all hover:shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center pt-4">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;