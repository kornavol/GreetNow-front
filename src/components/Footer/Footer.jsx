import React from 'react';
import './css/Footer.css';

import FootNav from './FootNav';


export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer>
            <FootNav/>
            <p>Greet Now <span>&#169;</span> {year}</p>
        </footer>
    )
}
