// frontend/src/componenets/dashboard/Dashboard.js

import React, { Component } from "react";
import StudentList from "./ComponentStyling";

class Dashboard extends Component {
  render() {
    return (
      <div>
      <StudentList
        name='John'
        classNo='React'
        roll='01'
        addr='Hyderabad'
      />
      <StudentList
        name='Peter'
        classNo='React'
        roll='02'
        addr='Karnataka'
      />
      <StudentList
        name='Jancy'
        classNo='React'
        roll='03'
        addr='Bangalore'
      />
      <StudentList
        name='Amy'
        classNo='React'
        roll='04'
        addr='Pune'
      />
      <StudentList
        name='Paul'
        classNo='React'
        roll='05'
        addr='Bangalore'
      />
    </div>
    );
  }
}

export default Dashboard;