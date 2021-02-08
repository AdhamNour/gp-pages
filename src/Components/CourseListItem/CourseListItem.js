import React, { Component } from "react";
import classes from "./CourseListItem.module.css";
import CourseItemContent from "./CourseItemContent/CourseItemContent";
class CourseListItem extends Component {
  render() {
    const testImage =
      "https://images7.alphacoders.com/769/thumb-1920-769160.jpg";
    return (
      <div
        className={classes.ItemContainer}
        onClick={() => this.props.getSelected(this.props.id)}
        style={{
          height: `${this.props.height}px`,
          width: `${this.props.height * 2}px`,
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
