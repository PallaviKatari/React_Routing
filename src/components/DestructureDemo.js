import React from 'react';

const Message = (props) => {  
  
    return(  
        <div>  
              <legend>Personal Details</legend><br/>  
              Name : {props.personalinfo.name}<br/>  
              address : {props.personalinfo.address}<br/>  
              zipcode : {props.personalinfo.zipcode}<br/>  
              city : {props.personalinfo.city}<br/>  
              contactnumber : {props.personalinfo.contactnumber}<br/>  
      
              <legend>Professional Detail</legend><br/>  
              occupation : {props.professionalinfo.occupation}<br/>  
              designation : {props.professionalinfo.designation}<br/>  
              salary : {props.professionalinfo.salary}<br/>  
       </div>  
      )  
    }  
      
    export default Message; 
