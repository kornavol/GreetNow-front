import React from 'react';
import stamp1 from '../assets/stamp1.png';
import stamp2 from '../assets/stamp2.png';
import stamp3 from '../assets/stamp3.png';
import stamp4 from '../assets/stamp4.png';
import stamp5 from '../assets/stamp5.png';
import flowerStamp1 from '../assets/flower-stamp1.png';
import flowerStamp2 from '../assets/flower-stamp2.png';
import flowerStamp3 from '../assets/flower-stamp3.png';
import butterflyLeftWing from '../assets/butterfly-left-wing.png';
import butterflyRightWing from '../assets/butterfly-right-wing.png';
import butterflyBody from '../assets/butterfly-body.png';
import butterflyFrame from '../assets/butterfly-frame.png';
import butterflyText from '../assets/butterfly-text.png';
import './css/StampAnimation.css';


const StampAnimation = () => {
    return (
        <div>
            <div className="butterfly-frame">
                <img src={butterflyFrame} alt="frame"/>
                <img src={butterflyText} alt="text"/>
                <div className="butterfly">
                    <div><img src={butterflyLeftWing} alt="butterfly"/></div>
                    <div><img src={butterflyBody} alt="butterfly"/></div>
                    <div><img src={butterflyRightWing} alt="butterfly"/></div>
                </div>
            </div>
            
            <div className="set2">
               {/*  
                <div><img src={stamp1} alt="stamp"/></div>
                <div><img src={stamp2} alt="stamp"/></div>
                 */}
            </div>

            <div className="set">
                <div><img src={flowerStamp1} alt="stamp"/></div>
                <div><img src={flowerStamp2} alt="stamp"/></div>
                <div><img src={flowerStamp3} alt="stamp"/></div>
                <div><img src={flowerStamp1} alt="stamp"/></div>
                <div><img src={flowerStamp2} alt="stamp"/></div>
                <div><img src={flowerStamp3} alt="stamp"/></div>
            </div>
        </div>
    );
}

export default StampAnimation;