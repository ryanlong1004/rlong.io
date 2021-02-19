import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer"
import { default as React } from "react";
import Hero from "./components/Hero";
import "./styles/main.scss";




function App() {
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
