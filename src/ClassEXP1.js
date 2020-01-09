import React, { Component } from "react";
import Button from "./Button";

class ClassEXP1 extends Component {
  constructor() {
    super();
    this.state = { Data: "" };
  }
  submitClick = e => {
    console.log("submitClick");
    this.setState({ Data: "submitClick" });
  };
  resetClick = e => {
    console.log("resetClick");
    this.setState({ Data: "resetClick" });
  };
  cancelClick = e => {
    console.log("cancelClick");
    this.setState({ Data: "cancelClick" });
  };
  render() {
    return (
      <div>
        <Button theme="green" handleClick={this.submitClick}>
          Submit
        </Button>
        <Button theme="blue" handleClick={this.resetClick}>
          Reset
        </Button>
        <Button theme="red" handleClick={this.cancelClick}>
          Cancel
        </Button>
        <div>{this.state.Data}</div>
      </div>
    );
  }
}
export default ClassEXP1;
