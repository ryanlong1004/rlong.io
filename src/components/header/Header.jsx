import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import "../../styles/main.scss";
import { typingSimulator } from "../../js/typing_simulator";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerDidMount: false };
  }

  componentDidMount() {
    this.setState({ headerDidMount: true });

    var input = document.getElementById("tagline");
    var text = [
      "Hello, my name is Ryan...",
      "Let's create a website...",
      "Let's automate repetitive tasks...",
      "Let's mine data to find insights...",
      "Let's make ideas a reality...",
      "Ready?",
    ];
    typingSimulator(input, text);
  }

  render() {
    return (
      <header className="masthead text-white">
        <Navbar />
        <div className="container-fluid d-flex align-items-start">
          <div id="tagline-container">
            <div id="tagline" style={{ display: "block" }}>
              <div id="blinker" className="blink">
                &#9646;
              </div>
            </div>
          </div>

          <div className="divider-custom-line"></div>
        </div>
      </header>
    );
  }
}

export default Header;
