import './css/NavDesktop.css';
import { NavLink } from 'react-router-dom';

export default function NavDesktop() {
    return (
        <>
            <NavLink
                exact
                className="nav-item"
                activeClassName="active"
                to="/"
            >Home</NavLink>

            <NavLink
                exact
                className="nav-item"
                activeClassName="active"
                to="/card"
            >Card</NavLink>

            <NavLink
                exact
                className="nav-item"
                activeClassName="active"
                to="/about-us"
            >About Us</NavLink>

            <NavLink
                exact
                className="nav-item"
                activeClassName="active"
                to="/contact-us"
            >Contact Us</NavLink>

            <NavLink
                exact
                className="nav-item"
                activeClassName="active"
                to="/impressum"
            >Impressum</NavLink>
        </>
    )
}
