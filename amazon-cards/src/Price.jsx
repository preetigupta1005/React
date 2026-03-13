import './Price.css'
export default function Price({oldP,newP}){
    return <div className="Pricediv">
    <span style={{textDecoration:"line-through"}}> {oldP}  </span> &nbsp; <span>{newP}</span>
    </div>
}