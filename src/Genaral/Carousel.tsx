import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { person_name } from "./secrete";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    []
  );

  const [_autoplay, setAutoplay] = useState<NodeJS.Timer | null>(null);

  const slides = [
    {
      id: 3,
      img: "https://i.pinimg.com/736x/01/8c/73/018c735aaa73f1a610d023391e4c3c4e.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/8d/95/ff/8d95fff806cac0d2308fcd7e60d4dab2.jpg",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/5f/93/38/5f9338bbf17b820c59383734c03302b8.jpg",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/0b/ea/85/0bea85319c7aad2be9a17715c0726a20.jpg",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/62/b3/58/62b358e267e59d97cad63c49de2f8b44.jpg",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/e5/15/02/e51502ea14aa82845d23f7cefe17e766.jpg",
    },
  ];

  // Autoplay function
  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      emblaApi.scrollNext();
    };

    const interval = setInterval(play, 3000); // 3s smooth
    setAutoplay(interval);

    return () => {
      clearInterval(interval);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto h-[80vh] w-full">
      <div className="w-full h-full overflow-hidden shadow-2xl" ref={emblaRef}>
        <div className="flex w-full h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full w-[100vw]"
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-[100vw] h-full object-cover transform hover:scale-105 transition duration-500"
              />

              {/* Overlay Content Center */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="text-center max-w-4xl px-6">
                  {/* Title */}
                  <h2 className="text-5xl md:text-7xl font-extrabold montserrat text-yellow-300 drop-shadow-lg mb-4">
                    Astro Honest
                  </h2>

                  {/* Pandit Name */}
                  <h3 className="text-3xl md:text-5xl font-bold montserrat text-pink-400 mb-6 drop-shadow-md">
                    Pandit <span className="text-white">{person_name}</span>
                  </h3>

                  {/* Descriptions */}
                  <p className="text-lg md:text-2xl text-gray-100 poppins leading-relaxed mb-3">
                    Powerful Vashikaran remedies to restore love, attract
                    harmony, and solve complex life challenges with trusted
                    guidance.
                  </p>
                  <p className="text-lg md:text-2xl text-gray-100 poppins leading-relaxed">
                    Decades of experience helping people worldwide with safe,
                    ethical, and result-oriented astrology solutions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full p-3 shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gradient-to-l from-purple-600 to-pink-500 text-white rounded-full p-3 shadow-lg hover:scale-110 transition"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>
    </div>
  );
}
