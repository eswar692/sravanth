import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://bharatbestastrologers.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-12.06.23_deb83635-300x200.jpg",
  "https://bharatbestastrologers.com/wp-content/uploads/2025/07/certificate1-300x222.jpg",
  "https://allproblemsolutionastro.com/images/Award-2.jpg",
  "https://allproblemsolutionastro.com/images/Award-3.jpg",
  "https://allproblemsolutionastro.com/images/Award-1.jpg",
  "https://ravishankarguruji.com/storage/2025/02/1sa.jpeg",
  "https://breakupsolutionastro.com/index_files/a5.jpg",
  "https://breakupsolutionastro.com/index_files/a6.jpg",
  "https://breakupsolutionastro.com/index_files/a7.jpg",
  "https://breakupsolutionastro.com/index_files/a8.jpg",
  "https://static.wixstatic.com/media/b119e7_5fe5cb8d42514fd9a7f30e7c90b87d74~mv2.jpeg",

  "https://chakrasiddhijyothishyalaya.com/wp-content/uploads/2024/06/2.jpg",
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(src)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
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
