import React from 'react';
import Header from "./components/header/Header.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import { Footer, Copyright, ScrollTop } from "./components/footer/Footer.jsx"
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <ScrollTop />
    </div>
  );
}

export default App;
