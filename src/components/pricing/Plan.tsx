import React from "react";
import "../../styles/main.scss";

interface PlanProps { 
  name: string,
  cost: string,
  features: any[],
  destination: string
}

interface Feature { 
  name: string,
  cost: string,
  isChecked: false
}

class Plan extends React.Component<PlanProps> {

  render() {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <PlanName name={this.props.name} />
            <PlanCost cost={this.props.cost} />
            <hr />
            <PlanFeatures features={this.props.features} />
            <a href="/" className="btn btn-block btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function PlanName(props: { name: string }) {
  return (
    <h5 className="card-title text-muted text-uppercase text-center">
      {props.name}
    </h5>
  );
}

function PlanCost(props: { cost: string }) {
  return (
    <h6 className="card-price text-center">
      ${props.cost}
      <span className="period">/month</span>
    </h6>
  );
}

function PlanFeature(props: {
  isChecked: boolean;
  content: string;
  idx: number;
}) {
  return (
    <li key={props.idx} className={props.isChecked ? "" : "text-muted"}>
      <span className="fa-li">
        <i className={props.isChecked ? "fas fa-check" : "fas fa-times"}></i>
      </span>
      {props.content}
    </li>
  );
}

function PlanFeatures(props: { features: Feature[] }) {
  const features: Feature[] = props.features;
  console.log(features);
  if (!features) {
    return <ul className="fa-ul"></ul>;
  }
  let featureElements = features.map((value, index) => {
    return PlanFeature({
      isChecked: value.isChecked,
      content: value.name,
      idx: index,
    });
  });
  console.log(featureElements);
  return <ul className="fa-ul">{featureElements}</ul>;
}

export { Plan };
