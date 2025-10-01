import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import ImageGrid from "../Genaral/ImageGrid";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";

const Home = () => {
  return (
    <div className="flex flex-col  bg-orange-100 w-full h-full">
      <Carousel />
      <ImageGrid />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Lost Love Back",
      desc: "Available on both WhatsApp and Call. One call can change your life.",
      img: "https://i.pinimg.com/736x/24/8a/5b/248a5bf488a9a1fa22c0f8f2a14fb16c.jpg", // replace with your image
    },
    {
      title: "Marriage Problem Solution",
      desc: "Solve disputes and misunderstandings with astrology guidance.",
      img: "https://i.pinimg.com/1200x/c1/2b/fc/c12bfc17ac4630ade4f0e1e4a1f819e2.jpg",
    },
    {
      title: "Vashikaran Specialist",
      desc: "Attract your desired partner with trusted vashikaran solutions.",
      img: "https://i.pinimg.com/736x/05/d1/71/05d171d8361a2e85d98faafd5df9020e.jpg",
    },
    {
      title: "Education Remedies",
      desc: "Personalized astrological remedies and puja to improve concentration, memory and academic success. Suitable for students preparing for exams, entrance tests, or academic growth.",
      img: "https://i.pinimg.com/736x/73/49/66/73496669119b34a1dd1ab91ffd626f68.jpg",
    },
    {
      title: "Vastu Pooja & Home Harmony",
      desc: "Vastu analysis and corrective poojas to balance energy at home or workplace — remove blockages, enhance prosperity, and bring peace to the living space.",
      img: "https://i.pinimg.com/1200x/22/7a/73/227a73ecafa7e4bc8f6b256083a0e7c2.jpg",
    },
    {
      title: "Career & Job Guidance",
      desc: "Astrological career mapping, timely remedies and rituals to unlock career opportunities, interview luck, job changes and business growth.",
      img: "https://i.pinimg.com/736x/1e/a3/1c/1ea31c29817c2b9435c0e29040497a47.jpg",
    },
    {
      title: "Health & Wellbeing Support",
      desc: "Holistic horoscope-based suggestions and gentle remedial poojas to support physical and mental wellbeing. Not a substitute for medical care — recommended alongside professional treatment.",
      img: "https://i.pinimg.com/1200x/30/05/93/300593ddfebda3597cfb52632ce93e4e.jpg",
    },
    {
      title: "Samboga Vashikaran (Relationship Attraction)",
      desc: "Specialized vashikaran remedies aimed at rekindling attraction and emotional closeness. Provided carefully with ethical guidance and clear expectations.",
      img: "https://i.pinimg.com/736x/0b/b7/91/0bb7917954d720df78a4f71c085c46ff.jpg",
    },
    {
      title: "Family Vashikaran & Harmony",
      desc: "Remedies and rituals to ease family disputes, restore trust and harmony in household relationships while respecting everyone's wellbeing and consent.",
      img: "https://i.pinimg.com/736x/ad/7b/99/ad7b9936b889c3abaafe22c732867d86.jpg",
    },
  ];

  const reverse = [...problems].reverse();
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-8 w-full px-2 md:max-w-7xl md:mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {reverse.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col items-center 
      bg-gradient-to-tr from-red-700 via-pink-600 to-orange-400 
      rounded-3xl shadow-2xl overflow-hidden text-white 
      border border-yellow-400/70 hover:scale-105 
      transition-transform duration-500 hover:shadow-yellow-400/60"
        >
          {/* Image */}
          <img
            src={problem.img}
            alt={problem.title}
            className="h-80 w-full object-cover transform hover:scale-110 transition duration-700"
          />

          {/* Text */}
          <div className="p-6 flex flex-col items-center text-center space-y-3">
            <h3 className="text-2xl font-extrabold montserrat drop-shadow-md tracking-wide">
              {problem.title}
            </h3>
            <p className="text-base opacity-90 poppins leading-relaxed">
              {problem.desc}
            </p>
          </div>

          {/* Button */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6"
          >
            <button
              className="montserrat flex items-center gap-2 
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
          text-white font-semibold px-7 py-3 rounded-full shadow-lg 
          hover:from-yellow-500 hover:to-red-600 
          hover:shadow-yellow-400/50 hover:scale-105 
          transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Online Chatting
            </button>
          </a>
        </div>
      ))}
    </motion.div>
  );
};

const AboutAstrologer = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-100 via-[#fdf2d0] to-orange-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="space-y-5">
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold montserrat shadow-lg hover:scale-105 transition">
            ✨ LET'S KNOW ABOUT
          </button>
          <h2 className="text-4xl font-extrabold text-red-700 montserrat drop-shadow-md">
            {company_name}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg open-sans">
            The renowned astrologer{" "}
            <span className="font-bold text-red-700">{company_name}</span>
            has become a trusted name worldwide. His wisdom in astrology,
            inherited from his father and grandfather, has guided countless
            people towards peace and success. Clients value his{" "}
            <span className="font-semibold text-red-600">
              deep understanding
            </span>
            of their problems before suggesting effective remedies.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            His services continue to attract a global clientele who seek his
            expertise in all branches of astrology. With {company_name}, every
            individual, regardless of background, can find practical and
            spiritual solutions to life’s toughest challenges.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/72/8a/a6/728aa6412c6c6f7a6410b3bfa4c1fab9.jpg"
              alt="Astrologer Banner"
              className=" rounded-3xl shadow-2xl border-4 border-yellow-400 w-full h-[420px] object-cover transform hover:scale-105 transition duration-500"
            />
            {/* Decorative Glow */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-300/40 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Breakup Problem is very common in today's generation and if you are also going through the same then do use astrology to keep such separation problems far away.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Gf/Bf Dispute always is a stressful situation. Astrological remedies help to keep your relationship smooth and healthy.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Love Problem",
      desc: "It is not easy to come out from a Love Problem but astrology can provide a better path to keep love alive in relationships.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Problem",
      desc: "When you want to get rid of Family Problem, use astrological remedies that bring peace and positivity at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 py-16 ">
      <div className=" mx-auto text-center">
        <h2 className="text-xl md:text-4xl font-extrabold text-pink-700 mb-12 montserrat drop-shadow-md">
          🌟 Our Premium Astrology Services 🌟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-pink-400/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover transform hover:scale-110 hover:rotate-2 transition-all duration-700"
                />
                {/* Glow circle */}
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-pink-200/40 rounded-full blur-3xl"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-red-600 montserrat drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm open-sans leading-relaxed">
                  {service.desc}
                </p>
                <a href={`tel:${phone_number}`}>
                  <button
                    className="montserrat flex items-center justify-center gap-2 w-full 
                bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 
                text-white font-semibold py-3 rounded-full shadow-lg 
                hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" /> Call Us Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Specialist",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Husband Wife Dispute",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Problem",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-pink-50 via-purple-50 to-orange-50 py-16 px-6 relative overflow-hidden">
      {/* Cosmic Sparkles Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-16 montserrat drop-shadow-lg">
          ✨ Best Astrology Services ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 hover:shadow-4xl transition-shadow duration-500 hover:-translate-y-2 transform"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-36 h-36 rounded-full object-cover border-4 border-pink-400 shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                  {/* Glow Effect */}
                  <span className="absolute -inset-1 rounded-full bg-pink-400 opacity-30 blur-2xl animate-pulse"></span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 open-sans"></p>

              <a href={`tel:${phone_number}`}>
                <button className="montserrat flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold py-3 rounded-full shadow-xl hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological remedies to bring your ex back with love & trust.",
    },
    {
      title: "Court Case Solution",
      icon: Scale,
      desc: "Effective solutions for legal & court-related issues.",
    },
    {
      title: "Family Problem",
      icon: Users,
      desc: "Resolve disputes & bring peace at home with astrology.",
    },
    {
      title: "Business Problem",
      icon: Briefcase,
      desc: "Boost your career & business success with remedies.",
    },
    {
      title: "Childless Couple",
      icon: Users,
      desc: "Astrological remedies to bless couples with children.",
    },
    {
      title: "Thantra Pooja",
      icon: Users,
      desc: "Personalized astrology & pujas for spiritual growth, meditation & karma solutions.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 py-20 px-6 overflow-hidden">
      {/* Background cosmic sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-2xl text-center md:text-6xl font-extrabold text-red-600 mb-16 montserrat drop-shadow-lg">
          🌟 Premium Astrology Services 🌟
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <div
              key={id}
              className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 hover:scale-105 hover:shadow-4xl transition-transform duration-500 border border-amber-300"
            >
              {/* Neon Icon Glow */}
              <div className="flex justify-center mb-6 relative">
                <service.icon className="w-14 h-14 text-red-500 drop-shadow-lg animate-pulse" />
                <span className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-3xl animate-ping"></span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 montserrat">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-8 text-sm open-sans">
                {service.desc}
              </p>

              <a href={`tel:${phone_number}`}>
                <button className="montserrat flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold py-3 rounded-full shadow-xl hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Contact Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-300 to-red-400 blur-xl opacity-50"></div>
          <img
            src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
            alt={person_name}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-700 montserrat tracking-wide drop-shadow-md">
            ✨ Astrologer {person_name} ✨
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 montserrat">
            Best Astrologer in India
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base open-sans">
            Astrologer {person_name} stands amidst the celebrated Vastu
            Consultants. His guidance sheds light on inner contradictions and
            reveals natural strengths of people. Receive personalized solutions
            with guaranteed clarity and trust.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-red-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-pink-400/50 transition-transform duration-300"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-green-400/50 transition-transform duration-300"
            >
              <MessageCircle size={20} /> Chat With Us
            </a>
          </div>

          {/* Special Note */}
          <p className="mt-4 text-yellow-600 font-bold tracking-wide text-sm md:text-base poppins">
            Trusted Astrology Guidance | Accurate | Personalized | Spiritual
            Solutions
          </p>
        </div>
      </div>
    </section>
  );
}
