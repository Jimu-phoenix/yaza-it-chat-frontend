
export default function KeyError(props){
    let show = {
        display: "block"
    }
    let hide = {
        display: "none"
    }
    return(
        <div style={props.isAval ? show : hide}>
            <h1>
                Key Not Found!
            </h1>
        </div>
    )
}