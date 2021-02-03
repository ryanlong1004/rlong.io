import React from "react";
import Header from "./components/header/Header";
import { Container } from '@material-ui/core';
// import Pricing from "./components/pricing/Pricing"
import Calendly from "./components/calendly/Calendly";
import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Drawer from "./components/navbar/NavbarNew"

import { Footer, Copyright, ScrollTop } from "./components/footer/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        {/* <Navbar /> */}
        <Header />
        <Drawer />
        {/* <Pricing /> */}
        {/* <Discord /> */}
        <About />
        <Contact />


        <Calendly />



        <Footer />
        <Copyright />
        <ScrollTop />
      </Container>
    </div>
  );
}

export default App;
