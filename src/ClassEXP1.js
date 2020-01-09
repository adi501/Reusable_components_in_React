import React, { Component } from "react";
import Button from "./Button";

class ClassEXP1 extends Component {
  constructor() {
    super();
    this.state = { Data: "" };
  }
  submitClick = e => {
    console.log("Submit Button Clicked");
    this.setState({ Data: "Submit Button Clicked" });
  };
  resetClick = e => {
    console.log("Reset Button Clicked");
    this.setState({ Data: "Reset Button Clicked" });
  };
  cancelClick = e => {
    console.log("Cancel Button Clicked");
    this.setState({ Data: "Cancel Button Clicked" });
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
