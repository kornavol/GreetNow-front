import React from 'react';
import image04 from '../assets/test_pictures/flower4.jpg';
import './css/CardRouletteHome.css';


const CardRoulette = () => {

    return (
        
                
                        <div className="section-container card-roulette-container">
                            <h1>Card Roulette</h1>
                            <div id="roulette" className="roulette">
                                <div className="roulette-img"><img src={image04} alt="flower"/></div>
                            </div>
                        </div>
                
          
    );
}

export default CardRoulette;