import { Link } from "react-router-dom";
import React from "react";

const CourseCard = ({
  course,
  saveCourse,
  savedCourses
}) => {
  const alreadySaved = savedCourses.find(
    (item) => item.id === course.id
  );

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{course.title}</h3>

      <p>Category: {course.category}</p>

      <p>Duration: {course.duration}</p>

      <p>Level: {course.level}</p>

      <p>Price: ₹{course.price}</p>

      <Link to={`/courses/${course.id}`}>
        <button>View Descriptions</button>
      </Link>

      <button
        disabled={alreadySaved}
        onClick={() => saveCourse(course)}
      >
        {alreadySaved ? "Saved" : "Save Course"}
      </button>
    </div>
  );
};

export default React.memo(CourseCard);