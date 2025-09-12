import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import useInViewOnce from "../Genaral/InView";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";

const Home = () => {
  return (
    <div className="flex flex-col p-3 bg-orange-100 w-full h-full">
      <Carousel />
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
  const [ref, inView] = useInViewOnce();
  const problems = [
    {
      title: "Lost Love Back",
      desc: "Available on both WhatsApp and Call. One call can change your life.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg", // replace with your image
    },
    {
      title: "Marriage Problem Solution",
      desc: "Solve disputes and misunderstandings with astrology guidance.",
      img: "https://i.pinimg.com/1200x/65/b5/7a/65b57ad4bc6f7bc20fcbd8ea7bfe3191.jpg",
    },
    {
      title: "Vashikaran Specialist",
      desc: "Attract your desired partner with trusted vashikaran solutions.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Education & Exam Remedies",
      desc: "Personalized astrological remedies and puja to improve concentration, memory and academic success. Suitable for students preparing for exams, entrance tests, or academic growth.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Vastu Pooja & Home Harmony",
      desc: "Vastu analysis and corrective poojas to balance energy at home or workplace — remove blockages, enhance prosperity, and bring peace to the living space.",
      img: "https://i.pinimg.com/736x/78/9a/cd/789acdaa18185ee33d62bfee9c50dbf1.jpg",
    },
    {
      title: "Career & Job Guidance",
      desc: "Astrological career mapping, timely remedies and rituals to unlock career opportunities, interview luck, job changes and business growth.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
    {
      title: "Health & Wellbeing Support",
      desc: "Holistic horoscope-based suggestions and gentle remedial poojas to support physical and mental wellbeing. Not a substitute for medical care — recommended alongside professional treatment.",
      img: "https://i.pinimg.com/736x/81/58/f7/8158f70ba1f01473cbe7c12109538e2d.jpg",
    },
    {
      title: "Samboga Vashikaran (Relationship Attraction)",
      desc: "Specialized vashikaran remedies aimed at rekindling attraction and emotional closeness. Provided carefully with ethical guidance and clear expectations.",
      img: "https://i.pinimg.com/736x/a9/83/b9/a983b9403577fef1ac566d0d238abdda.jpg",
    },
    {
      title: "Family Vashikaran & Harmony",
      desc: "Remedies and rituals to ease family disputes, restore trust and harmony in household relationships while respecting everyone's wellbeing and consent.",
      img: "https://i.pinimg.com/736x/4e/45/35/4e4535c3b00487016e6821c1e32c7126.jpg",
    },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid md:grid-cols-3 gap-6 p-6"
    >
      {problems.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-2xl shadow-lg overflow-hidden text-white
          border-4 border-yellow-300 shadow-yellow-300/50"
        >
          {/* Image */}
          <img
            src={problem.img}
            alt={problem.title}
            className="h-80 w-full object-cover"
          />

          {/* Text */}
          <div className="p-4 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2 montserrat">
              {problem.title}
            </h3>
            <p className="text-sm opacity-90 poppins">{problem.desc}</p>
          </div>

          {/* Button */}
          <a
            href="https://wa.me/916302133653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="montserrat flex items-center gap-2 bg-white text-pink-600 font-semibold px-6 py-2 rounded-full mb-4 shadow hover:bg-gray-100 transition">
              <Phone className="w-4 h-4" />
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
    <section className="bg-[#fdf2d0] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Content */}
        <div>
          <button className="bg-black text-white px-4 py-1 rounded-md mb-4 text-sm font-semibold montserrat">
            LET'S KNOW ABOUT
          </button>
          <h2 className="text-2xl font-bold text-red-600 mb-4 montserrat">
            Chamundeswari Astrology Center
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4 open-sans">
            The well-known astrologer in the world is{" "}
            <span className="font-semibold text-red-600">
              Chamundeswari Astrology Center
            </span>{" "}
            Whenever we talk about astrology, his name is the first that springs
            to mind. He is here to give them astrological advice. He received
            instruction from his father and grandfather in astrology, which
            helped him to become an expert in the field. Up until this moment,
            he has been the source of many people's solutions, and they
            consistently get the desired result from him. He is renowned for
            only providing solutions after completely understanding the essence
            of the client's problem. Regardless of their financial status,
            individuals can seek guidance from him and effortlessly find
            solutions to all their issues.
          </p>
          <p className="text-gray-800 leading-relaxed">
            His services have been utilised by numerous individuals. He still
            has a sizable international clientele that seeks his advice on how
            to solve their challenges. All branches of astrology are areas of
            expertise for{" "}
            <span className="font-semibold text-red-600">
              Chamundeswari Astrology Center
            </span>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/12/39/bb/1239bbdb9f4b81b9db0fa82ee4e2ecb6.jpg"
            alt="Astrologer Banner"
            className="rounded shadow-lg w-full h-[400px] object-cover"
          />
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
      img: "https://i.pinimg.com/736x/1c/77/2c/1c772cd72354da24308771d64fc70d02.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Gf/Bf Dispute always is a stressful situation. Astrological remedies help to keep your relationship smooth and healthy.",
      img: "https://i.pinimg.com/736x/a9/63/0d/a9630de48cbdf2fe602f0707e7e5a490.jpg",
    },
    {
      title: "Love Problem",
      desc: "It is not easy to come out from a Love Problem but astrology can provide a better path to keep love alive in relationships.",
      img: "https://i.pinimg.com/736x/04/f5/8b/04f58b8fa673e305280ffbefc464ed74.jpg",
    },
    {
      title: "Family Problem",
      desc: "When you want to get rid of Family Problem, use astrological remedies that bring peace and positivity at home.",
      img: "https://i.pinimg.com/1200x/65/90/34/6590344e50ed6a28c5baf17159f702fd.jpg",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8 montserrat">
          Our Other Astrology Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-red-600 mb-2 montserrat">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 open-sans">
                  {service.desc}
                </p>
                <a href="tel:916302133653">
                  <button className="montserrat flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium py-2.5 rounded-md hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" /> Call us now
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
      img: "https://astrologerdeepaksharma.in/images/s2.png",
      phone: "+91-7626870001",
    },
    {
      title: "Husband Wife Dispute",
      img: "https://astrologerdeepaksharma.in/images/s1.png",
      phone: "+91-7626870001",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://astrologerdeepaksharma.in/images/s3.png",
      phone: "+91-7626870001",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-pink-50 to-orange-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-12">
          ✨ Best Astrology Services ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-32 h-32 rounded-full object-cover border-4 border-pink-400 shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <button className="flex items-center gap-2 justify-center w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2.5 rounded-lg font-medium hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
                Call : {service.phone}
              </button>
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
  ];
  return (
    <div className="bg-gradient-to-b from-amber-50 to-orange-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-12 montserrat">
          🌟 Our Premium Astrology Services 🌟
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <div
              key={id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform border border-amber-200"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 open-sans">{service.desc}</p>
              <a href="tel:916302133653">
                <button className="roboto flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-red-400/50 hover:scale-105 transition-all">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function HomeLastDesign() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg" // replace with your Ganesha image
            alt="Astrologer Sanjeev Swamy"
            className="w-96 h-96 rounded-full drop-shadow-xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            Astrologer Sanjeev Swamy
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Best Astrologer in India
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Astrologer Sanjeev Swamy stands amidst the celebrated Vastu
            Consultants. His guidance sheds light on inner contradictions and
            reveals natural strengths of people.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="tel:916302133653"
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-2xl font-medium shadow-md hover:bg-red-700 transition"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href="https://wa.me/916302133653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-2xl font-medium shadow-md hover:bg-green-700 transition"
            >
              <MessageCircle size={20} /> Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
