import '../styles/footer.css'
import { Link } from 'react-router-dom'
export default function MyFooter(props){
    return(
        <nav>
            <h1>Lolo's</h1>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}