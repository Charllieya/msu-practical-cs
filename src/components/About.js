import React from "react"; //opening line
// import { Link } from 'react-router-dom'

//empty tag brackets <> & </> : in a react component you can only return ONE thing. The way around that is too surround two siblings with empty tags, which makes it seem like you only are returning one thing, a lot there are two things instead that one thing. Its like wrapping in an invisible one thing.

//[about]: brackets don't mean anything, they are just placeholders.

const About = () => {
  return (
    <>
      <h2>About the Author </h2>
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
            </div>{" "}
            <div className="col-sm-5">
              <img
                className="img-responsive main-img"
                src="/img/Charllieya.jpg"
                alt="profile picture"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default About;
