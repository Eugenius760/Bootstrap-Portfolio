import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
  
  export default App;