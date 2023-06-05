import React from "react";
import "./about.css";
export default function About() {
  return (
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h2>About Me</h2>
          </div>
          <div class="content">
            <h3>Hi my name is Merve Deniz!</h3>
            <p>
              I am a fresh graduate computer engineer.My hobbies are playing guitar and singing.
            </p>
          </div>
          <div class="social">
            <a href="https://www.instagram.com/mervedenizsn/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* <div class="image-section">
          <img
            src="image/img one.jpg"
            alt="images"
          />
        </div> */}
      </div>
    </div>
  );
}
