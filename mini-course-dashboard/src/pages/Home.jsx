import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Course Dashboard</h1>

      <Link to="/courses">
        <button>Explore Courses</button>
      </Link>
    </div>
  );
};

export default Home;