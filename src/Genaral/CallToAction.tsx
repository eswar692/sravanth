import { MessagesSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { phone_number, whatsapp_number } from "./secrete";

const CallToAction = () => {
  return (
    <div className="w-full h-12 fixed bottom-4 left-0 flex gap-2 px-4 z-50 lg:hidden">
      <CallBtn />
      <WhatsappBtn />
    </div>
  );
};

export default CallToAction;

const WhatsappBtn = () => {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp_number}?text=Hello%20Astro%20Honest%20Center`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold rounded-full shadow-lg px-4 py-2 text-sm montserrat hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50"
      animate={{
        y: [0, -4, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <MessagesSquare className="w-5 h-5 text-white" />
      Whatsapp
    </motion.a>
  );
};

const CallBtn = () => {
  return (
    <motion.a
      href={`tel:${phone_number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold rounded-full shadow-lg px-4 py-2 text-sm montserrat hover:scale-110 transition-transform duration-300 hover:shadow-yellow-400/60"
      animate={{
        y: [0, -4, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <PhoneCall className="w-5 h-5 text-white" />
      Call Now
    </motion.a>
  );
};
