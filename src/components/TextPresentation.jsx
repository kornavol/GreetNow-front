import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/Presentation.css';

const TextPresentation = (props) => {

    const username = props.user;
    const isAuth = props.isAuth;
    const setToggleRegister = props.setToggleRegister;
    const setModalShow = props.setModalShow;

    const text1 = useRef(0);
    const text2 = useRef(0);
    const text3 = useRef(0);
    const text4 = useRef(0);
    const text5 = useRef(0);

    useEffect(() => {
        if (props.isClicked) { 
            const interval = setInterval(() => {
                text1.current.classList.remove("text-animation1");
                text2.current.classList.remove("text-animation2");
                text3.current.classList.remove("text-animation3");
                text4.current.classList.remove("text-animation4");
                text5.current.classList.remove("text-animation5");
                void text1.current.offsetWidth;
                void text2.current.offsetWidth;
                void text3.current.offsetWidth;
                void text4.current.offsetWidth;
                void text5.current.offsetWidth;
                text1.current.classList.add("text-animation1");
                text2.current.classList.add("text-animation2");
                text3.current.classList.add("text-animation3");
                text4.current.classList.add("text-animation4");
                text5.current.classList.add("text-animation5");
        }, 50000 );

            return () => {
                clearInterval(interval)
            }
        }
    })

    return (
        <div id="text-presentation-container">
            <div className="text-presentation-subcontainer">
                {isAuth ? (
                    <div ref={text1} id="text1" className={`presentation-text1 ${props.isClicked? "text-animation1" : null}`}>
                        <h2>Greetings {username}!</h2><br/>
                        <p>Welcome to</p>
                        <h4>Greet Now</h4>
                        <p>Here you will find innovative ways of creating Greeting Cards to send your best wishes to<br/> your friends and <br/>family!</p>
                    </div>
                ) : (
                <div ref={text1} id="text1" className={`presentation-text1 ${props.isClicked? "text-animation1" : null}`}>
                    <h2>Greetings!</h2><br/>
                    <p>Welcome to</p>
                    <h4>Greet Now</h4>
                    <p>Here you will find innovative ways of creating Greeting Cards to send your best wishes to<br/> your friends and <br/>family!</p>
                </div>
                )}
                <div ref={text2} id="text2" className={`presentation-text2 ${props.isClicked? "text-animation2" : null}`}>
                    <p>With the </p><br/>
                    <h4>Card Roulette</h4><br/> 
                    <p>you can generate a random card!<br/> Just choose one of the event filters and there you'll have it<br/>-a greeting card on the go!</p>
                </div>
                <div ref={text3} id="text3" className={`presentation-text3 ${props.isClicked? "text-animation3" : null}`}>
                    <p>You can also use the</p><br/>
                    <h4>Card Editor</h4><br/>
                    <p>to create, edit and save your favorite card styles<br/> and send off a Greeting Card right away or keep them in your catalog.</p>
                </div>
                <div ref={text4} id="text4" className={`presentation-text4 ${props.isClicked? "text-animation4" : null}`}>
                    <p>With the</p><br/>
                    <h4>Media Catalog</h4><br/>
                    <p>you can choose from one of the image and text templates or even save your favorite pictures<br/> and messages!</p>
                </div>
                {isAuth ? (
                    <div ref={text5} id="text5" className={`presentation-text5 ${props.isClicked? "text-animation5" : null}`}>
                    <p>Hey {username},<br/>now let's create a<br/> Greeting Card.</p>
                    <p>You can start by choosing one of your contacts, managing events or start creating on the <br/> Card Editor!</p>
                    <Link to="/card-editor" className="presentation-custom-btn presentation-btn">Create a Card</Link>
                    </div>
                ) : (
                <div ref={text5} id="text5" className={`presentation-text5 ${props.isClicked? "text-animation5" : null}`}>
                    <p>Besides,<br/>by creating an account with</p><br/>
                    <h4>Greet Now</h4><br/>
                    <p>you can store your contacts, create events for sending out cards on schedule and <br/>much more!</p>
                    <Link onClick={()=>{setModalShow(true); setToggleRegister(false)}} className="presentation-custom-btn presentation-btn">Register Now</Link>
                </div>
                )}
            </div>
        </div>        
    );
}

export default TextPresentation;
