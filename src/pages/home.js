import React from "react";
import "./home.css";
import img from "./image/Ellipse.png";

function Home() {
  return (
    <div className="faith1">
      <div className="faith2">
        <h1>Hi, I am John, Creative Technologist</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="faith3">Download Resume</button>
      </div>
      <div className="faith">
        <img src={img} />
      </div>
    </div>
  );
}

export default Home;
