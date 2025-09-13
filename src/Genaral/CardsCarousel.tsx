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
      desc: "Do you wish to reunite with your lost love and restore happiness in your relationship? Astrologer Gowtham provides powerful astrology solutions to heal misunderstandings, remove negative influences, and rebuild lost trust. With divine remedies and expert guidance, you can attract your partner back, strengthen emotional bonds, and enjoy a blissful love life filled with peace and joy.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Psychic Reading",
      desc: "Are you seeking clarity about your future and guidance to handle upcoming challenges? Astrologer Gowtham Ji offers accurate psychic readings that reveal insights into love, marriage, career, health, and finances. With his divine wisdom, you can understand hidden obstacles, overcome negative energy, and prepare for success. Psychic guidance helps you make confident choices and attract positive outcomes in life.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Solve Business Problem",
      desc: "Is your business struggling with losses, low profits, or constant obstacles? Astrologer Gowtham provides effective astrology remedies to remove negativity and open doors to growth. With spiritual solutions, you can attract more customers, overcome financial hurdles, and create long-term stability. His guidance helps boost confidence, bring prosperity, and ensure your business flourishes with steady success.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto relative bg-white rounded-2xl">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex relative h-[650px] items-end">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] p-4"
            >
              <div className="w-[300px] mx-auto z-20 h-[500px0px] bg-gradient-to-b from-red-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                {/* Circle Image */}
                <div className="absolute -top-15 z-10 w-50 h-50 rounded-full border-4 border-red-300 overflow-hidden mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Text */}
                <div className="mt-28">
                  <h3 className="text-xl font-bold mb-2 montserrat">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-90 opensans">{card.desc}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3 roboto">
                  <a
                    href="tel:916302133653"
                    className="font-roboto bg-white text-red-600 px-4 py-1 rounded-full flex items-center gap-2 shadow hover:bg-gray-100 transition"
                  >
                    <Phone size={18} /> Call
                  </a>
                  <a
                    href="https://wa.me/916302133653"
                    target="_blank"
                    className="font-roboto bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow hover:bg-green-600 transition"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
                {/* Backend rotating chakra */}
                <div className="-z-20 absolute -top-25  ">
                  <img
                    src="https://gowtham-astrology.co.uk/wp-content/uploads/2024/10/service-page-before.png"
                    alt=""
                    className="w-70 h-70 object-contain  md:w-60 md:h-60"
                    style={{ animation: "rotate 5s linear infinite" }}
                  />
                </div>
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
