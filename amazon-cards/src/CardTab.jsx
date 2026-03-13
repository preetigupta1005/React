import './CardTab.css'
import Card from "./Card"
export default function CardTab(){
    const features=[["8000 DBI" , "5 Buttons"],["intutive Surfsce","For Ipad pro"],["wireless","optical orientation"]]
    return (
        <div className="card-container">
        <Card title="Mouse" features={features[0]} oldP="12,495" newP="8,999"/>
        <Card title="Apple Pencil" features={features[1]} oldP="11,900" newP="9,199"/>
        <Card title="Keyboard" features={features[2]} oldP="899" newP="278"/>
        </div>
    )

}