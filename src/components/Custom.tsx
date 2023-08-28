import React, { useState } from "react";

interface Book {
  name: string;
  price: number;
}

const Custom: React.FC = () => {
  const [book, setBook] = useState<Book>({ name: "Good", price: 200 });

  return (
    <>
      <div>
        <h2>
          {book.name} {book.price}
        </h2>
        <button onClick={() => setBook({ name: "Good one", price: 400 })}>
          Update
        </button>
      </div>
    </>
  );
};

export default Custom;
