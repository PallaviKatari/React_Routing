import React, { Component } from 'react'
//npm install react-jss for css
import {createUseStyles} from 'react-jss'
 
const styles = createUseStyles({
  student : {
    marginTop :'50px',
    marginLeft :'100px',
    border : '5px solid purple',
    width: '40%',
    listStyleType:'none'
  },
 
  studentDetails : {
    color : 'blue',
    fontSize : '24px'
  }
})
 
const StudentList = (props) => {
  const classes = styles()
  const {name, classNo, roll, addr} = props
  return(
    <ul className={classes.student}>
      <li className={classes.studentDetails}>Name : {name}</li>
      <li className={classes.studentDetails}>Class: {classNo}</li>
      <li className={classes.studentDetails}>Roll: {roll}</li>
      <li className={classes.studentDetails}>Address : {addr}</li>
    </ul>
  )
}
 
export default StudentList;