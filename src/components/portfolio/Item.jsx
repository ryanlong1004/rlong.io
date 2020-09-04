import React from "react";
import "../../styles/main.scss";

function Item(props) {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-toggle="modal"
        data-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img
          className="img-fluid"
          src={require(`./img/${props.data.name}`)}
          alt="This is an"
        />
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div
      className="portfolio-modal modal fade"
      id="portfolioModal1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="fas fa-times"></i>
            </span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* <!-- Portfolio Modal - Title--> */}
                  <h2
                    className="portfolio-modal-title text-secondary text-uppercase mb-0"
                    id="portfolioModal1Label"
                  >
                    Log Cabin
                  </h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {/* <!-- Portfolio Modal - Image--> */}
                  {/* <img
                    className="img-fluid rounded mb-5"
                    src={require(`./img/${props.data.name}`)}
                    alt="This is an"
                  /> */}
                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn btn-primary" data-dismiss="modal">
                    <i className="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Item, Modal };
