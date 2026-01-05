import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Design = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Helmet>
        <title>Landscape Design | Kahf Greens</title>
      </Helmet>

      <section className="bg-[#f1f8e9] py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#1a4d2e] mb-6"
          >
            Landscape Design
          </motion.h1>

          <p className="text-gray-700 max-w-3xl mb-8">
            Our landscape design services combine aesthetics, functionality,
            sustainability, and long-term maintenance planning. Every design is
            customized for site conditions and client needs.
          </p>

          <ul className="space-y-3 text-gray-700 mb-10">
            <li>• Concept & master planning</li>
            <li>• Plant selection for UAE climate</li>
            <li>• Hardscape & softscape integration</li>
            <li>• Irrigation & drainage planning</li>
            <li>• 3D visualization (optional)</li>
          </ul>

          <Button
            onClick={() => navigate("/contact")}
            className="bg-[#1a4d2e] hover:bg-[#2d5f3f]"
          >
            Request Design Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Design;
