import React from "react";
import Angularlogo from "./images/angular.jpg";
import Bootstraplogo from "./images/bootstrap5.png";
import Weblogo from "./images/kompleweb.jpg";
import Ccsharplogo from "./images/ccsharp.png";
import "./Course.css";

const courseMap = { Angularlogo, Bootstraplogo, Weblogo, Ccsharplogo };

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />
    </div>
  );
}

export default Course;
