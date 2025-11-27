export default function MyBubble(props){
    return(
       <div className="bubble mine">
        <p>{props.username ? props.username : "MeUser"}</p>
        <p>{props.text ? props.text : "This is my testing Text"}</p>
       </div>
    )
}