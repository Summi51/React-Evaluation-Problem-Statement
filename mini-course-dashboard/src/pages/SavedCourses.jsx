import { useMemo } from "react";

const SavedCourses = ({
  savedCourses,
  removeCourse
}) => {
  const totalPrice = useMemo(() => {
    return savedCourses.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
  }, [savedCourses]);

  if (savedCourses.length === 0) {
    return <h2>No saved courses yet</h2>;
  }

  return (
    <div>
      <h1>Saved Courses</h1>

      <h3>Total Saved: {savedCourses.length}</h3>

      <h3>Total Price: ₹{totalPrice}</h3>

      {savedCourses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>

          <button
            onClick={() => removeCourse(course.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedCourses;