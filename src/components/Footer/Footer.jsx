import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import './css/Footer.css';

import FootNav from './FootNav';


export default function Footer() {

    const year = new Date().getFullYear();
    return (
        
        <footer>
            <FootNav/>
            <div className="social-media-icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <PinterestIcon/>
            </div>

            <div className="footer-logo">
                <p>Greet Now</p><span>&#169;</span>{year}</div>
            
        </footer>
    
    )
}
