import React from "react";
import "../../styles/main.scss";

import { Item, Modal } from "./Item";

function Portfolio() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i class="fas fa-suitcase"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row">
          <Item data={{ name: "cabin.png" }} />
          <Modal />
          <Item data={{ name: "cake.png" }} />
          <Item data={{ name: "circus.png" }} />
          <Item data={{ name: "game.png" }} />
          <Item data={{ name: "safe.png" }} />
          <Item data={{ name: "submarine.png" }} />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
