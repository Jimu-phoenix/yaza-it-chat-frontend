import '../styles/bubble.css'
export default function Chat(props){
    return(
       <div className="bubble other">
        <p>{props.username ? props.username : "OtherUser"}</p>
        <p>{props.text ? props.text : "This is others testing Text"}</p>
       </div>
    )
}