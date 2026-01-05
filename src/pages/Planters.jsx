import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Planters = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Helmet>
        <title>Planters & Styling | Kahf Greens</title>
      </Helmet>

      <section className="py-20 container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#1a4d2e] mb-6"
        >
          Planters & Green Styling
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mb-10">
          We supply and style high-quality planters for villas, hotels, offices,
          malls, and public spaces — combining durability with modern design.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
              Decorative Planters
            </h3>
            <p className="text-gray-600">
              Fiberstone, ceramic, plastic, and large outdoor planters in various
              finishes and sizes.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
              Indoor & Outdoor Styling
            </h3>
            <p className="text-gray-600">
              Plant selection, placement, and visual balance for functional and
              aesthetic impact.
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/contact")}
          className="bg-[#556b2f] hover:bg-[#6b8e23]"
        >
          Request Planter Proposal
        </Button>
      </section>
    </div>
  );
};

export default Planters;
