"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const images = [
  "/Home/Home1.jpg",
  "/Home/Home2.jpg",
  "/Home/Home3.jpg",
  "/Home/Home4.jpg",
  "/Home/Home5.png",
];




export function HomeCarousel() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Carousel
      className="w-full max-w-2xl mx-auto overflow-x-hidden md:overflow-x-visible"
      orientation={isMobile ? "vertical" : "horizontal"}
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({ delay: 3000 }),
      ]}
    >
      <CarouselContent className={`flex-nowrap ${isMobile ? "flex-col h-[350px]" : ""}`}>
        {images.map((src, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full">
            <div className="p-2">
              <div className="bg-transparent">
                <div
                  className="flex items-center justify-center p-0 overflow-hidden"
                  style={{ height: "350px" }}
                >
                  <Image
                    src={src}
                    alt={`Home ${index + 1}`}
                    width={isMobile ? 350 : 600}
                    height={350}
                    className="object-cover rounded-lg border-2 border-[#dddbff] w-80 h-50 md:w-full md:h-full"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="mt-20 md:mt-0" />
      <CarouselNext className="mb-12 md:mb-0" />
    </Carousel>
  );
}
