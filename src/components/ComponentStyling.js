import React, { Component } from 'react'
//npm install react-jss for css
import {createUseStyles} from 'react-jss'
 
const styles = createUseStyles({
  student : {
    marginTop :'50px',
    marginLeft :'100px',
    border : '5px solid black',
    width: '40%',
    listStyleType:'none'
  },
 
  studentDetails : {
    color : 'red',
    fontSize : '16px'
  },
  studentDetails1 : {
    color : 'blue',
    fontSize : '16px'
  },
  studentDetails2 : {
    color : 'green',
    fontSize : '16px'
  },
  studentDetails3 : {
    color : 'black',
    fontSize : '16px'
  }
})
 
const StudentList = (props) => {
  const classes = styles()
  const {name, classNo, roll, addr} = props
  return(
    <ul className={classes.student}>
      <li className={classes.studentDetails}>Name : {name}</li>
      <li className={classes.studentDetails1}>Class: {classNo}</li>
      <li className={classes.studentDetails2}>Roll: {roll}</li>
      <li className={classes.studentDetails3}>Address : {addr}</li>
    </ul>
  )
}
 
export default StudentList;