import './NavBar.css';

import { NavLink, Link } from 'react-router-dom';

import NavDesktop from './NavDesktop.jsx';
import NavMobile from './NavMobile.jsx';



const NavBar = () => {
    const useViewport = () => {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () => window.removeEventListener('resize', handleWindowResize);
        }, []);

        return width;
    }

    const Nav = () => {
        const width = useViewport();
        const breakpoint = 1000;

        return width < breakpoint? <NavMobile /> : <NavDesktop />
    }
    return (
        /* For different view of nav., neest transport a <NavLink> into proper Nav (desktop or mobile  ) */
        <nav>
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

            <button>
                <Link
                    exact
                    className="nav-item"
                    activeClassName="active"
                    to="/auth"
                >Login</Link>
            </button>
        </nav>
    );
}

export default NavBar;
