import React from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
