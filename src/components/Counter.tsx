import React, { createContext, useContext, useState } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setValue: (num: number) => void;
}

export const useCounter = () => {
  return useContext(CounterContext);
};

const CounterContext = createContext<CounterContextValue | null>(null);

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(1);
  return (
    <CounterContext.Provider value={{ value: count, setValue: setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
