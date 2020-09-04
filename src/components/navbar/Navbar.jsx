import React from "react";
import "../../styles/main.scss";
import logo from "./img/rect_white_standard.png";
import Link from "./Link.jsx";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerDidMount: false,
      isUserInHeader: true,
    };
  }

  componentDidMount() {
    var navbar = document.getElementById("mainNav");

    window.onscroll = function () {
      const limit = window.innerHeight * 0.9;
      if (
        document.body.scrollTop > limit ||
        document.documentElement.scrollTop > limit
      ) {
        toggleNavState(false);
        navbar.classList.remove("navbar-header");
        navbar.classList.add("navbar-body");
      } else {
        toggleNavState(true);
        navbar.classList.remove("navbar-body");
        navbar.classList.add("navbar-header");
      }
    };

    const toggleNavState = (bool) => {
      this.setState({ isUserInHeader: bool });
    };
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg text-uppercase fixed-top navbar-header"
        id="mainNav"
      >
        <Nav isUserInHeader={this.state.isUserInHeader} />
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link name="portfolio"></Link>
              <Link name="about"></Link>
              <Link name="contact"></Link>
              <Link name="resume"></Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function Nav(props) {
  return props.isUserInHeader ? HeaderNav() : BodyNav();
}

function HeaderNav(props) {
  return (
    <a
      className="navbar-brand navbar-expand js-scroll-trigger"
      href="#page-top"
    >
      rlong.io
    </a>
  );
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
