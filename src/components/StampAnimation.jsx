import React from 'react';
import stamp1 from '../assets/stamp1.png';
import stamp2 from '../assets/stamp2.png';
import butterflyLeftWing from '../assets/butterfly-left-wing.png';
import butterflyRightWing from '../assets/butterfly-right-wing.png';
import butterflyBody from '../assets/butterfly-body.png';
import butterflyFrame from '../assets/butterfly-frame4.png';
import butterflyLeftWing2 from '../assets/butterfly-left-wing2.png';
import butterflyRightWing2 from '../assets/butterfly-right-wing2.png';
import butterflyBody2 from '../assets/butterfly-body2.png';
import butterflyFrame2 from '../assets/butterfly-frame2.png';
import pen from '../assets/pen-new.png';
import ribbon from '../assets/ribbon.png';
import FlowerShowerAnimation from './FlowerShowerAnimation';
import './css/StampAnimation.css';


const StampAnimation = () => {

    return (
        <div>
            <FlowerShowerAnimation/>
            <div className="stamp-set">
                <img src={stamp1} alt="stamp/>"/>
                <img src={stamp2} alt="stamp/>"/>
            </div>
            <div className="butterfly-frame">
                <img src={butterflyFrame} alt="frame"/>
                <div className="butterfly">
                    <div><img src={butterflyLeftWing} alt="butterfly"/></div>
                    <div><img src={butterflyBody} alt="butterfly"/></div>
                    <div><img src={butterflyRightWing} alt="butterfly"/></div>
                </div>
            </div>
            <div className="butterfly-frame2">
                <img src={butterflyFrame2} alt="frame"/>
                <div className="butterfly2">
                    <div><img src={butterflyLeftWing2} alt="butterfly"/></div>
                    <div><img src={butterflyBody2} alt="butterfly"/></div>
                    <div><img src={butterflyRightWing2} alt="butterfly"/></div>
                </div>
            </div>
            <div className="pen">
                <img src={pen} alt="pen"/>
            </div>
            <div className="ribbon">
                <img src={ribbon} alt="pen"/>
            </div>
        </div>
    );
}

export default StampAnimation;