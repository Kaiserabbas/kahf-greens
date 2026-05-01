import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BalconyGallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import all images from the balcony folder
    const loadImages = async () => {
      try {
        // Use import.meta.glob to load all images from the balcony folder
        const imageModules = import.meta.glob(
          "/src/assets/Landscaping/balcony/*.{jpg,jpeg,png,gif,webp,avif}",
          { eager: true }
        );
        
        const loadedImages = Object.entries(imageModules)
          .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Sort by filename for consistent order
          .map(([, module]) => ({
            src: module.default,
            alt: "Balcony Gallery Image",
          }));
        
        setImages(loadedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Helmet>
        <title>Balcony Gallery - Kahf Greens UAE</title>
        <meta name="description" content="Explore our beautiful balcony garden designs and inspirations" />
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden bg-black">
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate(-1)}
          className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-200"
          aria-label="Close gallery"
        >
          <X size={24} className="text-white" />
        </motion.button>

        {/* Loading State */}
        {isLoading && (
          <div className="flex h-screen w-full items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 border-4 border-white/30 border-t-white rounded-full"
            />
          </div>
        )}

        {/* Empty State */}
        {!isLoading && images.length === 0 && (
          <div className="flex h-screen w-full items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-white mb-4">No images yet</p>
              <p className="text-gray-400">Add images to the balcony folder to get started</p>
            </div>
          </div>
        )}

        {/* Masonry Gallery */}
        {!isLoading && images.length > 0 && (
          <div className="w-full p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg group relative bg-gray-900"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="text-white"
                    >
                      <ZoomIn size={32} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw]"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-auto w-full object-contain rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-200"
                aria-label="Close lightbox"
              >
                <X size={20} className="text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default BalconyGallery;
