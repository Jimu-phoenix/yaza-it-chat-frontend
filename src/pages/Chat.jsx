import OtherBubble from '../components/OtherBubble'
import MyBubble from '../components/MyBubble'
import '../styles/chat.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Chat(){
    const [messageList, setMessageList] = useState([])
    // the user would have to be dynamic... that is gotten from the session..but for now
    const [userName, setuserName] = useState('');
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                setLoading(true);
                const result = await fetch('http://localhost:12343/getChat')
                
                if (!result.ok) {
                    throw new Error(`HTTP error! status: ${result.status}`);
                }
                
                const data = await result.json();
                setMessageList(data.chat);
                setId(data.id)
                console.log("Updated messageList:", data.chat);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchChatData();
    }, []); // Empty dependency array = run only once on mount

    // Log messageList when it actually updates
    useEffect(() => {
        console.log("messageList updated:", messageList);
    }, [messageList]); // This runs whenever messageList changes

    if (loading) {
        return <div>Loading messages...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

   const handleSendMessage = async (e) => {
        e.preventDefault()
        
        if (!newMessage.trim()) return

        try {
            // Create new message object
            const newMessageObj = {
                id: `chat_${Date.now()}`,
                module_id: 1, 
                user: id,
                text: newMessage.trim()
            }

            // Send message to backend
            const response = await fetch('http://localhost:12343/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessageObj)
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            
            setMessageList(prev => [...prev, newMessageObj])
            setNewMessage('') // Clear input

            console.log('Message sent successfully')

        } catch (error) {
            console.error('Error sending message:', error)
            alert('Failed to send message. Please try again.')
        }
    }
       const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage(e)
        }
    }

      const handleInputChange = (e) => {
        setNewMessage(e.target.value)
    }

    return(
        <>
            <p>Chat</p>
            <div className="chat">
                {messageList.length > 0 ? (
                    messageList.map((message, index) => {
                        if (message.id === id) {
                            console.log('Message Sender:',message.userName)
                            return <MyBubble key={index} text={message.text} username={message.user}/>;
                        } else {
                            console.log('Message Sender:',message.userName)
                            return <OtherBubble key={index} text={message.text} username={message.user}/>;
                        }
                    })
                ) : (
                    <div>No messages found</div>
                )}
            </div>

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
        </>
    )
}