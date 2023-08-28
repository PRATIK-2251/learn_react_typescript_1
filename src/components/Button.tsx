import React, { useState } from "react";
import { useCounter } from "./Counter";
interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
  something?: Boolean;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { text, onClick } = props;

  const [value, setValue] = useState<number>(1);

  const context = useCounter;

  // console.log(context());

  return (
    <>
      <h2>{value}</h2>
      <button onClick={onClick}>{text}</button>
      <button onClick={() => setValue(value + 1)}>Increment</button>

      <h1 onClick={() => context()?.setValue(context()?.value + 1)}>
        {context()?.value}
      </h1>
    </>
  );
};

export default MyButton;
