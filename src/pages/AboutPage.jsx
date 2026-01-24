import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Sun, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

// Replace these with your actual watercolor-style image URLs from our generations
const heroBg = 'https://example.com/watercolor-uae-nursery-team-building-green-facility.jpg'; // e.g. the wide nursery scene
const missionImg = 'https://sustainableurbandelta.com/wp-content/uploads/2022/03/Dubai-1364x764-c-default.jpg'; // e.g. oasis style

const stats = [
  { label: 'Years of Excellence', value: '20+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Satisfied Clients', value: '100%' },
  { label: 'Expert Team Members', value: '50+' },
];

const values = [
  { icon: Leaf, title: 'Sustainability', desc: 'Water-wise, eco-conscious solutions tailored to the UAE climate.' },
  { icon: ShieldCheck, title: 'Uncompromising Quality', desc: 'Premium, climate-tested plants and materials built to last.' },
  { icon: Users, title: 'Local Expertise', desc: 'Deep knowledge of desert horticulture and regional needs.' },
  { icon: Sun, title: 'Forward-Thinking Innovation', desc: 'Smart irrigation, vertical gardens & urban farming pioneers.' },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Kahf Greens | Sustainable Landscaping & Agriculture in the UAE</title>
        <meta
          name="description"
          content="Discover Kahf Greens – 20+ years of transforming UAE landscapes with sustainable, high-quality plants, irrigation solutions, and expert landscaping services."
        />
        <meta name="keywords" content="sustainable landscaping UAE, agriculture Dubai, green solutions Emirates, nursery Abu Dhabi" />
      </Helmet>

      {/* Hero Section – Watercolor background */}
      <section className="py-14 lg:py-20 relative min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={heroBg}
            alt="Watercolor illustration of lush UAE nursery and team creating sustainable green spaces"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" /> {/* Improves text readability */}

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Cultivating a Greener Tomorrow
              <br className="hidden sm:block" />
              <span className="text-emerald-300">in the Heart of the UAE</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100/90 mb-10 font-light max-w-3xl">
              For over two decades, Kahf Greens has been turning arid landscapes into thriving, sustainable oases — one thoughtful design, one resilient plant at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-emerald-950 hover:bg-emerald-50 font-semibold px-8 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/projects')}
                className="border-white text-white hover:bg-white/10 px-8 py-7 text-lg rounded-xl transition-all"
              >
                Explore Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={missionImg}
                  alt="Watercolor depiction of sustainable UAE gardening and desert greening"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-5">Our Mission</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To deliver exceptional, climate-resilient landscaping and agricultural solutions that enhance beauty, conserve resources, and create lasting value for homes, businesses, and communities across the UAE.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-5">Our Vision</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To lead the transformation of the Emirates into a greener, more sustainable region — where innovative design meets ecological harmony in every garden, rooftop, farm, and public space.
                </p>
              </div>

              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-5 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Partner with Us Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 lg:py-12 bg-emerald-50/50">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-5xl font-bold text-emerald-950 mb-4">Why Kahf Greens?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Rooted in expertise, driven by sustainability, and guided by uncompromising quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100/50"
              >
                <div className="inline-flex p-4 bg-emerald-100/50 rounded-xl text-emerald-700 mb-5">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <div className="text-5xl lg:text-6xl font-bold mb-3">{stat.value}</div>
                <div className="text-emerald-200 text-lg lg:text-xl font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;