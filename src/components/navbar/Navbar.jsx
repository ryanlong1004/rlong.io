import React from "react";
import "../../styles/main.scss";
import logo from "./img/rect_white_standard.png";
import { Link, JumpLink } from "./Links.tsx";
import resume from "../../docs/resume.pdf";

class Navbar extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div id="page-top">
        <nav
          className="navbar navbar-expand-lg text-uppercase fixed-top navbar-body"
          id="mainNav"
        >
          <BodyNav />
          <div className="container-fluid">
            <button
              className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary rounded"
              type="button"
              data-toggle="collapse"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <JumpLink name="portfolio"></JumpLink>
                <JumpLink name="about"></JumpLink>
                <JumpLink name="contact"></JumpLink>
                <Link name="resume" href={resume} target="blank"></Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function BodyNav(props) {
  return (
    <a
      className="navbar-brand navbar-expand js-scroll-trigger"
      href="#page-top"
    >
      <img className="navbar-logo" src={logo} alt="logo"></img>
    </a>
  );
}

export default Navbar;
