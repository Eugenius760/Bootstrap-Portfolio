import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Nav from "./components/pages/Nav/Nav";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Projects from "./components/pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
