import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {" "}
              <h2> WELCOME TO MISSISSIPPI STATE UNIVERSITY LIBRARIES</h2>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="hero-wrapper">
        <div className="picture-hero-wrapper hero-edits container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="hero-edits">
                {" "}
                CLICK "ALL GUIDES" TO ACCESS GUIDE SERVICES{" "}
              </h2>
              <h4>Services Provided For: </h4>
              <ul>
                <li>Undergraduate Students</li>
                <li>Graduate Students</li>
                <li>Faculty and Instructors</li>
                <li>Scholars</li>
                <li>Alumni</li>
              </ul>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="news-section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>What's Happening at MSU?</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>MSU News</h3>
              <img
                className="msuStaff-img"
                src="/img/msuStaff.png"
                alt="MSU Libraries"
                srcset=""
              />
            </div>
            <div className="col-sm-4">
              <h3>Workshops</h3>
              <ol>
                <li>Crafting the Winning Curriculum Vitae (Online)</li>
                <li>Using Chicago and Turabian Citation Style</li>
                <li>Using APA Citation Style</li>
                <li>Introduction to EndNote Desktop (Online)</li>
                <li>Introduction to ICPSR</li>
                <li>
                  Thesis and Dissertation Formatting ADA Web-Accessibility
                </li>
              </ol>
            </div>
            <div className="col-sm-4">
              <h3>About MSU Libraries</h3>
              <p>
                We are committed to Mississippi State University's overall goals
                of teaching, research, and service, and to making MSU Libraries
                "The Place" with the facilities, services, resources,
                assistance, and support that you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
