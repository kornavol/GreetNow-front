import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardRouletteAnimation from './CardRouletteAnimation';
import balloonGold from '../assets/balloon-gold.png';
import balloonPink from '../assets/balloon-pink.png';
import './css/CardRouletteHome.css';

const CardEditor = () => {

    return (
        <section id="card-roulette-home-container" data-aos="fade-up" data-aos-duration="1000">
            <Link className="roulette-scroll-up" to="intro-container" smooth={true} duration={1000} offset={-50}>
                <ExpandLessIcon style={{fontSize:'5vmin'}}/>
            </Link>
            <div className="frame-big"></div>
            <div className="star-container">
                <h1>Card Roulette</h1>
                <div className="star star1"></div>
                <div className="star star2"></div>
                <div className="star star3"></div>
                <div className="star star4"></div>
                <div className="star star5"></div>
                <div className="star star6"></div>
                <div className="star star7"></div>
                <div className="star star8"></div>
            </div>
            
            <CardRouletteAnimation/>
            
            <div className="card-roulette-banner">
                <div className="card-roulette-text">
                    <h2>Try your luck at the Card Roulette!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                        Ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                </div>
                <div className="card-roulette-logo-container">
                    <div className="card-roulette-logo">
                        <h4>Greet Now</h4>
                    </div>
                </div>
            </div>
            <div className="balloon1">
                <img src={balloonGold} alt="balloon"/>
            </div>
            <div className="balloon2">
                <img src={balloonPink} alt="balloon"/>
            </div>
            <div className="card-roulette-home-button glow-on-hover">
                <a className="roulette-btn" href="/roulette">GO TO CARD ROULETTE</a>
            </div>
            <Link className="roulette-scroll-down" to="img-catalog" smooth={true} duration={1000} offset={-150}>
                <ExpandMoreIcon style={{fontSize:'5vmin'}}/>
            </Link>
        </section>
    );
}

export default CardEditor;