import React from "react";
import "../../styles/main.scss";
import { Input } from "./Input";

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-paper-plane"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form
              id="contactForm"
              name="contact"
              method="POST"
              data-netlify-recaptcha="true"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Input
                label="Name"
                id="name"
                type="text"
                placeholder="Name"
                required={true}
                validationMessage="Please enter your name"
              />
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="Message"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
