// frontent/src/components/Home.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
        <h1>This is the home page</h1>
        <Link to="signup">Signup page</Link>
        <br></br>
        <Link to="login">Login page</Link>
        <br></br>
        <Link to="dashboard">ComponentStyling page</Link>
        <br></br>
        <Link to="form">FormValidation page</Link>
        <br></br>
        <Link to="condrend">ConditionalRendering page</Link>
        <br></br>
        <Link to="fragments">Fragments page</Link>
        <br></br>
        <Link to="dest">Destructure page</Link>
      </div>
    );
  }
}

export default Home;