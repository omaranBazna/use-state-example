import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("hello");
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
