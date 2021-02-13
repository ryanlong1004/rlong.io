import React from "react";
import Calendly from "./components/calendly/Calendly.tsx";
import { Container } from '@material-ui/core';
// import Pricing from "./components/pricing/Pricing"
import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Drawer from "./components/navbar/NavbarNew"
import Album from "./components/album/Album"

import { Footer, Copyright, ScrollTop } from "./components/footer/Footer";
import "./styles/main.scss";



function App() {
  return (
    <div className="App">
      <Album></Album>
    </div>
  );
}

export default App;
