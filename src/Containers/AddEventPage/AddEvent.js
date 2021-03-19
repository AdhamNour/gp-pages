import React, { Component } from "react";
import {TextField,Grid} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Today,Event} from '@material-ui/icons';
import classes from "./AddEvent.module.css";

class AddEvent extends Component {
  render() {
    return (
      <div className={classes.AddEvent}>
        <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Event />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        <div className={classes.row}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Today />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Today />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        </div>
        </div>
      </div>
    );
  }
}

export default AddEvent;
