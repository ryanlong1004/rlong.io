import React from "react";
import { Plan } from "./Plan";
import "../../styles/main.scss";
import plans from "./plans.json";

class Pricing extends React.Component {
  
  public x: any;
  
  constructor(props: any) {
    super(props);
    this.x = plans.map((data) => {
      return {
        name: data.name,
        cost: data.cost,
        features: data.features,
        destination: data.destination,
      }
    });
  }

  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Plan
              name="Test"
              cost="29.99"
              destination="/"
              features={this.x.features}
            ></Plan>
            <Plan
              name="Test"
              cost="29.99"
              destination="/"
              features={this.x.features}
            ></Plan>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
