import React, { Component } from "react";
import classes from "./AddEvent.module.css";
import InputPart from "./LeftPart/InputPart";

class AddEvent extends Component {
  render() {
    return (
      <div className={classes.AddEvent}>
       <InputPart/>
      </div>
    );
  }
}

export default AddEvent;
