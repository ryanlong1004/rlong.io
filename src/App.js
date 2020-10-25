import React from 'react';
import Header from "./components/header/Header"
import Pricing from "./components/pricing/Pricing"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Navbar from "./components/navbar/Navbar"

import { Footer, Copyright, ScrollTop } from "./components/footer/Footer"
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <Pricing /> */}
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <ScrollTop />
    </div>
  );
}

export default App;
