import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Cog,
  TreePine,
  Wrench,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import trays1 from "../../assets/agriculture/machinery/Trays Transport 1.jpg";
import trays2 from "../../assets/agriculture/machinery/Trays Transport 2.jpg";
import trays3 from "../../assets/agriculture/machinery/Trays Transport 3.jpg";
import trays4 from "../../assets/agriculture/machinery/Trays Transport 4.jpg";

const Machinery = () => {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: "Pots Transportation",
      icon: Truck,
      description: "Equipment for transporting pots and planters.",
      products: [
        {
          name: "Pot Transport Carts",
          desc: "Wheeled carts for moving pots efficiently.",
          images: ["https://source.unsplash.com/800x600/?pot+transport+carts"],
        },
        {
          name: "Automated Pot Movers",
          desc: "Mechanized systems for pot transportation.",
          images: ["https://source.unsplash.com/800x600/?automated+pot+movers"],
        },
      ],
    },
    {
      title: "Tray Transportation System",
      icon: Cog,
      description: "Systems for transporting seedling trays.",
      products: [
        {
          name: "Tray Conveyors",
          desc: "Conveyor systems for tray movement.",
          images: [ trays1, trays2, trays3, trays4 ],
        },
      ],
    },
    {
      title: "Greenhouse Machinery",
      icon: TreePine,
      description: "Specialized machinery for greenhouse operations.",
      products: [
        {
          name: "Ventilation Systems",
          desc: "Automated ventilation for greenhouses.",
          images: ["https://source.unsplash.com/800x600/?greenhouse+ventilation"],
        },
        {
          name: "Climate Control Units",
          desc: "Systems for maintaining greenhouse climate.",
          images: ["https://source.unsplash.com/800x600/?climate+control+units"],
        },
      ],
    },
    {
      title: "Tree Lifting & Transportation",
      icon: Wrench,
      description: "Equipment for lifting and transporting trees.",
      products: [
        {
          name: "Tree Spades",
          desc: "Machines for digging and transplanting trees.",
          images: ["https://source.unsplash.com/800x600/?tree+spades"],
        },
        {
          name: "Tree Cranes",
          desc: "Cranes for lifting large trees.",
          images: ["https://source.unsplash.com/800x600/?tree+cranes"],
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
        <title>Machinery | Agriculture | Kahf Greens</title>
        <meta
          name="description"
          content="Explore our agricultural machinery including transportation systems and specialized equipment."
        />
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
              Machinery
            </h1>
            <p className="max-w-2xl mx-auto text-[#e8f5e9]">
              Advanced machinery for efficient agricultural operations.
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

                        {product.images.length > 1 && (
                          <>
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
                          </>
                        )}
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

      {/* ---------------- MODAL ---------------- */}
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

            {modalImages.length > 1 && (
              <>
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
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Machinery;
