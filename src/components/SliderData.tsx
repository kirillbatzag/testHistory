import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getEventsForIndex } from "./events";
import CardData from "./CardData";
import { useCircleContext } from "../contexts/CircleContext";
import { gsap } from "gsap";
import "swiper/css";
import "../styles/slider.scss";

export default function SliderData() {
  const { activeIndex } = useCircleContext();
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperContainerRef.current) return;

    gsap.to(swiperContainerRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        setCurrentEvents(getEventsForIndex(activeIndex));

        requestAnimationFrame(() => {
          const swiper = swiperRef.current?.swiper;
          swiper?.slideTo(0, 0);
          updateNavigationState();
        });

        gsap.fromTo(
          swiperContainerRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1.in" }
        );
      },
    });
  }, [activeIndex]);

  const updateNavigationState = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <div className="slider-wrapper">
      {!isBeginning && (
        <button
          className="backstep"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
        >
          <span className="material-icons">chevron_left</span>
        </button>
      )}

      <div ref={swiperContainerRef} className="swiper-container">
        <Swiper
          ref={swiperRef}
          loop={false}
          className="swiper-slider"
          onSwiper={updateNavigationState}
          onSlideChange={updateNavigationState}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 25,
            },

            1440: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
        >
          {currentEvents.map((ev, i) => (
            <SwiperSlide key={i}>
              <CardData year={ev.year} event={ev.event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {!isEnd && (
        <button
          className="nextstep"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
        >
          <span className="material-icons">chevron_right</span>
        </button>
      )}
    </div>
  );
}
