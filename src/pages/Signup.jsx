// import { SignUp } from "@clerk/clerk-react";

// export default function Signup(){
//     return(
//         <SignUp signInUrl="/login" forceRedirectUrl={'/user'}/>
//     )
// }


import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import '../styles/login.css'

export default function Signup(){



    return(
        <div className="login_page">
            <section className="signInForm">
                <SignUp signInUrl="http://localhost:5173/signup" forceRedirectUrl={'/user'}/>
            </section>

            <section className="image">
                <Link to={'/'}>Back to Home</Link>
            </section>
        </div>
    )
}