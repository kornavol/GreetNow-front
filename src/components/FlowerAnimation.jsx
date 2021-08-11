import React, { useEffect, useRef } from 'react';
import stamp1 from '../assets/stamp1.png';
import stamp2 from '../assets/stamp2.png';
import stamp3 from '../assets/stamp3.png';
import stamp4 from '../assets/stamp4.png';
import stamp5 from '../assets/stamp5.png';
import flower1 from '../assets/flower1.png';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.png';
import butterflyLeftWing from '../assets/butterfly-left-wing.png';
import butterflyRightWing from '../assets/butterfly-right-wing.png';
import butterflyBody from '../assets/butterfly-body.png';
import butterflyFrame from '../assets/butterfly-frame.png';
import butterflyLeftWing2 from '../assets/butterfly-left-wing2.png';
import butterflyRightWing2 from '../assets/butterfly-right-wing2.png';
import butterflyBody2 from '../assets/butterfly-body2.png';
import butterflyFrame2 from '../assets/butterfly-frame2.png';
import pen from '../assets/pen-new.png';
import ribbon from '../assets/ribbon.png';
import './css/FlowerAnimation.css';


const StampAnimation = () => {

    const penRef = useRef(0);
    
    useEffect(() => {
        const zIndex1 = setTimeout(() => {
            penRef.current.style.zIndex = "4";
        }, 19000);
        return () => clearTimeout(zIndex1)
    }, [])

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
            <div ref={penRef} className="pen">
                <img src={pen} alt="pen"/>
            </div>
            <div className="ribbon">
                <img src={ribbon} alt="pen"/>
            </div>
            

            
        </div>
    );
}

export default StampAnimation;