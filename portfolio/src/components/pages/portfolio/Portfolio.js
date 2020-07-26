import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from "../Projects/Projects"
function Portfolio() {
    return (
        <div className="container col-md-9 portfolio">
            <div className="row">
                <div className="col-md-4">
                    <h2>Porfolio</h2>
                </div>
            </div>
            <div className="row">
                <div className="card col-md-6 port-pic" style={{width: "18rem"}}>
                <a href="https://github.com/Eugenius760"><img src={require("./github_PNG20.png")} className="card-img-top" /></a>
                </div>
                <div className="card col-md-6 port-pic" style={{width: "18rem"}}>
                <a href="https://www.linkedin.com/in/darryl-williams-ii-70340750"><img src={require("./LinkedIn-Logo.png")} className="card-img-top" /></a>
                </div>
            </div>
            <div class="row">
                <div class="card col-md-6 port-pic" style="width: 18rem;">
                    <a id="res" href="assets/PDF/Resume of Darryl Williams.pdf">Resume</a>
                    <a href="assets/PDF/Resume of Darryl Williams.pdf"><i class="far fa-file-pdf card-img-top"></i></a>
                </div>
                <div class="card col-md-6 port-pic" style="width: 18rem;">
                    <Link to ={`/projects/${Projects}`} id="res" >Projects & Homework</Link>
                   <Link to ={`/projects/${Projects}`}><img src={require("./computer.jpeg")} class="card-img-top pro-pic" /></Link>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;