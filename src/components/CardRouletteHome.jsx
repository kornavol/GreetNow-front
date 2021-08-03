import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardRouletteAnimation from './CardRouletteAnimation';
import './css/CardRouletteHome.css';

const CardEditor = () => {
    return (
        <section id="card-roulette-home-container" data-aos="fade-up" data-aos-duration="1000">
            <Link to="intro-container" smooth={true} duration={1000} offset={-250}><ExpandLessIcon style={{fontSize:'10vmin'}}/></Link>
            <div className="card-roulette-sub-container">
                
                    <CardRouletteAnimation/>
                
            </div>
            <Link to="img-catalog" smooth={true} duration={1000} offset={-95}><ExpandMoreIcon style={{fontSize:'10vmin'}}/></Link>
        </section>
    );
}

export default CardEditor;