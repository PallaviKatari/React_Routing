// frontend/src/componenets/dashboard/Dashboard.js

import React, { Component } from "react";
import StudentList from "./ComponentStyling";

class Dashboard extends Component {
  render() {
    return (
      <div>
      <StudentList
        name='Nischitha'
        classNo='React'
        roll='01'
        addr='Hyderabad'
      />
      <StudentList
        name='Rohan'
        classNo='React'
        roll='02'
        addr='Karnataka'
      />
      <StudentList
        name='Sangamesh'
        classNo='React'
        roll='03'
        addr='Bangalore'
      />
      <StudentList
        name='Deepak'
        classNo='React'
        roll='04'
        addr='Pune'
      />
      <StudentList
        name='Sridhar'
        classNo='React'
        roll='05'
        addr='Bangalore'
      />
    </div>
    );
  }
}

export default Dashboard;