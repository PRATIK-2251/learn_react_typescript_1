import React from "react";
import "./App.css";
import MyButton from "./components/Button";
import Custom from "./components/Custom";
import FormHandling from "./components/FormHandling";
import { CounterProvider } from "./components/Counter";
function App() {
  return (
    <div className="App">
      <CounterProvider>
        <MyButton
          text="Click me"
          onClick={() => {
            alert("Clicked");
          }}
        />
        <MyButton text="Click me again" />
      </CounterProvider>
      <Custom />
      <FormHandling />
    </div>
  );
}

export default App;
