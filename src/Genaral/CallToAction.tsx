import { MessagesSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <div className="w-full h-12 fixed bottom-4 left-0 flex gap-2 px-2 z-50 lg:hidden">
      <CallBtn />
      <WhatsappBtn />
    </div>
  );
};

export default CallToAction;

const WhatsappBtn = () => {
  return (
    <motion.a
      href="https://wa.me/916302133653"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-md px-3 py-1.5 hover:scale-105 transition-transform duration-300"
      animate={{
        y: [0, -2, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <MessagesSquare className="w-4 h-4" />
      <span className="montserrat text-sm">Whatsapp</span>
    </motion.a>
  );
};

const CallBtn = () => {
  return (
    <motion.a
      href="tel:916302133653"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold rounded-full shadow-md px-3 py-1.5 hover:scale-105 transition-transform duration-300"
      animate={{
        y: [0, -2, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <PhoneCall className="w-4 h-4" />
      <span className="montserrat text-sm">Call Now</span>
    </motion.a>
  );
};
