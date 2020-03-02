import React from "react"; //opening line
// import { Link } from 'react-router-dom'

//empty tag brackets <> & </> : in a react component you can only return ONE thing. The way around that is too surround two siblings with empty tags, which makes it seem like you only are returning one thing, a lot there are two things instead that one thing. Its like wrapping in an invisible one thing.

//[about]: brackets don't mean anything, they are just placeholders.

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>ABOUT THE AUTHOR</h2>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h3>Meet Charllieya Smith</h3>
              <p>
                Charllieya graduated from Tougaloo College with a Bachelor of
                Science degree in Computer Science in 2017. She found out about
                the Mississippi Coding Academy (MSCA) while researching
                different opportunities that could help her further her
                education in coding as well as allow her to continue to craft
                and better her skills. Charllieya's favorite thing about
                software development is that it is very diverse in topics and
                careers.
              </p>
              <p>
                <a
                  href="https://charllieya.github.io/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Link To Portfolio Page
                </a>
              </p>
            </div>
            <div className="col-sm-5">
              <img
                className="img-responsive main-img"
                src="/img/Charllieya.jpg"
                alt="profile"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
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

export default About;
