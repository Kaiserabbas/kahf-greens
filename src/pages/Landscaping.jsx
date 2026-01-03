import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Sun, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Landscaping = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '100%' },
    { label: 'Team Members', value: '50+' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us | Kahf Greens</title>
        <meta name="description" content="Learn about Kahf Greens, the leading sustainable landscaping and agricultural solution provider in the UAE." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#1a4d2e] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop" 
            alt="Green landscape pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cultivating a Greener Future
          </motion.h1>
          <p className="text-xl text-[#e8f5e9] max-w-3xl mx-auto">
            We are dedicated to transforming the UAE's landscape through sustainable agricultural practices and innovative green solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop" 
              alt="Sustainable gardening" 
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#1a4d2e]">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Kahf Greens, our mission is to provide high-quality, sustainable landscaping and agricultural products that thrive in the unique climate of the UAE. We bridge the gap between nature and urban living by offering solutions that are both aesthetically pleasing and environmentally responsible.
            </p>
            
            <h2 className="text-3xl font-bold text-[#1a4d2e] pt-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading partner for green spaces in the region, fostering a culture of sustainability where every home, office, and public space contributes to a healthier ecosystem.
            </p>

            <Button onClick={() => navigate('/contact')} className="bg-[#1a4d2e] hover:bg-[#2d5f3f] mt-4">
              Work With Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#f1f8e9] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a4d2e]">Why Choose Kahf Greens?</h2>
            <p className="text-gray-600 mt-4">Built on a foundation of trust, quality, and expertise.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products that save water and reduce waste." },
              { icon: ShieldCheck, title: "Quality", desc: "Premium materials tested for durability in harsh climates." },
              { icon: Users, title: "Expertise", desc: "Decades of combined experience in local agriculture." },
              { icon: Sun, title: "Innovation", desc: "Modern solutions for smart irrigation and urban farming." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-4 bg-[#e8f5e9] rounded-full text-[#1a4d2e] mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1a4d2e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#a5d6a7]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landscaping;