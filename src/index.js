import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ClassEXP1 from "./ClassEXP1";

function App() {
  return (
    <div className="App">
      <ClassEXP1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
