import { useState } from "react";
export default function Commentform({addNewComment}){
    let [formData,setformData]=useState({
        username:"",
        remarks:"",
        rating:"5",
    })
    let handleInputChange=(event)=>{
        setformData((currData)=>{
            return {...currData,[event.target.name]: event.target.value}
        });
        };
    
    let handleSubmit= (event)=>{
        event.preventDefault();
        console.log(addNewComment);
        addNewComment(formData);
        
        setformData({
             username:"",
             remarks:"",
             rating:"5",
        });
   
    };
    
    return(
        
        <form onSubmit={handleSubmit}>
            <input placeholder="enter name" 
            type="text"
            value={formData.username} 
            onChange={handleInputChange} 
            name="username"/>
            
            <br></br><br></br>
            <textarea type="textarea"
            value={formData.remarks }
            onChange={handleInputChange}
            name="remarks" ></textarea>
              
            <br></br><br></br>

            <input 
            type="number"
            min={1} 
            max={5} 
            value={formData.rating} 
            onChange={handleInputChange}
            name="rating"
             ></input>
             <button type="Submit">  Add Button</button>
            </form>
       
    );
}