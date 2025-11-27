import '../styles/WhyCard.css'
export default function WhyCard(props){
    return(
        <div className="card">
            <img src={props.icon} alt={props.alt} className={`icon ${props.sClass}`} />
            <div className="text">
                <h2>{props.textHead}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}