import { Link, Outlet } from "react-router-dom"


const Header = () => {
    return (
        <header className="header" >
            <h4>Demo Application</h4>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactus">ContactUs</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header