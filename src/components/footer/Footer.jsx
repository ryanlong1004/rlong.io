import React from "react";
import "../../styles/main.scss";

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* <!-- Footer Location--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Mayfield, PA
              <br />
              Lackawanna County
            </p>
          </div>
          {/* <!-- Footer Social Icons--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ryanrlong/">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
          </div>
          {/* <!-- Footer About Text--> */}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">‪(347) 450-1061‬</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Copyright() {
  return (
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright © Your Website 2020</small>
      </div>
    </div>
  );
}

function ScrollTop() {
  return (
    <div className="scroll-to-top d-lg-none position-fixed">
      <a
        className="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export { Footer, Copyright, ScrollTop };
