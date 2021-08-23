import React from 'react';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';
import './css/FlowerShowerAnimation.css';

const FlowerShowerAnimation = () => {
    return (
        <div>
            <div className="flower-set1">
                <div><img src={flower1} alt="flower"/></div>
                <div><img src={flower2} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower1} alt="flower"/></div>
                <div><img src={flower2} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
            </div>
            <div className="flower-set2">
                <div><img src={flower2} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower1} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower2} alt="flower"/></div>
                <div><img src={flower1} alt="flower"/></div>
            </div>
            <div className="flower-set3">
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower1} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower1} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
                <div><img src={flower3} alt="flower"/></div>
            </div>
        </div>
    )
}

export default FlowerShowerAnimation;