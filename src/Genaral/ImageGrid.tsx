import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://allproblemsolutionastro.com/images/Award-2.jpg",
  "https://allproblemsolutionastro.com/images/Award-3.jpg",
  "https://allproblemsolutionastro.com/images/Award-1.jpg",
  "https://breakupsolutionastro.com/index_files/a5.jpg",
];
const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[85%] max-w-[90%] rounded-2xl shadow-2xl border-4 border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGrid;
