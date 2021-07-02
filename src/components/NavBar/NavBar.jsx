import './css/NavBar.css';

import { useState, useEffect } from 'react';

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
        <>
            <Nav/>
        </>
    );
}

export default NavBar;
