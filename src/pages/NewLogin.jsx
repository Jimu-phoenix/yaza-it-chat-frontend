import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import '../styles/login.css'

export default function NewLogin(){
    return(
        <div className="login_page">
            <section className="signInForm">
                <SignIn signUpUrl="http://localhost:5173/signup" forceRedirectUrl={'/user'}/>
            </section>

            <section className="image">
                <Link to={'/'}>Back to Home</Link>
            </section>
        </div>
    )
}