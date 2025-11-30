import { useNavigate } from 'react-router-dom';
import '../styles/log.css'
import { useState } from 'react';

export default function Log(){
    const [logMessage, setLogMessage] = useState('')
    const navigate = useNavigate();

    const postLog = async (fname, pword) => {
    try {
        const response = await fetch('http://localhost:12343/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            credentials: 'include',
            body: JSON.stringify({
                firstname: fname,
                password: pword
            })
        })
        if(response.ok){
            setLogMessage("Login Successful")
            return true;
        }
        else{
            const data = await response.json();
            setLogMessage(data.message || "An Error Occurred")
            return false;
        }
    } catch (error) {
        setLogMessage("An error Occurred")
        console.error(error)
        return false;
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    let fname = e.target.firstname.value;
    let pword = e.target.password.value

    const success = await postLog(fname, pword); // Wait for login to complete
    if(success){
        // Add a small delay to ensure cookie is set
        setTimeout(() => {
            navigate('/chat');
        }, 1000);
    }
}

    return(
        <form className="log" id="log" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login to Chat</h1>
            <input type="text" name="firstname" id="firstname" placeholder='firstname'/>
            <input type="password" name="password" id="password" placeholder='password'/>
            <button type="submit">Log In</button>
            <p className='divider'>{logMessage}</p>
        </form>
    )
}



