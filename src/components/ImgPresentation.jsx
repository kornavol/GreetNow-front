import React, { useEffect, useRef } from 'react';
import './css/Presentation.css';
import greetNow from '../assets/greet-now.png';
import cardRoulette from '../assets/card-roulette.png';
import cardEditor from '../assets/card-editor.png';
import mediaCatalog from '../assets/media-catalog.png';

const Presentation = (props) => {

    const img1 = useRef(0);
    const img2 = useRef(0);
    const img3 = useRef(0);
    const img4 = useRef(0);
    const img5 = useRef(0);

    useEffect(() => {
        if (props.isClicked) { 
            const interval = setInterval(() => {
                img1.current.classList.remove("img-animation1");
                img2.current.classList.remove("img-animation2");
                img3.current.classList.remove("img-animation3");
                img4.current.classList.remove("img-animation4");
                img5.current.classList.remove("img-animation5");
                void img1.current.offsetWidth;
                void img2.current.offsetWidth;
                void img3.current.offsetWidth;
                void img4.current.offsetWidth;
                void img5.current.offsetWidth;
                img1.current.classList.add("img-animation1");
                img2.current.classList.add("img-animation2");
                img3.current.classList.add("img-animation3");
                img4.current.classList.add("img-animation4");
                img5.current.classList.add("img-animation5");
        }, 50000 );

            return () => {
                clearInterval(interval)
            }
        }
    })

    return (
        <div className="img-presentation-container">
            <img ref={img1} className={`presentation-img1 ${props.isClicked? "img-animation1" : null}`} src={greetNow} alt="presentation"/>
            <img ref={img2} className={`presentation-img2 ${props.isClicked? "img-animation2" : null}`} src={cardRoulette} alt="presentation"/>
            <img ref={img3} className={`presentation-img3 ${props.isClicked? "img-animation3" : null}`} src={cardEditor} alt="presentation"/>
            <img ref={img4} className={`presentation-img4 ${props.isClicked? "img-animation4" : null}`} src={mediaCatalog} alt="presentation"/>
            <img ref={img5} className={`presentation-img5 ${props.isClicked? "img-animation5" : null}`} src={greetNow} alt="presentation"/>    
        </div>        
    );
}

export default Presentation;
