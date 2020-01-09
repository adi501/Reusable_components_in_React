import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./styles.css";

function App() {
  function submitClick(e) {
    e.preventDefault();
    console.log("submitClick");
  }
  function resetClick(e) {
    e.preventDefault();
    console.log("resetClick");
  }
  function cancelClick(e) {
    e.preventDefault();
    console.log("cancelClick");
  }

  return (
    <div className="App">
      <Button theme="green" handleClick={submitClick}>
        Submit
      </Button>
      <Button theme="blue" handleClick={resetClick}>
        Reset
      </Button>
      <Button theme="red" handleClick={cancelClick}>
        Cancel
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
