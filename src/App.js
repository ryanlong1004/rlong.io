import CssBaseline from "@material-ui/core/CssBaseline";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Container from "@material-ui/core/Container";
import "./styles/main.scss";
import useBookSearch from './useBookSearch';




function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  useBookSearch(query, pageNumber)
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <Container maxwidth="sm">
          <Hero />
          <input type="text" onChange={handleSearch}></input>
          <div>Title</div>
          <div>Title</div>
          <div>Title</div>
          <div>Title</div>
          <div>Loading...</div>
          <div>Error</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
