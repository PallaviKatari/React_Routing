import React,{Component} from "react"; 
import Message from "./DestructureDemo";
// Destructuring is really a simple concept that can make code more readable and clear, 
// especially when passing down props in React.	
class Destructure extends Component {  
    render(){  
             const personalinfo =  
             {  
                      name: "John",  
                      address: "DLithe",  
                      zipcode: "111111",  
                      city: "Bangalore",  
                      contactnumber: "9876543210"  
             }  
             const professionalinfo =  
             {  
                      occupation : "Software Developer",  
                      designation : "Angular Developer",  
                      salary : "50k"  
             }  

             return (  
                      <div className="App">    
                               <Message personalinfo={personalinfo} professionalinfo={professionalinfo} >  
                               </Message>  
                      </div>  
             );  
    }  
}  

export default Destructure;
