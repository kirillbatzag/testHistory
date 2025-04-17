import React from "react";
import "../styles/slider.scss";
import "../styles/datacard.scss";

export default function CardData({
  year,
  event,
}: {
  year: number;
  event: string;
}) {
  return (
    <div className="card">
      <p className="year">{year}</p>
      <p className="card-text">{event}</p>
    </div>
  );
}
