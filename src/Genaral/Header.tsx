import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { company_name, phone_number } from "./secrete";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-300 shadow-2xl">
      <div className="p-4 md:w-[85%] mx-auto flex flex-col gap-6">
        <Title />
        <Logo />
      </div>
      <TextMarquee />
    </header>
  );
};

export default Header;

const Title = () => (
  <div className="flex flex-row w-full md:flex-row items-center justify-between gap-4">
    <h5 className="montserrat font-semibold text-gray-200 text-center md:text-left text-sm md:text-base">
      ✨ Any Problem? Connect with us
    </h5>
    <a
      href={`tel://${phone_number}`}
      className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-full shadow-xl transition-transform duration-300 hover:scale-105 montserrat text-sm"
    >
      Call Now
    </a>
  </div>
);

const Logo = () => (
  <div className="flex flex-row md:flex-row items-center justify-between gap-6">
    {/* Logo + Text */}
    <div className="flex items-center gap-4">
      <img
        src="https://i.pinimg.com/1200x/2c/a6/9a/2ca69a5542fc313ee2f792430ad54108.jpg"
        alt="Logo"
        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-2xl border-4 border-yellow-500"
      />
      <div className="flex flex-col text-center md:text-left">
        <h1 className="montserrat font-bold text-2xl md:text-3xl text-yellow-400 drop-shadow-lg">
          {company_name} Center
        </h1>
        <p className="open-sans text-sm md:text-base text-gray-300 -mt-1 italic">
          Since 1950
        </p>
        <p className="open-sans text-xs md:text-sm text-gray-200 mt-1 poppins max-w-[280px]">
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
      <ul className="hidden lg:flex gap-8 font-medium text-gray-100 montserrat text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 border rounded bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative group cursor-pointer">
    <span className="transition-colors duration-300 group-hover:text-yellow-400">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => (
  <div className="fixed top-0 left-0 w-full h-full z-50 bg-gradient-to-b from-purple-900 to-purple-800 p-8 flex flex-col justify-between shadow-2xl">
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="montserrat text-2xl font-bold text-yellow-400">
          {company_name} Center
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      <ul className="flex flex-col gap-6 font-medium montserrat text-lg text-gray-100">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <li className="hover:text-yellow-400 cursor-pointer">{item}</li>
          </Link>
        ))}
      </ul>
    </div>
    <p className="open-sans text-gray-300 text-sm mt-6">
      <b className="text-yellow-400">{company_name} Center</b> - Trusted
      astrology services since 1950. Horoscope readings, match-making, career
      predictions, and spiritual remedies to guide you through life with
      confidence.
    </p>
  </div>
);

const TextMarquee = () => (
  <div
    className="overflow-hidden
 bg-gradient-to-l from-green-300 via-blue-300 to-orange-300







"
  >
    <Marquee
      speed={50}
      className="whitespace-nowrap text-black  py-2 open-sans text-md md:text-base tracking-wide"
    >
      🌙 Facing issues like Love Breakup, Marriage Disputes, Relationship
      Conflicts, or wanting to Get Your Love Back? 🔮 Consult for Vashikaran
      solutions to attract your desired partner or resolve personal issues.
      Contact a trusted Astrologer today.
    </Marquee>
  </div>
);
