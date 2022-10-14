import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <div>
      <nav class="nav-menu">
        <h2>Learning Management System</h2>
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
