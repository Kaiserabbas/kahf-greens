import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronDown,
  Building2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Compass,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain',
  'Other / Outside UAE',
];

const SERVICE_OPTIONS = [
  { id: 'villa-landscape', label: 'Villa Landscaping & Design' },
  { id: 'maintenance', label: 'Garden & Turf Maintenance (AMC)' },
  { id: 'balcony', label: 'Balcony Garden Packages' },
  { id: 'commercial', label: 'Commercial & Developer Landscaping' },
  { id: 'agriculture', label: 'Agriculture & Greenhouses' },
  { id: 'irrigation', label: 'Smart Irrigation & Water Saving' },
  { id: 'planters', label: 'Planters & Street Furniture' },
  { id: 'other', label: 'General / Product Inquiry' },
];

const FAQS = [
  {
    q: 'How fast can our team arrange a site visit or consultation?',
    a: 'For villas and commercial properties across Dubai and Sharjah, our specialists can typically conduct an on-site evaluation within 24 to 48 hours of your inquiry.',
  },
  {
    q: 'Do you provide end-to-end design, construction, and municipality approvals?',
    a: 'Yes. Kahf Greens handles complete turnkey projects — from concept design and 3D visualization, to Dubai Municipality / DEWA / SEWA approvals, earthworks, hardscaping, softscaping, and ongoing maintenance.',
  },
  {
    q: 'Can individual clients purchase planters, irrigation gear, or hydrogel textiles?',
    a: 'Absolutely. We supply both retail quantities for villa owners and bulk wholesale quantities for agricultural farms, nurseries, and landscape contractors.',
  },
  {
    q: 'Which regions of the UAE and GCC do you serve?',
    a: 'We operate across all seven Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ) with regional logistics support across the GCC for large-scale agricultural projects.',
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emirate: 'Dubai',
    selectedServices: ['villa-landscape'],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Live UAE Business Status (GST = UTC+4)
  const officeStatus = useMemo(() => {
    const now = new Date();
    // UTC time + 4 hours for UAE Standard Time
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const uaeDay = now.getUTCDay(); // 0 = Sun, 1 = Mon ... 6 = Sat

    const totalUaeMinutes = ((utcHours + 4) % 24) * 60 + utcMinutes;

    // Mon - Fri: 7:30 AM (450 mins) to 5:00 PM (1020 mins)
    // Sat: 7:30 AM (450 mins) to 2:00 PM (840 mins)
    // Sun: Closed
    if (uaeDay === 0) {
      return { isOpen: false, text: 'Closed Today (Sunday)', subtext: 'Opens Monday at 7:30 AM GST' };
    } else if (uaeDay >= 1 && uaeDay <= 5) {
      if (totalUaeMinutes >= 450 && totalUaeMinutes < 1020) {
        return { isOpen: true, text: 'Open Now', subtext: 'Office closes at 5:00 PM GST' };
      } else {
        return { isOpen: false, text: 'Currently Closed', subtext: 'Opens Mon–Sat at 7:30 AM GST' };
      }
    } else if (uaeDay === 6) {
      if (totalUaeMinutes >= 450 && totalUaeMinutes < 840) {
        return { isOpen: true, text: 'Open Today (Saturday)', subtext: 'Closes at 2:00 PM GST' };
      } else {
        return { isOpen: false, text: 'Currently Closed', subtext: 'Opens Monday at 7:30 AM GST' };
      }
    }
    return { isOpen: false, text: 'Closed', subtext: 'Opens Mon–Sat at 7:30 AM GST' };
  }, []);

  const handleServiceToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        // Keep at least one service selected
        if (prev.selectedServices.length === 1) return prev;
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== id) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Inquiry Submitted Successfully',
      description: 'Thank you for contacting Kahf Greens. Our specialist will call or message you promptly.',
      variant: 'success',
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      emirate: 'Dubai',
      selectedServices: ['villa-landscape'],
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleSendViaWhatsApp = () => {
    const selectedLabels = formData.selectedServices
      .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Kahf Greens,%0A%0AMy name is: ${encodeURIComponent(formData.name || 'Client')}%0APhone: ${encodeURIComponent(formData.phone || 'Provided via WhatsApp')}%0ALocation: ${encodeURIComponent(formData.emirate)}%0AInterested in: ${encodeURIComponent(selectedLabels || 'General Inquiry')}%0A%0AMessage:%0A${encodeURIComponent(formData.message || 'I would like to request a consultation and quotation.')}`;

    window.open(`https://wa.me/971565096880?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Contact Kahf Greens | Sustainable Landscaping & Agriculture Dubai</title>
        <meta
          name="description"
          content="Connect with Kahf Greens in Ras Al Khor, Dubai. Call +971 4 224 0733, WhatsApp +971 56 509 6880, or visit our showroom for landscaping, irrigation, and farming solutions."
        />
        <meta name="keywords" content="contact landscaping Dubai, garden contractor UAE, agriculture supplier Dubai, Kahf Greens phone number, landscaping quote UAE" />
        <link rel="canonical" href="https://kahfgreens.com/contact" />
        <meta property="og:title" content="Contact Kahf Greens | Landscaping & Agriculture in UAE" />
        <meta property="og:description" content="Reach our specialists in Ras Al Khor, Dubai for landscaping design, maintenance, and agriculture solutions." />
      </Helmet>

      {/* ---------------- HERO BANNER ---------------- */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="Luxury landscape in UAE"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            {/* Live Office Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-white/15 border border-white/20 mb-6 text-emerald-100">
              <span className={`w-2 h-2 rounded-full ${officeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{officeStatus.text}</span>
              <span className="opacity-60">•</span>
              <span className="opacity-90">{officeStatus.subtext}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
              Get in Touch with Our Specialists
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-light leading-relaxed">
              Whether you need a luxury villa garden transformation, commercial landscape design, smart irrigation, or agricultural supplies, we're ready to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- 4 QUICK CHANNELS ---------------- */}
      <section className="relative -mt-8 z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Direct Phone */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Call Our Office</h3>
            <p className="text-xs text-gray-500 mb-3">Instant connection with our support team</p>
            <div className="space-y-1">
              <a
                href="tel:+97142240733"
                className="block text-sm font-semibold text-[#1a4d2e] hover:underline"
              >
                +971 4 224 0733
              </a>
              <a
                href="tel:+971565096880"
                className="block text-sm font-semibold text-[#1a4d2e] hover:underline"
              >
                +971 56 509 6880
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#25D366] mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">WhatsApp Fast Track</h3>
            <p className="text-xs text-gray-500 mb-3">Send project photos or location pin</p>
            <a
              href="https://wa.me/971565096880?text=Hello%20Kahf%20Greens%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1fb657] hover:underline"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Email Inquiries</h3>
            <p className="text-xs text-gray-500 mb-3">Tenders, RFQs & formal proposals</p>
            <a
              href="mailto:info@kahfgreens.ae"
              className="block text-sm font-semibold text-[#1a4d2e] hover:underline truncate"
            >
              info@kahfgreens.ae
            </a>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#1a4d2e] mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Visit Showroom</h3>
            <p className="text-xs text-gray-500 mb-3">Ras Al Khor Ind. Area 2, Dubai</p>
            <a
              href="https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4d2e] hover:underline"
            >
              <span>View on Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- MAIN CONTACT SECTION ---------------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl">
              <div className="mb-8">
                <span className="text-xs font-semibold text-[#1a4d2e] uppercase tracking-wider bg-[#e8f5e9] px-3 py-1 rounded-full">
                  Fast Quotation Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Fill out the form below and an engineer will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mohammed Al Hashimi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>
                </div>

                {/* Email & Emirate */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Project Location / Emirate
                    </label>
                    <div className="relative">
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900 bg-white appearance-none cursor-pointer"
                      >
                        {EMIRATES.map((em) => (
                          <option key={em} value={em}>
                            {em}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Pills Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Services of Interest (Tap to select)
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {SERVICE_OPTIONS.map((item) => {
                      const isSelected = formData.selectedServices.includes(item.id);
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => handleServiceToggle(item.id)}
                          className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all ${
                            isSelected
                              ? 'bg-[#1a4d2e] text-white shadow-sm border border-[#1a4d2e]'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Project Details & Scope
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your property size, requirements, plant preferences, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4d2e] focus:ring-2 focus:ring-[#1a4d2e]/20 outline-none transition-all text-sm text-gray-900 resize-y min-h-[110px]"
                  />
                </div>

                {/* Dual Action Submit Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white h-13 py-3.5 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={18} />
                        Submit Inquiry Online
                      </span>
                    )}
                  </Button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase">
                      or prefer instant WhatsApp?
                    </span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb657] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Send Pre-Filled Inquiry via WhatsApp
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-600" /> Free Consultation
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-emerald-600" /> Fast Response Guarantee
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Office Info, Map & FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Showroom & Operating Hours Card */}
            <div className="bg-[#f7faf7] rounded-3xl p-6 sm:p-8 border border-emerald-100">
              <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-[#1a4d2e]" />
                Showroom & Office Hours
              </h3>

              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                  <span className="font-medium text-gray-600">Monday – Friday</span>
                  <span className="font-semibold text-gray-900">7:30 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                  <span className="font-medium text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">7:30 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed (Online inquiries open)</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-emerald-100 text-xs text-gray-600 space-y-1.5">
                <p className="font-semibold text-gray-900 flex items-center gap-1.5">
                  <Compass size={14} className="text-[#1a4d2e]" /> Ras Al Khor Industrial Area 2, Dubai
                </p>
                <p>Easy access from Ras Al Khor Road (E44) with ample on-site customer parking.</p>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="h-64 sm:h-72 w-full relative">
                <iframe
                  title="Kahf Greens Location - Ras Al Khor, Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.000!2d55.3575209!3d25.1696089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f678ecd0212b5%3A0xe1afca9da4d254e8!2sKahf%20Greens!5e0!3m2!1sen!2sae!4v1730000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <div>
                  <p className="text-xs font-semibold text-gray-900">Kahf Greens Showroom</p>
                  <p className="text-[11px] text-gray-500">Ras Al Khor, Dubai, UAE</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Ras+Al+Khor,+Dubai,+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#1a4d2e] hover:bg-[#2d5f3f] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Frequently Asked Questions
              </h3>
              <div className="divide-y divide-gray-100">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="py-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between gap-3 text-left font-semibold text-xs sm:text-sm text-gray-800 hover:text-[#1a4d2e] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180 text-[#1a4d2e]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-gray-600 leading-relaxed pt-2">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
