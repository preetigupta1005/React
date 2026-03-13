import { useState } from "react";
import Commentform from "./Commentform";

export default function Comment(){
    let [comments,setcomments]=useState([
        
    ]);

let addNewComment = (comment)=>{
    setcomments((Currcomment)=>[...Currcomment,comment]);
};
return(
    <>
    <div>
    <h4>ALL COMMENT</h4>
    {comments.map((comment,idx)=>(
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating={comment.rating})</span>
                <p> -{comment.username}</p>
             </div>
        ))}
        </div>
        <hr></hr>
        <Commentform addNewComment={addNewComment}/>
    
   
   </>

);
}
