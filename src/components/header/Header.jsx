/** @jsx jsx */
import React from "react";
import "../../styles/main.scss";
import { jsx } from "@emotion/react";
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
      <header className="text-white">
        <div className="container-fluid d-flex align-items-start"></div>
        <div className="row-fluid" style={{
          // "padding-top": "20%",
        }}>
          <div className="col-lg-12 col-xl-3 offset-xl-9 text-left">
            <Container>
              <form>
                <div className="form-row">
                  <div className="col">
                    <h1>Getting on the web is expensive.</h1>
                    <br />
                    <h2>It shouldn't be.</h2>
                    <br />
                    <p>Whether it's a website advertising your lawncare business, or a web application dashboard to display your company's critical statistics, we've got you covered.</p>
                    <p><i>rlong.io</i>. offers affordable solutions to fit your needs.</p>
                    <p>Send your email address below and a human will contact you.</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send</button>
                  </div>
                </div>
              </form>
              </Container>
            </div>
          </div>
      </header >
    );
  }
}

export default Header;

