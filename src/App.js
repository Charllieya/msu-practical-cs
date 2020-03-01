import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"; //Alias BrowserRouter to Router
// import logo from './logo.svg';
// import "./App.css";

import Home from "./components/Home";
import GuideSection from "./components/GuideSection";
import About from "./components/About";
import GuideSingle from "./components/GuideSingle";
import Header from "./components/Header"; //on every page
import Footer from "./components/Footer"; //on every page

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />{" "}
        <Route path="/guidesection" component={GuideSection} />{" "}
        <Route path="/about" component={About} />{" "}
        <Route path="/guide/:id" component={GuideSingle} />{" "}
        <Route render={() => <Redirect to="/" />} />{" "}
      </Switch>{" "}
      <Footer />
    </Router>
  );
};

export default App;
