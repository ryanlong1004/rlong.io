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

    var input = document.getElementById("tagline");
    var text = [
      "Hello, my name is Ryan...",
      "Let's create a website...",
      "Let's automate repetitive tasks...",
      "Let's mine data to find insights...",
      "Let's make ideas a reality...",
      "Ready?",
    ];
    const ts = new TypingSimulator(input, text);
    ts.print();
  }

  render() {
    return (
      <header className="masthead text-white">
        <div className="container-fluid d-flex align-items-start">
          <div id="tagline-container">
            <div id="tagline" style={{ display: "block" }}>
              <div id="blinker" className="blink">
                &#9646;
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
