import React, { Component } from "react";

import CourseListItem from "../../Components/CourseListItem/CourseListItem";
import CourseOverView from "../../Components/CourseOverview/CourseOverview";

import classes from "./CoursesPage.module.css";

class CoursesPags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedCourses: {
        1: {
          CourseName: "Distributed Systems",
          DoctorName: "Dr. Gamal Abd El-Shafy",
        },
        2: {
          CourseName: "Physics 2",
          DoctorName: "Dr. Wael Fekry",
        },
        3: {
          CourseName: "Math 3",
          DoctorName: "Dr. Makram",
        },
      },
      displayedCourse: null,
    };
  }

  selectingCourseHandler = (courseid) => {
    this.setState({ displayedCourse: courseid });
  };

  render() {
    let loadedCourses = Object.keys(this.state.loadedCourses).map((key) => {
      return (
        <CourseListItem
          {...this.state.loadedCourses[key]}
          id={key}
          getSelected={this.selectingCourseHandler}
          height={120}
        />
      );
    });

    let stage = (
      <div className={classes.CourseOverview}>
        <CourseOverView
          {...this.state.loadedCourses[this.state.displayedCourse]}
        />
      </div>
    );
    if (this.state.displayedCourse === null) {
      stage = null;
    }

    return (
      <div className={classes.CoursesPage}>
        <div className={classes.CoursesList}>{loadedCourses}</div>
        {stage}
      </div>
    );
  }
}

export default CoursesPags;
