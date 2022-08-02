import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const value = useState("hello")[0];
  const setValue = useState("hello")[1];
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
