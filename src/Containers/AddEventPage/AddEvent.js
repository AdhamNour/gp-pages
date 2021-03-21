import React, { Component, Fragment } from "react";
import classes from "./AddEvent.module.css";
import InputPart from "./InputPart/InputPart";
import NotificationPart from "./NotificationsPart/NotificationsPart";
import { Button,Modal,Paper } from "@material-ui/core";
class AddEvent extends Component {
  state = {
    openedModal: false
  }
  openModal = () => {
    console.log("Hello from OpenModal")
    this.setState({
      openedModal: true
    })
  }
  closeModal = () => {
    this.setState({
      openedModal: false
    })
  }
   body =  (
    <Paper className={classes.ModalContainer}>
      <div className={classes.AddEvent}>
        <InputPart />
        <NotificationPart />
      </div>
      <div className={classes.CreateDiscardContainer}>
        <Button color="secondary">Cancel</Button>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </div>
    </Paper>
  )
  render() {
    return(
      <Fragment>
        <Button color="primary" variant="contained" onClick ={this.openModal} >
          Add Event
        </Button>
        <Modal
        open={this.state.openedModal}
        onClose={this.closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {this.body}
      </Modal>
      </Fragment>
    );
  }
}

export default AddEvent;
