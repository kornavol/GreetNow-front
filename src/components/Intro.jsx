import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/test_pictures/birthday1.jpg';
import introCardCover from '../assets/cover-card.png';
import envelopeBack from '../assets/envelope-back-gold.png';
import envelopeLeft from '../assets/envelope-left-gold.png';
import envelopeRight from '../assets/envelope-right-gold.png';
import envelopeRightOpen from '../assets/envelope-right-open-gold.png';
import Handwriting from './Handwriting';
import StampAnimation from './StampAnimation';
import './css/Intro.css';

const Intro = () => {

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

        /* 
        const changeVisibility1 = setTimeout(() => {
            document.getElementById("intro-card").style.opacity = "0";
        }, 6500);

        const changeVisibility2 = setTimeout(() => {
            document.getElementById("intro-flip-card").style.opacity = "1";
        }, 6300);
        */

        /*return clearTimeout prevents infinite loop of setTimeout */
        return () => clearTimeout(zIndex1, zIndex2, zIndex3, zIndex4, zIndex5, addTransition);
    }, []);

    return (
        <section id="intro-container">
            <div className="intro-title"></div>
            <StampAnimation/>
            <div className="intro-card-container">
                <div className="intro-envelope envelope-side-slide">
                    <div className="envelope-back">
                        <img src={envelopeBack} alt="envelope"/>
                    </div>

                    <div ref={introCardRef} id="intro-card" className="intro-card card-come-out">
                        <img src={introCardCover} alt="card"/>
                        <Handwriting/>
                    </div>
                
                    <div ref={envelopeLeftRef} id="envelope-left" className="envelope-left">
                        <img src={envelopeLeft} alt="envelope"/>
                    </div>
                    <div ref={envelopeRightRef} id="envelope-right" className="envelope-right ">
                        <div  className="envelope-right-box envelope-flip-open">
                            <img src={envelopeRight} alt="envelope"/>
                            <img src={envelopeRightOpen} alt="envelope"/>
                        </div>
                    </div>

                    <div ref={introFlipCardRef} id="intro-flip-card" className="intro-flip-card">
                        <div className="imgBox">
                            <Handwriting/>
                            <img src={image1} alt="birthday"/>
                            <img src={introCardCover} alt="flower"/>
                            
                        </div>
                        <div className="details">
                            <h2>Greet friends and family and celebrate special moments</h2>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    )
}

export default Intro;