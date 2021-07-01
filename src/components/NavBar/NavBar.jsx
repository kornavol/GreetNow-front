import './css/NavBar.css';

import { useState, useEffect } from 'react';

import NavDesktop from './NavDesktop.jsx';
import NavMobile from './NavMobile.jsx';
import Login from '../Auth/Login';
import Register from '../Auth/Register';



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

    function login(){
        return <Login/>
    }

    function register(){
        return <Register/>
    }
    return (
        /* For different view of nav., neest transport a <NavLink> into proper Nav (desktop or mobile  ) */
        <nav>
            <Nav/>
            <button onClick={login}>
                Login
            </button>
            <button onClick={register}>
                Register
            </button>
        </nav>
    );
}

export default NavBar;
