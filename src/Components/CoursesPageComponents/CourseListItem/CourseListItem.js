import React, { Component } from "react";
import classes from "./CourseListItem.module.css";
import CourseItemContent from "./CourseItemContent/CourseItemContent";
class CourseListItem extends Component {

  render() {
    const testImage =this.props.CoursePicture;
    let selected = this.props.displayedCourse === this.props.id;
    console.log("From CourseItem.js displayedCourse ID = "+this.props.displayedCourse)
    console.log("From CourseItem.js  ID = "+this.props.id)
    console.log("From CourseItem.js: selected is"+selected)
    return (
      <div
        className={[classes.ItemContainer,selected?classes.selected:""].join(" ")}
        onClick={() => {
          this.props.getSelected(this.props.id);
        }}
      >
        <img src={testImage} alt="tst" className={classes.CourseImage} />
        <div className={classes.CourseItemContent}>
          <CourseItemContent
            CourseName={this.props.CourseName}
            DoctorName={this.props.DoctorName}
          />
        </div>
      </div>
    );
  }
}

export default CourseListItem;
