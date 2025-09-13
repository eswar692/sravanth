"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";
import { useCallback } from "react";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
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
      desc: "Do you want to reunite with your love? Are you unable to find the solutions? Not to worry, Astrologer Gowtham provides services to help attract your love.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Psychic Reading",
      desc: "Do you want to know the future and prepare for upcoming misfortunes? Astrologer Gowtham Ji provides accurate psychic readings.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Solve Business Problem",
      desc: "Struggling in business and not getting profits? Astrologer Gowtham can help you overcome negative energy blocking success.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-30">
      {/* Carousel Container */}
      <div className="" ref={emblaRef}>
        <div className="flex ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] p-4"
            >
              <div className="relative bg-gradient-to-b from-red-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                {/* Circle Image with emblem bg */}
                <div className="absolute -top-20   z-10 w-50 h-50 rounded-full border-4 border-red-300 overflow-hidden mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* WhatsApp Badge */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-white rounded-full p-2 shadow">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-2 mt-20">{card.title}</h3>
                <p className="text-sm opacity-90">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default CardCarousel;
