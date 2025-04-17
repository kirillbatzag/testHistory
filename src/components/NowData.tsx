import React, { useEffect, useState } from "react";
import { useCircleContext } from "../contexts/CircleContext";
import { gsap } from "gsap";
import "../styles/datashow.scss";

const dateRanges: Record<number, [number, number]> = {
  1: [1980, 1986],
  2: [1987, 1991],
  3: [1992, 1997],
  4: [1999, 2004],
  5: [2005, 2014],
  6: [2015, 2022],
};

export default function NowData() {
  const { activeIndex } = useCircleContext();

  const [displayStart, setDisplayStart] = useState(dateRanges[1][0]);
  const [displayEnd, setDisplayEnd] = useState(dateRanges[1][1]);

  useEffect(() => {
    const [newStart, newEnd] = dateRanges[activeIndex];

    const obj = { start: displayStart, end: displayEnd };

    gsap.to(obj, {
      start: newStart,
      end: newEnd,
      duration: 0.6,
      ease: "power1.out",
      onUpdate: () => {
        setDisplayStart(Math.round(obj.start));
        setDisplayEnd(Math.round(obj.end));
      },
    });
  }, [activeIndex]);

  return (
    <>
      <div className="dataShowNow">
        <p className="p1">{displayStart}</p>
        <p className="p2">{displayEnd}</p>
      </div>
      <div className="mobile-date-line"></div>
    </>
  );
}
