import React from "react";
import { useCircleContext } from "../contexts/CircleContext";
import "../styles/dotsindicator.scss";

export default function DotsIndicator() {
  const { activeIndex, setActiveIndex } = useCircleContext();

  return (
    <div className="dots-container">
      {Array.from({ length: 6 }, (_, i) => {
        const idx = i + 1;
        return (
          <div
            key={idx}
            className={`dot ${activeIndex === idx ? "active" : ""}`}
            onClick={() => {
              requestAnimationFrame(() => {
                setActiveIndex(idx);
              });
            }}
          />
        );
      })}
    </div>
  );
}
