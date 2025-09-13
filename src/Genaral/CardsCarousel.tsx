"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, Phone, MessageCircle } from "lucide-react";
import { useCallback } from "react";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const cards = [
    {
      title: "Get Your Love Back",
      desc: "Do you want to reunite with your love? Are you unable to find the solutions? Not to worry, Astrologer Gowtham provides effective astrology services to help attract your love, remove misunderstandings, and bring back happiness in your relationship. With powerful remedies and guidance, you can rebuild lost trust and enjoy a blissful love life again.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Psychic Reading",
      desc: "Do you want to know the future and prepare for upcoming misfortunes? Astrologer Gowtham Ji provides accurate psychic readings that give you clarity in love, career, health, and financial matters. With divine guidance, you can avoid negative energy, prepare for challenges, and attract positive outcomes in life.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Solve Business Problem",
      desc: "Struggling in business and not getting profits? Astrologer Gowtham can help you overcome negative energy blocking success. Get remedies to attract customers, remove financial hurdles, and increase prosperity. With spiritual solutions, your business can grow steadily and achieve long-term stability.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto relative bg-white">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex relative h-[600px] items-end">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] p-4"
            >
              <div className="z-20 h-[420px] bg-gradient-to-b from-red-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                {/* Circle Image */}
                <div className="absolute -top-20 z-10 w-40 h-40 rounded-full border-4 border-red-300 overflow-hidden mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Text */}
                <div className="mt-28">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-90 font-opensans">
                    {card.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="tel:+919999999999"
                    className="font-roboto bg-white text-red-600 px-4 py-2 rounded-full flex items-center gap-2 shadow hover:bg-gray-100 transition"
                  >
                    <Phone size={18} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    className="font-roboto bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow hover:bg-green-600 transition"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Backend rotating chakra */}
              <div className="-z-20 absolute -top-32 right-18 md:right-8 lg:right-18 ">
                <img
                  src="https://gowtham-astrology.co.uk/wp-content/uploads/2024/10/service-page-before.png"
                  alt=""
                  className="w-80 h-80 md:w-60 md:h-60 "
                  style={{ animation: "rotate 10s linear infinite" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-5 top-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-5 top-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default CardCarousel;
