import React from "react";
import "../../styles/main.scss";

interface DividerProps {
  icon: string;
}

class Divider extends React.Component<DividerProps> {
  constructor(props: DividerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className={`fas ${this.props.icon}`}></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    );
  }
}

export default Divider;
