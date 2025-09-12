import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useInViewOnce from "./InView";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Love Expert",
    "Astrology Specialist",
    "Love Problem Expert",
    "Love Marriage Approval",
    "Quick Rishta Marriage",
  ];

  const whyChoose = [
    "Relationship Problem",
    "Husband-Wife Dispute Specialist",
    "Happy Clients",
    "Online Astrologer",
    "Visa Problems",
  ];

  return (
    <motion.footer className="relative text-white px-6 py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-90"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/bf/e8/53/bfe85357e954b496d9797add664907d6.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto z-10"
      >
        {/* About */}
        <div>
          <h2 className="font-bold text-xl mb-3 montserrat">
            About Chamundeswari Astrology Center
          </h2>
          <p className="text-sm open-sans leading-relaxed">
            <b>Chamundeswari Astrology Center</b> is ranked as one of South
            India's Top 5 Astrologers. Using exceptional astrological skills,
            Dr. Sri Sanjeev Swamy helps clients understand themselves, their
            goals, aspirations, constraints, and potential.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-xl mb-3 montserrat">Contact Us</h2>
          <p className="open-sans">📞 91 63021 33653</p>
          <p className="open-sans">💬 +91 63021 33653</p>
          <p className="mt-2 font-bold text-yellow-500 montserrat">
            Best Astro Guidance
          </p>
          <p className="text-sm open-sans">
            AUTHENTIC | RELIABLE | GENUINE | SUPPORTIVE
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-xl mb-3 montserrat">Our Services</h2>
          <ul className="text-sm space-y-2 open-sans">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div>
          <h2 className="font-bold text-xl mb-3 montserrat">Why Choose Us?</h2>
          <ul className="text-sm space-y-2 open-sans">
            {whyChoose.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.footer>
  );
}
