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
          CoursePicture: "https://miro.medium.com/max/2560/1*tYxWuyksovxA1Thu8PggPQ.jpeg"
        },
        2: {
          CourseName: "Physics 2",
          DoctorName: "Dr. Wael Fekry",
          CoursePicture:"https://cdn.britannica.com/w:1100/50/190450-131-527BAEF7/series-Elementary-Particles-subject-forms-nuclear-physics.jpg"
        },
        3: {
          CourseName: "Math 3",
          DoctorName: "Dr. Makram",
          CoursePicture:"https://i.pinimg.com/736x/c8/e5/75/c8e5753370bad54c7977d485e0a0e29d.jpg"
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
