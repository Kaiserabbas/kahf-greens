import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Mohammed Al Rashid',
    role: 'Villa Owner',
    location: 'Palm Jumeirah, Dubai',
    rating: 5,
    text: "Kahf Greens transformed our villa garden into a stunning oasis. Their team understood our vision perfectly and delivered a water-efficient landscape that thrives in Dubai's heat. The irrigation system they installed has cut our water usage by nearly half.",
    category: 'Landscaping',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Farm Manager',
    location: 'Al Ain, Abu Dhabi',
    rating: 5,
    text: "We sourced our greenhouse cooling pads and shade netting from Kahf Greens. Exceptional quality — the cooling efficiency improvement was immediate. Their technical team's knowledge of UAE agricultural requirements is unmatched in the region.",
    category: 'Agriculture',
  },
  {
    name: 'Sarah Okoye',
    role: 'Facilities Director',
    location: 'Business Bay, Dubai',
    rating: 5,
    text: "We engaged Kahf Greens for our commercial office tower's outdoor planters and green wall installation. The project was completed on time, on budget, and the quality of the plants and craftsmanship is outstanding. Highly recommended for commercial projects.",
    category: 'Commercial',
  },
  {
    name: 'Khalid Al Mansoori',
    role: 'Government Project Manager',
    location: 'Sharjah',
    rating: 5,
    text: "Kahf Greens supplied and installed the planter bags and irrigation for our urban greening initiative across 3 districts. Their UAE-wide logistics capability and commitment to deadlines made them the ideal partner for a government-scale project.",
    category: 'Government',
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Community Manager',
    location: 'Al Reem Island, Abu Dhabi',
    rating: 5,
    text: "Our residential compound had chronic overwatering issues damaging the lawns. Kahf Greens retrofitted the entire community with drip irrigation and smart controllers across 40+ villas. Six months later, our landscaping bills are down and the grass has never looked healthier.",
    category: 'Residential Compound',
  },
  {
    name: 'Rajesh Menon',
    role: 'Operations Manager',
    location: 'Jebel Ali, Dubai',
    rating: 5,
    text: "Kahf Greens has been our go-to supplier for bulk potting soil, fertilizers, and nursery pots for over a year now. Consistent stock availability and on-time deliveries to our retail outlet have made them a reliable partner, even during peak spring season demand.",
    category: 'Wholesale Supply',
  },
  {
    name: 'Noura Al Suwaidi',
    role: 'Principal',
    location: 'Al Khawaneej, Dubai',
    rating: 5,
    text: "We hired Kahf Greens to design and build an outdoor learning garden for our students, including raised planter beds and a small shaded seating area. They worked around our school schedule and even trained our facilities staff on basic plant care afterward. The kids love it.",
    category: 'Education',
  },
  {
    name: 'Omar Al Farsi',
    role: 'General Manager',
    location: 'Ras Al Khaimah',
    rating: 5,
    text: "For our resort's pool deck renovation, Kahf Greens handled the full landscape package — palm relocation, tropical planting beds, and a new drip irrigation loop tied into our existing system. Their crew worked around guest hours without a single complaint. The results exceeded what we pictured in the design phase.",
    category: 'Hospitality',
  },
  {
    name: 'Layla Ibrahim',
    role: 'Property Manager',
    location: 'Mirdif, Dubai',
    rating: 4,
    text: "We've had Kahf Greens on an annual maintenance contract for our residential building's common gardens for two seasons now. Pruning, pest control, and seasonal replanting are handled reliably each month. Only minor gripe is scheduling around Ramadan gets a bit tight, but they always communicate ahead of time.",
    category: 'Maintenance Contract',
  },
  {
    name: 'Yusuf Karimov',
    role: 'Site Engineer',
    location: 'Dubai Investment Park',
    rating: 5,
    text: "Kahf Greens supplied over 12,000 sqm of artificial turf plus the full sub-base preparation for a logistics park landscaping package. They coordinated closely with our civil contractor to avoid clashes with drainage works, and the final finish passed inspection on the first attempt.",
    category: 'Turf Supply & Installation',
  },
  {
    name: 'Aisha Al Blooshi',
    role: 'Homeowner',
    location: 'Al Barsha, Dubai',
    rating: 5,
    text: "I called Kahf Greens after two other companies failed to fix our dying front lawn. Their agronomist actually did a soil test before recommending anything, found our soil salinity was the real problem, and treated it properly before replanting. Three months in, the grass is finally thriving.",
    category: 'Lawn Care',
  },
  {
    name: 'Daniel Wong',
    role: 'Restaurant Owner',
    location: 'JBR, Dubai',
    rating: 5,
    text: "We wanted a living herb wall for our restaurant's open kitchen so guests could see fresh basil and mint growing. Kahf Greens designed a vertical hydroponic system that fits our tight space and still lets our chefs harvest daily. It's become a genuine talking point with customers.",
    category: 'Vertical Gardens',
  },
  {
    name: 'Mariam Al Nuaimi',
    role: 'HOA Board Member',
    location: 'Arabian Ranches, Dubai',
    rating: 4,
    text: "Kahf Greens redesigned the entry roundabout and community park irrigation for our neighborhood, moving us from spray heads to a mostly drip-based system. Water savings have been noticeable on our utility bills. Installation took a bit longer than the original timeline due to permit delays, but the finished work was worth the wait.",
    category: 'Community Landscaping',
  },
  {
    name: 'Tariq Al Habsi',
    role: 'Procurement Officer',
    location: 'Muscat, Oman',
    rating: 5,
    text: "We import our shade netting and greenhouse film from Kahf Greens for our cross-border agricultural operations. Their export documentation is always accurate and shipments have cleared customs without delay every time. For a supplier outside our home market, that reliability matters a lot.",
    category: 'Export & Cross-Border Supply',
  },
  {
    name: 'Hessa Al Marri',
    role: 'Interior Designer',
    location: 'Downtown Dubai',
    rating: 5,
    text: "I regularly bring Kahf Greens in as a subcontractor for the biophilic elements in my residential projects — moss walls, indoor planters, and custom plant stands. They understand low-light indoor conditions well and always recommend species that will actually survive inside a client's home, not just look good on install day.",
    category: 'Interior Plantscaping',
  },
  {
    name: 'Peter Nakamura',
    role: 'Warehouse Manager',
    location: 'Dubai South',
    rating: 5,
    text: "Kahf Greens delivered and installed windbreak hedging around our open storage yard to reduce dust and sand drift. They recommended species suited to our exposed site conditions, and after one full summer, the hedge has established well and the dust issue has visibly improved.",
    category: 'Industrial Landscaping',
  },
  {
    name: 'Reem Al Qassimi',
    role: 'Event Coordinator',
    location: 'Fujairah',
    rating: 4,
    text: "We rented large potted palms and floral arrangements from Kahf Greens for a two-day outdoor corporate event. Everything arrived on schedule and in great condition, and their team handled setup and same-day teardown efficiently. Would have liked a slightly wider plant variety to choose from, but overall a smooth experience.",
    category: 'Event Rentals',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-[#D4A843] text-[#D4A843]' : 'text-gray-300'}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);
  const remainingCount = testimonials.length - initialCount;

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (showAll) {
      // Smooth scroll back to testimonials top when collapsing
      const section = document.getElementById('testimonials-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="testimonials-section"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5f7f2] to-white overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#1a4d2e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Verified UAE Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4d2e] tracking-tight mb-4">
            Trusted by UAE's Leading Developers,<br className="hidden md:block" /> Farms & Homeowners
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            From private luxury villas and resorts to commercial agricultural operations — hear directly from our clients across the Emirates.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
            <span>Verified Client Reviews Across UAE</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">4.9 / 5.0 Average Rating</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {displayedTestimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx >= initialCount ? (idx - initialCount) * 0.05 : 0 }}
                className="relative bg-white rounded-3xl p-7 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
                  <Quote size={48} className="text-[#1a4d2e] fill-[#1a4d2e]" />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-[#1a4d2e] text-xs font-bold rounded-full uppercase tracking-wide border border-emerald-100">
                      {t.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50/70 px-2 py-0.5 rounded-md">
                      <CheckCircle2 size={12} />
                      <span>Verified UAE Client</span>
                    </div>
                  </div>

                  <StarRating rating={t.rating} />

                  <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / Show Less Button */}
        <div className="mt-12 text-center">
          <Button
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 px-8 py-6 rounded-2xl bg-white hover:bg-emerald-50 text-[#1a4d2e] font-bold text-sm sm:text-base border-2 border-emerald-200 hover:border-[#1a4d2e] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? (
              <>
                <span>Show Fewer Reviews</span>
                <ChevronUp size={18} className="text-[#1a4d2e]" />
              </>
            ) : (
              <>
                <span>See More Client Reviews</span>
                <ChevronDown size={18} className="text-[#1a4d2e]" />
              </>
            )}
          </Button>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mt-10 pt-8 border-t border-gray-100"
        >
          <p className="text-slate-600 text-sm">
            Join 100+ satisfied clients across the UAE •{' '}
            <Link to="/contact" className="text-[#1a4d2e] font-bold hover:underline">
              Request your free consultation today →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
