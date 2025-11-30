import OtherBubble from '../components/OtherBubble'
import MyBubble from '../components/MyBubble'
import '../styles/chat.css'
import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'

const MessageBubble = memo(({ message, id }) => {
    if (message.user === id) {
        return <MyBubble text={message.text} username={message.sender_name} />;
    } else {
        return <OtherBubble text={message.text} username={message.sender_name} />;
    }
});

export default function Chat(){
    const [messageList, setMessageList] = useState([])
    const [userName, setuserName] = useState('');
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newMessage, setNewMessage] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                setLoading(true);
                const result = await fetch('http://localhost:12343/getChat', {
                    credentials: 'include'
                })                
                if (!result.ok) {
                    throw new Error(`HTTP error! status: ${result.status}`);
                }
                
                const data = await result.json();
                setMessageList(data.chat);
                setId(data.id)
                
                for (const message of data.chat){
                     if(message.user === data.id){
                        setuserName(message.sender_name)
                        break;
                    }
                }

            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchChatData();
    }, []); 

    const renderedMessages = useMemo(() => {
        return messageList.map((message, index) => (
            <MessageBubble 
                key={message.id || index} 
                message={message} 
                id={id}
            />
        ));
    }, [messageList, id]);

    const handleSendMessage = useCallback(async (e) => {
        e.preventDefault()
        
        if (!newMessage.trim()) return

        try {
            let newMessageObj = {
                id: `chat_${Date.now()}`,
                module_id: 1, 
                user: id,
                text: newMessage.trim()
            }

            const response = await fetch('http://localhost:12343/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(newMessageObj)
            })

            let renderedMessageObj = {
                id: `chat_${Date.now()}`,
                module_id: 1, 
                user: id,
                text: newMessage.trim(),
                sender_name: userName
            }

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setMessageList(prev => [...prev, renderedMessageObj])
            setNewMessage('') 

        } catch (error) {
            console.error('Error sending message:', error)
            alert('Failed to send message. Please try again.')
        }
    }, [newMessage, id, userName]);

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage(e)
        }
    }, [handleSendMessage]);

    const handleInputChange = useCallback((e) => {
        setNewMessage(e.target.value)
    }, []);

    const handleLogout = useCallback(async () => {
        try {
            const result = await fetch('http://localhost:12343/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
            if(result.ok){
                setTimeout(()=>{
                    navigate('/')
                }, 500)
            }
        } catch (error) {
            if(error) console.log("Logout Error: ", error)
            setLoading(true)
        }
    }, [navigate]);

    if (loading) {
        return <div className="loading">Loading messages...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return(
        <div className="chat-container">
            <div className="chat-header">
                <h1>Yaza It <span>Chat</span> </h1>
                <button onClick={handleLogout} className='logout'>Logout</button>
            </div>

            <div className="chat">
                {messageList.length > 0 ? renderedMessages : <div className="no-messages">No messages yet. Start the conversation!</div>}
            </div>

            <div className="chat-input-container">
                <form id="send" onSubmit={handleSendMessage}>
                    <textarea 
                        value={newMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message here..."
                        rows="1"
                        className="message-input"
                    ></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )  
}