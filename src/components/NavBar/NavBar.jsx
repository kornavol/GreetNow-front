import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink
                exact
                className = "nav-item" 
                activeClassName="active"
                to = "/"
            >Home</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/card"
            >Card</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/about-us"
            >About Us</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/contact-us"
            >Contact Us</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/impressum"
            >Impressum</NavLink>

            <button>
                <Link
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/auth"
            >Login</Link>
            </button>
        </nav>
    );
}

export default NavBar;
