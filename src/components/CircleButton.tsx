import React from "react";

interface CircleButtonProps {
  index: number;
  isActive: boolean;
  label: string;
  onClick: () => void;
  buttonRef: (el: HTMLDivElement | null) => void;
}

export default function CircleButton({
  index,
  isActive,
  label,
  onClick,
  buttonRef,
}: CircleButtonProps) {
  return (
    <div className="circle-button-wrapper" ref={buttonRef}>
      <button
        className={`circle-button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {index}
      </button>
      {isActive && <span className="circle-button-label">{label}</span>}
    </div>
  );
}
