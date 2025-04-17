import React, { useState } from "react";
import { useCircleContext } from "../contexts/CircleContext";
import DotsIndicator from "./DotsIndicator";
import "../styles/switcher.scss";

export default function Switcher() {
  const { activeIndex, setActiveIndex } = useCircleContext();
  const [cooldown, setCooldown] = useState(false);

  const handlePrev = () => {
    if (activeIndex > 1 && !cooldown) {
      setActiveIndex(activeIndex - 1);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 300);
    }
  };

  const handleNext = () => {
    if (activeIndex < 6 && !cooldown) {
      setActiveIndex(activeIndex + 1);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 300);
    }
  };

  const isPrevDisabled = activeIndex === 1 || cooldown;
  const isNextDisabled = activeIndex === 6 || cooldown;

  return (
    <div className="swdo">
      <div className="switch">
        <p>{activeIndex.toString().padStart(2, "0")}/06</p>
        <div className="bts">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={isPrevDisabled ? "disabled" : ""}
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={isNextDisabled ? "disabled" : ""}
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </div>
      <DotsIndicator />
    </div>
  );
}
