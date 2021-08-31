import React, { useState } from 'react';
import EventFilter from "../components/EventFilter";
import CardRouletteAnimation from "../components/CardRouletteAnimation";
import './css/CardRoulette.css';
import balloonGold from '../assets/balloon-gold.png';
import balloonWhite from '../assets/balloon-white.png';

const CardRoulette = (props) => {
    
    const [event, setEvent] = useState({events:'all'});
    const [relationship, setRelationship] = useState();

    return (
        <section id="card-roulette-container">
            <EventFilter isAuth={props.isAuth} setEvent={setEvent} setRelationship={setRelationship}/>
            <div className="big-frame">
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
                <CardRouletteAnimation event={event} relationship={relationship}/>
                <div className="card-roulette-banner">
                    <div className="card-roulette-text">
                        <h2><b>Try your luck at the Card Roulette!</b></h2>
                        <h2>Choose an image to create a card. <br/>
                            Or if you prefer spin it again.
                        </h2>
                    </div>
                    <div className="card-roulette-logo">
                    </div>
                </div>
                <div className="balloon1">
                    <img src={balloonGold} alt="balloon"/>
                </div>
                <div className="balloon2">
                    <img src={balloonWhite} alt="balloon"/>
                </div>
                </div>
            </section>
    );
}

export default CardRoulette;
