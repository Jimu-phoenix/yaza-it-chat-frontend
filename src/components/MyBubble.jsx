export default function MyBubble({ text, username }) {
    return (
        <div className="message-bubble my-bubble">
            <div className="bubble-content">
                <span className="bubble-username">{username}</span>
                <div className="bubble-text">{text}</div>
            </div>
        </div>
    );
}