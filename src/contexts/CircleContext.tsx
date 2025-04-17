import React, { createContext, useContext, useState, ReactNode } from "react";

interface CircleContextType {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}

const CircleContext = createContext<CircleContextType | undefined>(undefined);

export const CircleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <CircleContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </CircleContext.Provider>
  );
};

export const useCircleContext = () => {
  const ctx = useContext(CircleContext);
  if (!ctx)
    throw new Error("useCircleContext must be used inside CircleProvider");
  return ctx;
};
