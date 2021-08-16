import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/test_pictures/birthday1.jpg';
import introCardCover from '../assets/cover-card.png';
import envelopeBack from '../assets/envelope-back-gold.png';
import envelopeLeft from '../assets/envelope-left-gold.png';
import envelopeRight from '../assets/envelope-right-gold.png';
import envelopeRightOpen from '../assets/envelope-right-open-gold.png';
import Handwriting from './Handwriting';
import FlowerAnimation from './FlowerAnimation';
import { Link } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/Intro.css';



const Intro = () => {

    const [isClicked, setIsClicked] = useState (false);

    const introCardRef = useRef(0);
    const introFlipCardRef = useRef(0);
    const envelopeRightRef = useRef(0);
    const envelopeLeftRef = useRef(0);
    

    useEffect(() => {
        const zIndex1 = setTimeout(() => {
            envelopeRightRef.current.style.zIndex = "2";
        }, 2700);

        const zIndex2 = setTimeout(() => {
            introCardRef.current.style.zIndex = "7";
        }, 2900);

        const zIndex3 = setTimeout(() => {
            envelopeLeftRef.current.style.zIndex = "8";
        }, 2900);

        const zIndex4 = setTimeout(() => {
            envelopeRightRef.current.style.zIndex = "6";
        }, 3200);

        const zIndex5 = setTimeout(() => {
            envelopeLeftRef.current.style.zIndex = "5";
        }, 4100);

        const addTransition = setTimeout(() => {
            introFlipCardRef.current.style.transition = "1s"
        }, 6600);

        /*return clearTimeout prevents infinite loop of setTimeout */
        return () => {
            clearTimeout(zIndex1)
            clearTimeout(zIndex2)
            clearTimeout(zIndex3)
            clearTimeout(zIndex4)
            clearTimeout(zIndex5)
            clearTimeout(addTransition)
        }
    }, []);

    function clickHandler(click){
        setIsClicked(click);
    }

    return (
        <section id="intro-container">
            <div className="intro-banner">
                <h2>Celebrate life with the perfect card or invitation</h2>
                <h3>― Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <FlowerAnimation/>
            <div className="intro-card-container" data-aos="fade-up" data-aos-duration="1700">
                <div className="intro-envelope">
                    <div className="envelope-back">
                        <img src={envelopeBack} alt="envelope"/>
                    </div>

                    <div ref={introCardRef} id="intro-card" className="intro-card">
                        <img src={introCardCover} alt="card"/>
                        <Handwriting/>
                    </div>
                
                    <div ref={envelopeLeftRef} id="envelope-left" className="envelope-left">
                        <img src={envelopeLeft} alt="envelope"/>
                    </div>
                    <div ref={envelopeRightRef} id="envelope-right" className="envelope-right ">
                        <div className="envelope-right-box">
                            <img src={envelopeRight} alt="envelope"/>
                            <img src={envelopeRightOpen} alt="envelope"/>
                        </div>
                    </div>

                    <div ref={introFlipCardRef} id="intro-flip-card" className={`intro-flip-card ${isClicked ? "translate" : "reverse-translate"}`}>
                        <div className={`imgBox ${isClicked ? "open-card" : "close-card"} `} onClick={()=> clickHandler(true)}>
                            <Handwriting/>
                            <img src={image1} alt="birthday" onClick={()=> clickHandler(false)}/>
                            <img src={introCardCover} alt="flower"/>
                            <div className="fold"></div>
                        </div>
                        <div className="intro-flip-card-text" onClick={()=> clickHandler(false)}>
                            <h2>Greetings!</h2>
                            <h3>Greet friends and family and celebrate special moments.
                                <br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing.
                                <br/>
                                Ipsum dolor sit amet.
                            </h3>
                            <h4>Greet Now</h4>
                        </div>
                    </div>
                </div>     
            </div>
            
        </section>
    )
}

export default Intro;