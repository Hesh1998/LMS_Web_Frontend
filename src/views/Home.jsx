import React from "react";
import "../style/home.css";
import SliderImg from "../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className="Navbar">
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

          <div className="serach">
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search here.."
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </nav>
      </div>

      <div className="slider">
        <img className="image1" src={SliderImg} alt="home slider Image " />
      </div>

      <div className="courses">
        <h2 className="course">Trending Courses</h2>
      </div>
    </>
  );
};

export default Home;
