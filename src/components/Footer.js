import React from "react"; //opening line
// import { Link } from 'react-router-dom'

//empty tag brackets <> & </> in a react component you can only return ONE thing. The way around that is too surround two siblings with empty tags, which makes it seem like you only are returning one thing, a lot there are two things instead that one thing. Its like wrapping in an invisible one thing.

//[footer]: brackets don't mean anything, they are just placeholders.

const Footer = () => {
  return (
    <>
      <div className="footer-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4>ABOUT MSU LIBRARIES</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ul>
                <li>395 Hardy Rd.</li>
                <li>
                  P.O. Box 5408 <li>Mississippi State, MS 39762-5408</li>
                </li>
                <li>(662) 325-7668</li>
                <li>(662) 325-0011</li>
                <li>(662) 325-8183</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>About</li>
                <li>Library Hours</li>
                <li>Directions, Maps, and Parking</li>
                <li>Jobs</li>
                <li>Departments</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Libraries and Centers</li>
                <li>Special Collections</li>
                <li>Special Events</li>
                <li>Giving to MSU Libraries</li>
                <li>Muesums and Exhibits</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>All Guides</li>
                <li>Workshops</li>
                <li>Tutorials</li>
                <li>Library Instruction</li>
                <li>Software Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="colophon">
        <footer className="container">
          <div className="row">
            <div className="col-sm-8">
              <p>
                Copyright &copy; 2020 Charllieya Smith. All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </footer>{" "}
      </div>
    </>
  );
};

export default Footer;

// export the const of footer
