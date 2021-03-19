import React, { Component, Fragment } from "react";
import classes from "./AddEvent.module.css";
import InputPart from "./LeftPart/InputPart";
import Notification from "../../Components/AddEvent/Notifications/Notifications";
import {Button} from "@material-ui/core"
class AddEvent extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.AddEvent}>
          <InputPart />
          <div>
            <Notification />
          </div>
        </div>
        <div className={classes.CreateDiscardContainer} >
        <Button color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" >
            Create
          </Button>
          
        </div>
      </Fragment>
    );
  }
}

export default AddEvent;
