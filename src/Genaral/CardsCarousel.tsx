"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { useCallback } from "react";
import { phone_number, whatsapp_number } from "./secrete";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
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
      desc: "Reunite with your lost love and restore happiness with divine remedies. Remove negativity, heal misunderstandings, and rebuild trust for a blissful love life.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Psychic Reading",
      desc: "Get accurate psychic insights about love, career, health & finances. Prepare for success, overcome obstacles, and make confident decisions with clarity.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Business Problem",
      desc: "Boost your business growth, overcome financial hurdles, and attract prosperity with spiritual astrology solutions. Ensure steady success & stability.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto relative bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 rounded-3xl shadow-xl py-10 px-4">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] p-6"
            >
              <div className="relative bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400 text-white rounded-3xl shadow-2xl px-6 pt-20 pb-8 flex flex-col items-center text-center overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Rotating Chakra Backdrop */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-20 animate-spin-slow">
                  <img
                    src="https://gowtham-astrology.co.uk/wp-content/uploads/2024/10/service-page-before.png"
                    alt="chakra"
                    className="w-60 h-60 md:w-72 md:h-72 object-contain"
                  />
                </div>

                {/* Circle Image */}
                <div className="absolute top-2 w-32 h-32 rounded-full border-4 border-yellow-300 shadow-lg overflow-hidden z-20">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Text */}
                <div className="mt-20 relative z-30">
                  <h3 className="text-2xl font-bold mb-3 drop-shadow-md montserrat">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-95 open-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 roboto relative z-30">
                  <a
                    href={`tel:${phone_number}`}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-yellow-300 hover:scale-105 transition"
                  >
                    <Phone size={18} /> Call
                  </a>
                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    className="bg-green-500 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-green-600 hover:scale-105 transition"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-purple-50 transition"
      >
        <ChevronLeft className="text-purple-600 w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-purple-50 transition"
      >
        <ChevronRight className="text-purple-600 w-6 h-6" />
      </button>
    </div>
  );
};

export default CardCarousel;
