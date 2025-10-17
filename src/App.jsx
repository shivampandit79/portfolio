import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "../src/App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
