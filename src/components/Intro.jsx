import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/test_pictures/birthday1.jpg';
import introCardCover from '../assets/cover-card.png';
import envelopeBack from '../assets/envelope-back-gold.png';
import envelopeLeft from '../assets/envelope-left-gold.png';
import envelopeRight from '../assets/envelope-right-gold.png';
import envelopeRightOpen from '../assets/envelope-right-open-gold.png';
import Handwriting from './Handwriting';
import StampAnimation from './StampAnimation';
import TextPresentation from './TextPresentation';
import ImgPresentation from './ImgPresentation';
import './css/Intro.css';


const Intro = (props) => {

    const [isClicked, setIsClicked] = useState (false);
    const user = props.user;
    const isAuth = props.isAuth;
    const setIsAuth = props.setIsAuth;
    const toggleRegister = props.toggleRegister;
    const setToggleRegister = props.setToggleRegister;
    const modalShow = props.modalShow;
    const setModalShow = props.setModalShow;

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

    return (
        <section id="intro-container">
            <header className="intro-banner">
                <h2>Celebrate life with the perfect card or invitation</h2>
                <h3>― Lorem ipsum dolor sit amet consectetur.</h3>
                <p>Click the Card to Open</p>
            </header>
            <StampAnimation/>
            <main className="intro-card-container" data-aos="fade-up" data-aos-duration="1700">
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
                        <div className={`imgBox ${isClicked ? "open-card" : "close-card"} `} onClick={()=> setIsClicked(state =>!state)}>
                            <Handwriting/>
                            <img src={introCardCover} alt="flower"/>
                            <ImgPresentation isClicked={isClicked}/>
                            {/* <img src={image1} alt="birthday"/> */}
                            <div className="fold">
                                <p>Open</p>
                            </div>
                        </div>
                        <div className="intro-flip-card-text" onClick={()=> setIsClicked(state =>!state)}>
                            <TextPresentation
                                isClicked={isClicked}
                                user={user}
                                isAuth={isAuth} 
                                setIsAuth={setIsAuth} 
                                toggleRegister={toggleRegister} 
                                setToggleRegister={setToggleRegister} 
                                modalShow={modalShow} 
                                setModalShow={setModalShow}
                            />
                        </div>
                    </div>
                </div>     
            </main>
        </section>
    )
}

export default Intro;
