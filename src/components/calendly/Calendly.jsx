/** @jsx jsx */
import React from "react";
import "../../styles/main.scss";
import { jsx } from "@emotion/react";
// import styled from "@emotion/styled";



// const Container = styled("div")`
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
//         0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   background-color: white;
//   padding: 30px;
//   border-radius: 15px;
//   background-color: rgba(255, 255, 255, 0.99);
//   color: black;
//   font-family: 'Lato', sans-serif;
// `;

class Calendly extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerDidMount: false };
  }

  componentDidMount() {
    this.setState({ headerDidMount: true });
  }

  render() {
    return (
      <div className="col" style={{ minHeight: "670px" }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/ryanlong1004/30min"
            style={{ height: "670px" }}
          ></div>
        </div>
    );
  }
}

export default Calendly;

