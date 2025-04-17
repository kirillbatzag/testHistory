import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CircleButton from "./CircleButton";
import { useCircleContext } from "../contexts/CircleContext";
import "../styles/circledata.scss";

const labels: Record<number, string> = {
  1: "",
  2: "Кино",
  3: "Литература",
  4: "",
  5: "Искусство",
  6: "Наука",
};

export default function CircleData() {
  const { activeIndex, setActiveIndex } = useCircleContext();
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const radius = 265;

  const buttonOrder = useRef([1, 2, 3, 4, 5, 6]);
  const anglesRef = useRef([300, 0, 60, 120, 180, 240]);

  useEffect(() => {
    anglesRef.current.forEach((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;
      const btnId = buttonOrder.current[i];
      const wrapper = buttonsRef.current[btnId - 1];
      if (!wrapper) return;
      gsap.set(wrapper, { x, y, xPercent: -50, yPercent: -50 });
      wrapper.dataset.angle = angle.toString();
    });
  }, []);

  useEffect(() => {
    const targetAngle = 300;
    const step = 60;
    const order = buttonOrder.current;
    const idx = order.indexOf(activeIndex);
    const newOrder = [...order.slice(idx), ...order.slice(0, idx)];
    buttonOrder.current = newOrder;

    const newAngles = newOrder.map((_, i) => (targetAngle + i * step) % 360);
    anglesRef.current = newAngles;

    newOrder.forEach((btnId, i) => {
      const wrapper = buttonsRef.current[btnId - 1];
      if (!wrapper) return;
      const start = parseFloat(wrapper.dataset.angle ?? "0");
      const end = newAngles[i];
      const cw = (end - start + 360) % 360;
      const ccw = (start - end + 360) % 360;
      const delta = cw <= ccw ? cw : -ccw;
      const obj = { angle: start };

      gsap.to(obj, {
        angle: start + delta,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          const rad = (obj.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          gsap.set(wrapper, { x, y });
        },
        onComplete: () => {
          wrapper.dataset.angle = end.toString();
        },
      });
    });
  }, [activeIndex]);

  return (
    <div className="circle-wrapper">
      <div className="circle-background" />
      {Array.from({ length: 6 }, (_, i) => {
        const idx = i + 1;
        return (
          <CircleButton
            key={idx}
            index={idx}
            label={labels[idx]}
            isActive={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
            buttonRef={(el) => (buttonsRef.current[i] = el)}
          />
        );
      })}
    </div>
  );
}
