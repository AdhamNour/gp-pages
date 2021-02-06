import "./App.css";
import CourseListItem from "./Components/CourseListItem/CourseListItem";
import React, { Component, Fragment } from "react";

class App extends Component {
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
  render() {
    let loadedCourses = Object.keys(this.state.loadedCourses).map((key) => {
      return (
        <div key={key} style={{ width: "200px", height: "120px" }}>
          <CourseListItem
            CourseName={this.state.loadedCourses[key].CourseName}
            DoctorName={this.state.loadedCourses[key].DoctorName}
            id={key}
          />
        </div>
      );
    });
    return <div style={{backgroundColor:'cyan'}}>{loadedCourses}</div>;
  }
}

export default App;
