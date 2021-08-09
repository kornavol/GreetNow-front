import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardRouletteAnimation from './CardRouletteAnimation';
import './css/CardRouletteHome.css';

const CardEditor = () => {
    return (
        <section id="card-roulette-home-container" data-aos="fade-up" data-aos-duration="1000">
            <Link className="scroll-up" to="intro-container" smooth={true} duration={1000} offset={-250}>
                <ExpandLessIcon style={{fontSize:'4vmin'}}/>
                Scroll Up
            </Link>
            <div className="star-container">
                <div className="star star1"></div>
                <div className="star star2"></div>
                <div className="star star3"></div>
                <div className="star star4"></div>
                <div className="star star5"></div>
                <div className="star star6"></div>
                <div className="star star7"></div>
                <div className="star star8"></div>
            </div>
            <div className="card-roulette-sub-container">
                
                    <CardRouletteAnimation/>
                
            </div>
            <Link className="scroll-down" to="img-catalog" smooth={true} duration={1000} offset={-95}>
                Scroll Down
                <ExpandMoreIcon style={{fontSize:'4vmin'}}/>
            </Link>
        </section>
    );
}

export default CardEditor;