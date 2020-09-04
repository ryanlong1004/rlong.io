import React from "react";
import "../../styles/main.scss";

function Link(props) {
  return (
    <li className="nav-item mx-0">
      <a className="nav-link mx-3 js-scroll-trigger" href={"#" + props.name}>
        {props.name}
      </a>
    </li>
  );
}

export default Link;
