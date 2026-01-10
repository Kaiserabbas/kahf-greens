import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Leaf, PencilRuler, Flower2, ChevronLeft } from "lucide-react";

const LandscapingOverview = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Button
            onClick={() => navigate('/landscaping')}
            variant="outline"
            className="mb-6 border-white text-white hover:bg-white hover:text-[#1a4d2e]"
          >
            <ChevronLeft className="mr-2" size={16} />
            Back to Landscaping
          </Button>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transforming Outdoor Spaces
          </motion.h1>
          <p className="text-xl text-[#e8f5e9] max-w-2xl mx-auto">
            End-to-end landscaping solutions designed for beauty, sustainability,
            and UAE climate conditions.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: PencilRuler,
              title: "Landscape Design",
              desc: "Creative, functional, and sustainable landscape concepts.",
              action: () => navigate("/landscaping/design"),
            },
            {
              icon: Flower2,
              title: "Planters & Styling",
              desc: "Decorative and functional planters for indoor & outdoor spaces.",
              action: () => navigate("/landscaping/planters"),
            },
            {
              icon: Leaf,
              title: "Maintenance",
              desc: "Long-term care to keep landscapes healthy and vibrant.",
              action: () => navigate("/contact"),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <item.icon size={40} className="mx-auto text-[#1a4d2e] mb-4" />
              <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <Button className="bg-[#1a4d2e]" onClick={item.action}>
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandscapingOverview;
