import React from "react";
import "./body.css";

function Body() {
  return (
    <div className="man">
      <div className="man1">
        <h4>Recent posts</h4>
        <h6>View all</h6>
      </div>

      <div className="man1">
        <div className="man2">
          <h5>Making a design system from scratch</h5>
          <div className="man3">
            <h6>12 Feb 2020</h6>
            <div className="line"></div>
            <h6>Design, Pattern</h6>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="man5">
          <h5>Making a design system from scratch</h5>
          <div className="man4">
            <h6>12 Feb 2020</h6>
            <div className="line"></div>
            <h6>Design, Pattern</h6>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
