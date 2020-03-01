import React from "react"; //opening line
import { Link } from "react-router-dom";

//empty tag brackets <> & </> in a react component you can only return ONE thing. The way around that is too surround two siblings with empty tags, which makes it seem like you only are returning one thing, a lot there are two things instead that one thing. Its like wrapping in an invisible one thing.

//[header]: brackets don't mean anything, they are just placeholders.

const Header = () => {
  return (
    <>
      <div className="branding">
        <header className="headername container">
          <div className="row">
            <div className="col-sm-1">
              <img
                className="statelogo"
                src="/img/mstate_logo.png"
                alt="msstate logo"
                width="120"
              />
            </div>
            <div className="col-sm-7">
              {" "}
              <h1>MISSISSIPPI STATE UNIVERSITY&trade;</h1>
              <span>UNIVERSITY LIBRARIES</span>{" "}
            </div>{" "}
            <div className="links col-sm-4">
              <Link to="/" title="Home" className="title">
                {" "}
                Home{" "}
              </Link>{" "}
              <Link to="/guidesection" title="Guide" className="title">
                {" "}
                All Guides{" "}
              </Link>{" "}
              <Link to="/about" title="About" className="title">
                {" "}
                About{" "}
              </Link>{" "}
            </div>
          </div>
        </header>{" "}
      </div>{" "}
    </>
  );
};

export default Header;
