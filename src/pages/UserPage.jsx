import { UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function UserPage(){

    const [isHandled, setIsHandled] = useState(true)
    const navigate = useNavigate()

    const handleChat = async () => {
       try {
            const result = await fetch('http://localhost:12343/chatInit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({
                    id: 'user_001'
                })
            })
            const data = await result.json();
            if(result && result.ok){
                navigate('/chat')
                console.log(data)
            } 
            else if(result.status === 0) {
                setIsHandled(false)
                console.log("else:", result.status)
            }
       } catch (error) {
        if(error){
             setIsHandled(false)
             console.log(error)
        }
       }
    }

    return(
    <>
        <UserButton />
        <button className="chat" onClick={handleChat}>Chat</button>
        <p>{isHandled? "" : "Failed to Load your credentials"}</p>
    </>
        
    )
}