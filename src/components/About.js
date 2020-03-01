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
            <h2>About the Author </h2>
          </div>{" "}
          {/* <img src="/img/flyer.png" alt="" /> */}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default About;
