import './Card.css'
import Price from "./Price"
export default function Card({title,features,oldP,newP}){

    return(
        <div className="card-Price-div">
           <div className="Card-div">
        <h4>{title}</h4>
        <ul>
        <li>{features[0]}</li>
        <li>{features[1]}</li>
        </ul>
        </div>
        <div className="Price-div">
        <Price oldP= {oldP} newP={newP}/>
        </div>
        </div>
    )
}