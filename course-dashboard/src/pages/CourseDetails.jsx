import { useParams, Link } from "react-router-dom";
import courses from "../data/coursesData";

const CourseDetails = ({
  saveCourse,
  savedCourses
}) => {
  const { courseId } = useParams();

  const course = courses.find(
    (item) => item.id === Number(courseId)
  );

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const alreadySaved = savedCourses.find(
    (item) => item.id === course.id
  );

  return (
    <div>
      <h1>{course.title}</h1>

      <p>Category: {course.category}</p>

      <p>Duration: {course.duration}</p>

      <p>Level: {course.level}</p>

      <p>Price: ₹{course.price}</p>

      <p>{course.description}</p>

      <button
        disabled={alreadySaved}
        onClick={() => saveCourse(course)}
      >
        {alreadySaved ? "Saved" : "Save Course"}
      </button>

      <br />

      <Link to="/courses">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CourseDetails;