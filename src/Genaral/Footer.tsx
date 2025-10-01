import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

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
    <motion.footer className="relative text-white  pt-5 pb-15 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-90 "
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/77/87/96/778796657af9ce12a7d76377e80a97da.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-[100px]  w-[80%] relative grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto "
      >
        {/* About */}
        <div className="space-y-3">
          <h2 className="font-extrabold text-3xl mb-2 montserrat text-red-700 tracking-wide drop-shadow-md">
            About {company_name}
          </h2>
          <p className="text-base open-sans text-white leading-relaxed">
            <b className="text-red-600">{company_name}</b> is ranked as one of
            South India's Top 5 Astrologers. Using exceptional astrological
            skills, Dr. Sri <span className="font-semibold">{person_name}</span>
            helps clients understand themselves, their goals, aspirations,
            constraints, and potential.
          </p>
        </div>

        {/* Contact */}
        <div className="px-3 space-y-2">
          <h2 className="font-bold text-xl mb-2 montserrat text-yellow-600 tracking-wide">
            Contact Us
          </h2>
          <p className="open-sans text-white flex items-center gap-2">
            📞 <span className="font-medium ">{phone_number}</span>
          </p>
          <p className="open-sans text-white flex items-center gap-2">
            💬 <span className="font-medium ">{whatsapp_number}</span>
          </p>
          <p className="mt-2 font-bold montserrat text-yellow-300 text-lg drop-shadow-sm">
            Best Astro Guidance
          </p>
          <p className="text-sm open-sans  tracking-wide uppercase">
            AUTHENTIC | RELIABLE | GENUINE | SUPPORTIVE
          </p>
        </div>

        {/* Services */}
        <div className="space-y-2">
          <h2 className="font-bold text-xl mb-2 montserrat text-red-600 tracking-wide">
            Our Services
          </h2>
          <ul className="text-sm space-y-2 open-sans ">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div className="space-y-2">
          <h2 className="font-bold text-xl mb-2 montserrat text-red-600 tracking-wide">
            Why Choose Us?
          </h2>
          <ul className="text-sm space-y-2 open-sans ">
            {whyChoose.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      {/* copy right and my contact */}
      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className="h-auto md:h-[80px] z-300 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white py-4 absolute bottom-0 left-0 right-0 shadow-xl animate-gradient-x">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Column */}
        <div className="mb-4 md:mb-0 text-center md:text-left flex flex-col md:flex-row gap-3 items-center">
          <p className="font-montserrat text-sm font-semibold text-white drop-shadow-lg">
            Designed & Developed with ✨ by
          </p>
          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            className="transition transform hover:scale-110"
          >
            <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-xl border-2 border-yellow-400 hover:scale-105 hover:shadow-yellow-400/70 transition-all">
              Eswar – Pro Daddy Agency
            </button>
          </a>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-right open-sans">
          <p className="text-sm text-white font-medium drop-shadow-md">
            © {new Date().getFullYear()}{" "}
            <a
              href={website_url}
              target="_blank"
              className="font-semibold hover:text-yellow-200 transition-colors"
            >
              {company_name}
            </a>{" "}
            – All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
