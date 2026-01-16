import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  TreeDeciduous,
  Apple,
  TreePine,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

/* ---------------- LOCAL IMAGES ---------------- */
// Outdoor Growing
import raisedGarden1 from "../../assets/Agriculture/planter pots/Raised Garden-1.jpg";
import raisedGarden2 from "../../assets/Agriculture/planter pots/Raised Garden-2.jpg";
import outdoorPlanter1 from "../../assets/Agriculture/planter pots/Outdoor Planter-1.jpg";
import outdoorPlanter2 from "../../assets/Agriculture/planter pots/Outdoor Planter-2.jpg";

// Vertical Farming
import stackablePot1 from "../../assets/Agriculture/planter pots/Stackable Pot-1.jpg";
import stackablePot2 from "../../assets/Agriculture/planter pots/Stackable Pot-2.jpg";
import hydroponic1 from "../../assets/Agriculture/planter pots/Hydroponic Container-1.jpg";
import hydroponic2 from "../../assets/Agriculture/planter pots/Hydroponic Container-2.jpg";

// Fruit Growing
import fruitTree1 from "../../assets/Agriculture/planter pots/Fruit Tree Pot-1.jpg";
import fruitTree2 from "../../assets/Agriculture/planter pots/Fruit Tree Pot-2.jpg";
import berryBush1 from "../../assets/Agriculture/planter pots/Berry Bush Container-1.jpg";
import berryBush2 from "../../assets/Agriculture/planter pots/Berry Bush Container-2.jpg";

// Large Trees
import rootBall1 from "../../assets/Agriculture/planter pots/Root Ball Container-1.jpg";
import rootBall2 from "../../assets/Agriculture/planter pots/Root Ball Container-2.jpg";
import matureTree1 from "../../assets/Agriculture/planter pots/Mature Tree Pot-1.jpg";
import matureTree2 from "../../assets/Agriculture/planter pots/Mature Tree Pot-2.jpg";

const PlanterPots = () => {
  const navigate = useNavigate();

  /* ---------------- CAROUSEL STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});

  /* ---------------- MODAL STATE ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = [
    {
      title: "Outdoor Growing",
      icon: TreeDeciduous,
      description: "Pots designed for outdoor cultivation in various climates.",
      products: [
        {
          name: "Raised Garden Beds",
          desc: "Elevated beds for better drainage and accessibility.",
          images: [raisedGarden1, raisedGarden2],
        },
        {
          name: "Outdoor Planters",
          desc: "Durable pots for outdoor use.",
          images: [outdoorPlanter1, outdoorPlanter2],
        },
      ],
    },
    {
      title: "Vertical Farming",
      icon: TreePine,
      description: "Specialized pots for vertical growing systems.",
      products: [
        {
          name: "Stackable Pots",
          desc: "Pots designed for vertical stacking.",
          images: [stackablePot1, stackablePot2],
        },
        {
          name: "Hydroponic Containers",
          desc: "Containers for hydroponic systems.",
          images: [hydroponic1, hydroponic2],
        },
      ],
    },
    {
      title: "Fruit Growing",
      icon: Apple,
      description: "Pots optimized for fruit tree cultivation.",
      products: [
        {
          name: "Fruit Tree Pots",
          desc: "Deep pots for fruit tree roots.",
          images: [fruitTree1, fruitTree2],
        },
        {
          name: "Berry Bush Containers",
          desc: "Containers for berry-producing plants.",
          images: [berryBush1, berryBush2],
        },
      ],
    },
    {
      title: "Tree Large",
      icon: TreePine,
      description: "Extra-large containers for mature trees.",
      products: [
        {
          name: "Root Ball Containers",
          desc: "Containers for large root systems.",
          images: [rootBall1, rootBall2],
        },
        {
          name: "Mature Tree Pots",
          desc: "Pots for established trees.",
          images: [matureTree1, matureTree2],
        },
      ],
    },
  ];

  /* ---------------- HELPERS ---------------- */
  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const nextModal = () =>
    setModalIndex((prev) => (prev + 1) % modalImages.length);

  const prevModal = () =>
    setModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );

  return (
    <div className="bg-white">
      <Helmet>
        <title>Planter Pots | Agriculture | Kahf Greens</title>
      </Helmet>

      {/* ---------------- HEADER ---------------- */}
      <section className="bg-[#1a4d2e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/agriculture")}
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Planter Pots
            </h1>
            <p className="max-w-2xl mx-auto text-[#e8f5e9]">
              Versatile planter pots for outdoor growing, vertical farming,
              fruit plants, and large trees.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, catIndex) => {
          const Icon = cat.icon;

          return (
            <section key={catIndex}>
              <div className="flex items-center gap-4 mb-8 border-b pb-4">
                <div className="p-3 bg-[#e8f5e9] rounded-full text-[#1a4d2e]">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a4d2e]">
                    {cat.title}
                  </h2>
                  <p className="text-gray-600">{cat.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cat.products.map((product, prodIndex) => {
                  const key = `${catIndex}-${prodIndex}`;
                  const activeIndex = carouselIndex[key] || 0;

                  return (
                    <div
                      key={prodIndex}
                      className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                      {/* IMAGE */}
                      <div className="relative h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={product.images[activeIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() =>
                            openModal(product.images, activeIndex)
                          }
                        />

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex((prev) => ({
                              ...prev,
                              [key]:
                                activeIndex === 0
                                  ? product.images.length - 1
                                  : activeIndex - 1,
                            }));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                        >
                          <ChevronLeft size={18} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex((prev) => ({
                              ...prev,
                              [key]:
                                (activeIndex + 1) %
                                product.images.length,
                            }));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>

                      {/* INFO */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {product.desc}
                        </p>
                        <Button
                          onClick={() => navigate("/contact")}
                          className="w-full bg-[#1a4d2e] text-white hover:bg-white hover:text-[#1a4d2e] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------- FULLSCREEN MODAL ---------------- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <img
              src={modalImages[modalIndex]}
              alt="Full view"
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={prevModal}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextModal}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanterPots;
