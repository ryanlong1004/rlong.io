/** @jsx jsx */
import React from "react";
import "../../styles/main.scss";
import { jsx } from "@emotion/react";
import { Grid } from "@material-ui/core"
import styled from "@emotion/styled";



const Container = styled("div")`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.99);
  color: black;
  font-family: 'Lato', sans-serif;
`;

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
      <header>
        <Grid>

        </Grid>
      </header>
    );
  }
}

export default Header;

