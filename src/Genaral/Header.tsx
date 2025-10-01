import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { company_name, phone_number } from "./secrete";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md">
      <div className="p-4 md:w-[80%] mx-auto flex flex-col gap-6">
        {/* Row 1: Title & Button */}
        <Title />

        {/* Row 2: Logo & Menu */}
        <Logo />
      </div>
      <TextMarquee />
    </header>
  );
};

export default Header;

const Title = () => (
  <div className="flex flex-row w-full md:flex-row items-center justify-between gap-4">
    <h5 className="montserrat font-semibold text-gray-800 text-center md:text-left">
      Any Problem? Connect with us
    </h5>
    <a
      href={`tel://${phone_number}`}
      className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 montserrat text-sm"
    >
      Talk To Astrologer
    </a>
  </div>
);

const Logo = () => (
  <div className="flex flex-row md:flex-row items-center justify-between gap-6">
    {/* Logo + Text */}
    <div className="flex items-center gap-4">
      <img
        src="https://t3.ftcdn.net/jpg/04/28/27/78/360_F_428277833_4XElmIIMRG8I9ydX1ethMo8QNzax3Loy.jpg"
        alt="Logo"
        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
      />
      <div className="flex flex-col text-center md:text-left">
        <h1 className="montserrat font-bold text-2xl md:text-3xl">
          {company_name} Center
        </h1>
        <p className="open-sans text-sm md:text-base text-gray-700 -mt-1">
          Since 1950
        </p>
        <p className="open-sans text-xs md:text-sm text-gray-600 mt-1 poppins">
          Best astrology services for accurate and personalized guidance
        </p>
      </div>
    </div>

    {/* Menu */}
    <Menu />
  </div>
);

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-6 font-medium text-gray-800 montserrat text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 border rounded bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 shadow-lg transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => (
  <div className="fixed top-0 left-0 w-full h-full z-50 bg-white p-8 flex flex-col justify-between shadow-2xl">
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="montserrat text-2xl font-bold">{company_name} Center</h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      <ul className="flex flex-col gap-4 font-medium montserrat text-lg">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <li className="hover:text-yellow-600 cursor-pointer">{item}</li>
          </Link>
        ))}
      </ul>
    </div>
    <p className="open-sans text-gray-700 text-sm mt-6">
      <b>{company_name} Center</b> - Trusted astrology services since 1950.
      Horoscope readings, match-making, career predictions, and spiritual
      remedies to guide you through life with confidence.
    </p>
  </div>
);

const TextMarquee = () => (
  <div className="overflow-hidden bg-black">
    <Marquee
      speed={50}
      className="whitespace-nowrap text-yellow-400 font-bold py-2 open-sans text-base md:text-lg"
    >
      Facing issues like Love Breakup, Love Problems, Marriage Disputes,
      Relationship Conflicts, or wanting to Get Your Love Back? Consult for
      Vashikaran solutions to attract your desired partner or resolve personal
      issues. Contact a trusted Astrologer today.
    </Marquee>
  </div>
);
