// frontend/src/App.js file

import React, { Component } from "react";
//npm install react-router-dom@6 and npm audit fix --force
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        
          <Routes>
            <Route path="signup" element={<Signup/>} />
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<yDashboard/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        
      </div>
    );
  }
}

export default App;