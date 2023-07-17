import React, { useState } from "react";
import Course from "./Course";
import "../App.css";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };

  return (
    <div className="course-main-div">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <button className="random-btn" onClick={getRandomCourse}>
        Rastgele Kurs
      </button>
      <div className="card-div">
        {/* {courses.map((course, index) => {
          return (
            <Course {...course} key={index} removeOneCourse={removeCourse} />
          );
        })} */}
        <button className="prev-next-btn" onClick={prevCourse}>
          <TiChevronLeftOutline />
        </button>
        <div className="card">
          <div className="card-title-price">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-price">{price}₺</h4>
          </div>
          <p>{content}</p>
          {/* <button
            className="card-delete-btn"
            onClick={() => removeOneCourse(id)}
          >
            Sil
          </button> */}
        </div>
        <button className="prev-next-btn" onClick={nextCourse}>
          <TiChevronRightOutline />
        </button>
      </div>
    </div>
  );
}

export default Courses;
