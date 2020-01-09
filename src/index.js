import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Container from "./Container";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button theme="default">Click Me</Button>
      <Button theme="primary">Submit</Button>
      <Button theme="secondary">Notify</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
