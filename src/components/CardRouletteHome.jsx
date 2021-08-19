import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import CardRouletteAnimation from './CardRouletteAnimation';
import balloonGold from '../assets/balloon-gold.png';
import balloonPink from '../assets/balloon-pink.png';
import './css/CardRouletteHome.css';

const CardRoulette = (props) => {

    const [state, setState] = useState(0);
    const spinBtn = false;

    useEffect(() => {
        if(state === 0){
            setState(1)
        }
        if(state === 1){
            setState(0)
        }
        
    }, []);

    return (
        <section id="card-roulette-home-container">
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
            
            <CardRouletteAnimation spinBtn={spinBtn}/>
            
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
            <div id="card-roulette-btn" className="card-roulette-home-button glow-on-hover">
                <Link className="roulette-btn" to="/roulette">GO TO CARD ROULETTE</Link>
            </div>
        </section>
    );
}

export default CardRoulette;