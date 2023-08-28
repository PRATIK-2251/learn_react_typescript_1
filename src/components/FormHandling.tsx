import React, { useState } from "react";

const FormHandling: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit => ", e);
  };

  return (
    <>
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <h4>{value}</h4>
      </div>

      {/* Form */}
      <form action="" onSubmit={formHandler}>
        <div>
          <input type="text" placeholder="Enter your name" />
          <h4>{value}</h4>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormHandling;
