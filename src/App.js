import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer"
import { default as React } from "react";
import Hero from "./components/Hero";
import "./styles/main.scss";
import { Helmet } from "react-helmet";




function todaysDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}${mm}${dd}`
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Long - Software Engineer {todaysDate()}</title>
        <meta name="description" content="Ryan Long is a Software Engineer from the United States with nearly 10 years of experience in Front and Back end technologies." />
        <meta name='robots' content='index, follow' />


        {/* Open Graph */}
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Ryan Long - Software Engineer' />
        <meta property='og:description' content='Ryan Long is a Software Engineer from the United States with nearly 10 years of experience in Front and Back end technologies' />
        <meta property='og:image' content='https://pbs.twimg.com/profile_images/1360428892327186439/rhOQTKuF_400x400.png' />
        <meta property='og:url' content='rlong.io' />
        <meta property='og:site_name' content='rlong.io' />
        {/* Twitter */}
        <meta name='twitter:title' content='Ryan Long - Software Engineer' />
        <meta name='twitter:description' content='Ryan Long is a Software Engineer from the United States with nearly 10 years of experience in Front and Back end technologies' />
        <meta name='twitter:image' content='https://pbs.twimg.com/profile_images/1360428892327186439/rhOQTKuF_400x400.png' />
        <meta name='twitter:site' content='@ryanrlong' />
        <meta name='twitter:creator' content='@ryanrlong' />
      </Helmet>
      <CssBaseline />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
