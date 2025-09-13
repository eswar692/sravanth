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
    <motion.footer className="relative text-white  py-12 ">
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
        className="mb-[200px] w-full relative grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto z-10 "
      >
        <div className="px-6">
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
          <div className="px-3">
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
            <h2 className="font-bold text-xl mb-3 montserrat">
              Why Choose Us?
            </h2>
            <ul className="text-sm space-y-2 open-sans">
              {whyChoose.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      {/* copy right and my contact */}
      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className="h-[200px] z-30 bg-gradient-to-r from-red-700 to-orange-600 text-white py-6 absolute bottom-0 left-0 right-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Column */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-montserrat text-sm montserrat font-semibold">
            Designed and Developed By Eswar
          </p>
          <a
            href="tel:+918886921826"
            className="text-lg font-bold font-roboto hover:underline hover:text-yellow-300 transition"
          >
            <button className="bg-white text-black py-2 px-4 rounded text-sm">
              +91 88869 21826
            </button>
          </a>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-right open-sans">
          <p className="text-sm font-opensans">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.chamundeswariastro.com"
              target="_blank"
              className="font-semibold hover:text-yellow-300 transition"
            >
              www.chamundeswariastro.com
            </a>{" "}
            – All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
