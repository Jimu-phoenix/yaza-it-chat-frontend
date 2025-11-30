export default function OtherBubble({ text, username }) {
    return (
        <div className="message-bubble other-bubble">
            <div className="bubble-content">
                <span className="bubble-username">{username}</span>
                <div className="bubble-text">{text}</div>
            </div>
        </div>
    );
}