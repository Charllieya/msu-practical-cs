import React from "react"; //opening line
// import { Link } from 'react-router-dom'

//empty tag brackets <> & </> in a react component you can only return ONE thing. The way around that is too surround two siblings with empty tags, which makes it seem like you only are returning one thing, a lot there are two things instead that one thing. Its like wrapping in an invisible one thing.

//[footer]: brackets don't mean anything, they are just placeholders.

const Footer = () => {
  return (
    <>
      <div className="colophon">
        <footer className="container"> [footer] </footer>{" "}
      </div>
    </>
  );
};

export default Footer;

// export the const of footer
