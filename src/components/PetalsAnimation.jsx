import React from 'react';
import petal1 from '../assets/petal1.png';
import petal2 from '../assets/petal2.png';
import petal3 from '../assets/petal3.png';
import petal4 from '../assets/petal4.png';
import petal5 from '../assets/petal5.png';
import petal6 from '../assets/petal6.png';
import petal7 from '../assets/petal7.png';
import petal8 from '../assets/petal8.png';
import petal9 from '../assets/petal9.png';

import './css/PetalAnimation.css';


const PetalAnimation = () => {

    return (
        <div>
            <div className="petal-set1">
                <div><img src={petal1} alt="petal"/></div>
                <div><img src={petal2} alt="petal"/></div>
                <div><img src={petal3} alt="petal"/></div>
                <div><img src={petal4} alt="petal"/></div>
                <div><img src={petal5} alt="petal"/></div>
                <div><img src={petal6} alt="petal"/></div>
                <div><img src={petal7} alt="petal"/></div>
                <div><img src={petal8} alt="petal"/></div>
                <div><img src={petal9} alt="petal"/></div>
            </div>
            <div className="petal-set2">
                <div><img src={petal6} alt="petal"/></div>
                <div><img src={petal7} alt="petal"/></div>
                <div><img src={petal8} alt="petal"/></div>
                <div><img src={petal9} alt="petal"/></div>
                <div><img src={petal1} alt="petal"/></div>
                <div><img src={petal2} alt="petal"/></div>
                <div><img src={petal3} alt="petal"/></div>
                <div><img src={petal4} alt="petal"/></div>
                <div><img src={petal5} alt="petal"/></div>
            </div>
            <div className="petal-set3">
                <div><img src={petal9} alt="petal"/></div>
                <div><img src={petal8} alt="petal"/></div>
                <div><img src={petal7} alt="petal"/></div>
                <div><img src={petal4} alt="petal"/></div>
                <div><img src={petal5} alt="petal"/></div>
                <div><img src={petal4} alt="petal"/></div>
            </div>
        </div>
    );
}

export default PetalAnimation;