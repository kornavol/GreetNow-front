import React, { useState, useEffect } from 'react';
import image1 from '../assets/test_pictures/birthday1.jpg';
import introCardCover from '../assets/intro-card-cover.png';
import envelopeBack from '../assets/envelope-back.png';
import envelopeLeft from '../assets/envelope-left-new.png';
import envelopeRight from '../assets/envelope-right.png';
import envelopeRightOpen from '../assets/envelope-right-open.png';
import './css/Intro.css';

const Intro = () => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const zIndex1 = setTimeout(() => {
            document.getElementById("envelope-right").style.zIndex = "2";
        }, 2700);

        const zIndex2 = setTimeout(() => {
            document.getElementById("intro-card").style.zIndex = "7";
        }, 2900);

        const zIndex3 = setTimeout(() => {
            document.getElementById("envelope-left").style.zIndex = "8";
        }, 2900);

        const zIndex4 = setTimeout(() => {
            document.getElementById("envelope-right").style.zIndex = "6";
        }, 3200);

        const zIndex5 = setTimeout(() => {
            document.getElementById("envelope-left").style.zIndex = "5";
        }, 4100);

        /*return clearTimeout prevents infinite loop of setTimeout */
        return () => clearTimeout(zIndex1, zIndex2, zIndex3, zIndex4, zIndex5);
    }, []);

    return (
        <section id="intro-container">
            <div className="intro-title"></div>
            <div className="intro-card-container">
                <div className="intro-envelope envelope-side-slide">
                    <div className="envelope-back">
                        <img src={envelopeBack} alt="envelope"/>
                    </div>
                    <div id="intro-card" className={`intro-card card-come-out  ${isClicked ? "invisible":"visible"}`} onClick={()=>{setIsClicked(true)}}>
                        <img src={introCardCover} alt="card"/>
                    </div>
                        <div id="envelope-left" className="envelope-left">
                            <img src={envelopeLeft} alt="envelope"/>
                        </div>
                    <div id="envelope-right" className="envelope-right ">
                        <div  className="envelope-right-box envelope-flip-open">
                            <img src={envelopeRight} alt="envelope"/>
                            <img src={envelopeRightOpen} alt="envelope"/>
                        </div>
                    </div>
                    <div className={`intro-flip-card ${isClicked ? "visible":"invisible"}`}>
                    <div className="imgBox">
                        <img src={introCardCover} alt="flower"/>
                        <img src={image1} alt="birthday"/>
                    </div>
                    <div className="details">
                        <h2>Text<br/><span>Text 2</span></h2>
                    </div>
                </div>

                </div>
                                
            </div>
        </section>
    )
}

export default Intro;