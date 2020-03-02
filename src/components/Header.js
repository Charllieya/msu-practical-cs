import React from "react"; //opening line
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="branding">
        <header className="headername container">
          <div className="row">
            <div className="hidden-xs col-sm-1">
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
              <span className="span-header">UNIVERSITY LIBRARIES</span>{" "}
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
