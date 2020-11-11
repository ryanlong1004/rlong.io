import React from "react";
import "../../styles/main.scss";
import { TypingSimulator } from "../../js/typing_simulator";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerDidMount: false };
  }

  componentDidMount() {
    this.setState({ headerDidMount: true });
  }

  render() {
    return (
      <header className="text-white">
        <div className="container-fluid d-flex align-items-start"></div>
        <div class="row" style={{
          "padding-top": "100px"
        }}>
          <div class="col-12">
            <h1>Unlock your business reach with a complete, affordable Web Site.</h1>
          </div>
          <div class="col-12">
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
