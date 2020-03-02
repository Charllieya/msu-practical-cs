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
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="colophon">
        <footer className="container">
          <div className="row">
            <div className="col-sm-8">
              <ul>
                <li>Page Update: </li>
                <li>Contact Us: </li>
                <li>Page Update: </li>
                <li>Page Update: </li>
              </ul>
            </div>
          </div>
        </footer>{" "}
      </div>
    </>
  );
};

export default Footer;

// export the const of footer
