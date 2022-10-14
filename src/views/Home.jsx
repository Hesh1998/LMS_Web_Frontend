import React from "react";
import "../style/home.css";
import SliderImg from "../assets/home.jpg";
import Edu from "../assets/edu.jpg";

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

      <div class="category-name">Trending Courses</div>
      <div class="card-category-1">
        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>
      </div>

      <div class="card-category-1">
        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-aqua">
          <div class="card-content">
            <span class="card-title">Combined maths</span>
            <p class="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read more..</span>
            </a>
          </div>
        </div>
      </div>

      <div className="slider">
        <img className="image1" src={Edu} alt="home slider Image " />
      </div>
    </>
  );
};

export default Home;
