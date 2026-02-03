import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../components/ui/use-toast';
import { Input } from '../@/components/ui/input';
import { Label } from '../@/components/ui/label';
import { Textarea } from '../@/components/ui/textarea';

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
  const [showQuickContact, setShowQuickContact] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowQuickContact(latest > 300); // show after scrolling ~300px
  });

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

    // Simulate API call (replace with real fetch/axios + Formspree/Netlify/etc.)
    await new Promise((resolve) => setTimeout(resolve, 1400));

    toast({
      title: "Message Sent Successfully",
      description: "Thank you! Our team will respond within 24-48 hours.",
      variant: "success",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Contact Kahf Greens | Premium Landscaping & Agriculture in UAE</title>
        <meta
          name="description"
          content="Get in touch with Kahf Greens for expert landscaping, irrigation, planters, and sustainable agriculture solutions in Dubai. Call, WhatsApp, email or visit us in Ras Al Khor."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Luxury sustainable landscape in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Let's Create Something <span className="text-emerald-300">Green</span> Together
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/90 max-w-4xl mx-auto font-light">
              Reach out today — our team is ready to bring your landscaping or agricultural vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-12 lg:space-y-16"
          >
            <div className="space-y-10 lg:space-y-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-950 mb-8">
                Get in Touch
              </h2>

              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-100/60 p-5 rounded-2xl text-emerald-700 flex-shrink-0 transition-transform group-hover:scale-110">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ras Al Khor Industrial Area 2<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-100/60 p-5 rounded-2xl text-emerald-700 flex-shrink-0 transition-transform group-hover:scale-110">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Call Us</h3>
                  <div className="space-y-2 text-gray-700 text-lg">
                    <a href="tel:+971565096880" className="hover:text-emerald-700 transition-colors">
                      +971 56 509 6880
                    </a>
                    <br />
                    <a href="tel:+97442240733" className="hover:text-emerald-700 transition-colors">
                      +974 4 224 0733
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-6 group">
                <div className="bg-[#DCF8C6]/80 p-5 rounded-2xl text-[#25D366] flex-shrink-0 transition-transform group-hover:scale-110">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-700 mb-4">
                    Instant answers from our team – 9 AM to 6 PM
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white gap-2"
                    asChild
                  >
                    <a
                      href="https://wa.me/971565096880"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} /> Chat Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="bg-emerald-100/60 p-5 rounded-2xl text-emerald-700 flex-shrink-0 transition-transform group-hover:scale-110">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:info@kahfgreens.ae"
                    className="text-emerald-700 hover:underline text-lg transition-colors"
                  >
                    info@kahfgreens.ae
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-emerald-100/50 h-80 md:h-[500px]">
              <iframe
                title="Kahf Greens Location - Ras Al Khor, Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.000!2d55.3575209!3d25.1696089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f678ecd0212b5%3A0xe1afca9da4d254e8!2sKahf%20Greens!5e0!3m2!1sen!2sae!4v1730000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border border-emerald-100/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-10">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-700 font-medium block">
                  I'm interested in (select all that apply):
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleCheckboxChange(checked, interest)}
                        className="border-emerald-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 h-5 w-5"
                      />
                      <Label
                        htmlFor={interest}
                        className="text-gray-700 cursor-pointer select-none text-sm md:text-base"
                      >
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Your Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={12}
                  placeholder="Tell us about your project, requirements, or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/30 resize-y min-h-[160px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center pt-4">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact Floating Buttons (new component) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showQuickContact ? 1 : 0, y: showQuickContact ? 0 : 20 }}
        transition={{ duration: 0.4 }}
        className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 ${showQuickContact ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <a
          href="https://wa.me/971565096880"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href="tel:+971565096880"
          className="bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Call us"
        >
          <Phone size={28} />
        </a>
      </motion.div>
    </div>
  );
};

export default ContactPage;