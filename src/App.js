import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const state = useState("hello");
  const value = state[0];
  const setValue = state[1];
  return (
    <div
      onClick={() => {
        setValue("NO");
      }}
    >
      {value}
    </div>
  );
}

export default App;
