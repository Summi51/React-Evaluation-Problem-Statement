import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "../styles/navbar.css";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ savedCount }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "10px",
        background: theme === "light" ? 'white' : 'black',
        color: theme === "light" ? "black" : "white"
      }}
    >
      <NavLink to="/">Home </NavLink>

      <NavLink to="/courses">Courses </NavLink>

      <NavLink to="/saved">
        Saved ({savedCount})
      </NavLink>

      <NavLink to="/about">About </NavLink>

      <button onClick={toggleTheme}>
        {theme === "light"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;