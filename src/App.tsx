import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NamePage from "./components/NamePage";
import CircleData from "./components/CircleData";
import NowData from "./components/NowData";
import Switcher from "./components/Switcher";
import CardData from "./components/CardData";
import { CircleProvider } from "./contexts/CircleContext";
import SliderData from "./components/SliderData";
import DotsIndicator from "./components/DotsIndicator";

export default function App() {
  return (
    <CircleProvider>
      <div className="screen">
        <div className="app">
          <NamePage />
          <CircleData />
          <NowData />
          <div className="panel">
            <Switcher />
            <SliderData />
          </div>
        </div>
      </div>
    </CircleProvider>
  );
}
