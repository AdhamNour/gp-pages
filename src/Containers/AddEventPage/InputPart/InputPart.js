import React from 'react';
import { TextField, Grid } from "@material-ui/core";
import { Today, Event, Schedule } from "@material-ui/icons";
import classes from "./InputPart.module.css"

//TODO: add some padding and margin to the input fields down below 

const InputPart = (props) => {
    return ( 
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
              <Event />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.row}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Schedule />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Schedule />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Event />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
     );
}
 
export default InputPart;