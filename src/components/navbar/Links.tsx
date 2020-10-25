import React from "react";
import "../../styles/main.scss";

interface JumpLinkProps {
  name: string;
}

function JumpLink(props: JumpLinkProps) {
  return (
    <li className="nav-item mx-0">
      <a className="nav-link mx-3" href={"#" + props.name}>
        {props.name}
      </a>
    </li>
  );
}

interface LinkProps {
  href: string;
  name: string;
}

function Link(props: LinkProps) {
  return (
    <li className="nav-item mx-0">
      <a className="nav-link mx-3" href={props.href}>
        {props.name}
      </a>
    </li>
  );
}

export { JumpLink, Link };
