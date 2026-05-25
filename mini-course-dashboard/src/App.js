import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import SavedCourses from "./pages/SavedCourses";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import ThemeProvider from "./context/ThemeContext";

function App() {
  const [savedCourses, setSavedCourses] = useState([]);

  const saveCourse = useCallback((course) => {
    const exists = savedCourses.find((item) => item.id === course.id);

    if (exists) {
      alert("Course already saved");
      return;
    }

    setSavedCourses((prev) => [...prev, course]);
  }, [savedCourses]);

  const removeCourse = useCallback((id) => {
    setSavedCourses((prev) =>
      prev.filter((course) => course.id !== id)
    );
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar savedCount={savedCourses.length} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/courses"
            element={
              <Courses
                saveCourse={saveCourse}
                savedCourses={savedCourses}
              />
            }
          />

          <Route
            path="/courses/:courseId"
            element={
              <CourseDetails
                saveCourse={saveCourse}
                savedCourses={savedCourses}
              />
            }
          />

          <Route
            path="/saved"
            element={
              <SavedCourses
                savedCourses={savedCourses}
                removeCourse={removeCourse}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;