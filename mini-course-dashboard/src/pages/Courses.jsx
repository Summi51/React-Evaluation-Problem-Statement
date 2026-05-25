import { useState, useMemo, useRef } from "react";
import courses from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const Courses = ({ saveCourse, savedCourses }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const inputRef = useRef();

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        course.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Courses</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search courses"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={focusInput}>
        Focus Search
      </button>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>AI</option>
        <option>Data</option>
      </select>

      <p>Showing {filteredCourses.length} courses</p>

      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          saveCourse={saveCourse}
          savedCourses={savedCourses}
        />
      ))}
    </div>
  );
};

export default Courses;