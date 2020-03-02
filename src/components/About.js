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
            <div className="col-sm-8">
              <h3>Meet Charllieya Smith</h3>
              <p>
                Charllieya graduated with a B.S. in Computer Science in 2017
                from Tougaloo College. She found out about the Mississippi
                Coding Academy (MSCA) while researching different opportunities
                that could help me further my education in coding as well as
                allow me to continue to craft and better my skills. I think my
                favorite thing about software development is that it is very
                diverse in topics and careers. I can learn about IT as well as
                building a webpage and the best thing about it is that
                everything coincides with one another.
              </p>
            </div>{" "}
            <div className="col-sm-4">
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
