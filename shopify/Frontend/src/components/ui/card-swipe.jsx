import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";
import { SparklesIcon } from "lucide-react";
import { Badge } from "./badge"; // your shadcn/ui badge

/**
 * Props:
 * @param {Array} images - Array of { src: string, alt: string }
 * @param {number} autoplayDelay - Autoplay delay in ms
 * @param {boolean} slideShadows - Whether to show shadows in card effect
 */
export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: 50%;
      padding-bottom: 50px;
    }
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
    }
  `;

  return (
    <section className="space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] animate-glow border border-white  bg-neutral-800/5 p-2  md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
         

         
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <h3 className="text-4xl opacity-85 font-bold tracking-tight">
             Stylist
            </h3>
            
          </div>

        
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


