import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/CourseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { courses: filteredCourses };
    // return state.courses.data;
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <div>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </div>
        <div>
          <p>{course.cost} ₺</p>
        </div>
        <div>
          <button
            className="button is-danger"
            onClick={() => {
              dispatch(removeCourse(course.id));
            }}
          >
            Sil
          </button>
        </div>
      </div>
    );
  });

  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
