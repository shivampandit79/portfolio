import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./App.css"; // Global CSS include karna na bhoolna

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
