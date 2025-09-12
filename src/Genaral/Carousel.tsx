import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 40,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      id: 1,
      img: "https://ravishankarguruji.com/storage/2025/03/3-2048x1366.jpeg",
    },
    { id: 2, img: "https://ravishankarguruji.com/storage/2025/03/2.jpeg" },
    { id: 3, img: "https://ravishankarguruji.com/storage/2025/03/1.jpeg" },
    {
      id: 4,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-23-at-14.18.17_0b522bc6-1024x768.jpg",
    },
    {
      id: 5,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0003-1152x1536.jpg",
    },
    {
      id: 6,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-23-at-14.18.52_50457e75-1024x768.jpg",
    },
    {
      id: 7,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0006-1152x1536.jpg",
    },
    {
      id: 8,
      img: "https://kalikadeviastro.com/wp-content/uploads/2024/12/IMG-20241222-WA0005-1152x1536.jpg",
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 my-6">
      <div
        className="w-full h-full overflow-hidden rounded-2xl shadow-xl"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-96 relative"
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded montserrat text-sm md:text-base">
                Welcome to Chamundeswari Astrology Center
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
      >
        <ChevronLeft strokeWidth={3} className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
      >
        <ChevronRight strokeWidth={3} className="w-6 h-6" />
      </button>
    </div>
  );
}
