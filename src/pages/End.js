import React from "react";
import "./End.css";
import img from "./image/john.png";
import img1 from "./image/faith.png";
import img2 from "./image/jasper.png";
import img3 from "./image/Footer.png";

function End() {
  return (
    <div className="john">
      <div className="john1">
        <h5>Featured works</h5>
      </div>
      <div className="john3">
        <div className="john2">
          <img src={img} />
        </div>
        <div className="john4">
          <h2>Designing Dashboards</h2>
          <div className="john6">
            <button className="john5">2020</button>
            <h6 className="john7">Dashboard</h6>
          </div>
          <p className="john8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="john9">
        <hr></hr>
      </div>
      <div>
        <div className="john3">
          <div className="john2">
            <img src={img1} />
          </div>
          <div className="john4">
            <h2>Vibrant Portraits of 2020</h2>
            <div className="john6">
              <button className="john5">2018</button>
              <h6 className="john7">Illustration</h6>
            </div>
            <p className="john8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="john9">
          <hr></hr>
        </div>
      </div>
      <div>
        <div>
          <div className="john3">
            <div className="john2">
              <img src={img2} />
            </div>
            <div className="john4">
              <h2>36 Days of Malayalam type</h2>
              <div className="john6">
                <button className="john5">2018</button>
                <h6 className="john7">Typography</h6>
              </div>
              <p className="john8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="john9">
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="john10">
        <img src={img3} />
      </div>
    </div>
  );
}

export default End;
