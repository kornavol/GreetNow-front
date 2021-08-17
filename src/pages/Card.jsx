import './css/Card.css';

import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";


/* All unique data has to come from back.
    All cards are public. 
*/
export default function Card() {

    /* TO-DO. We need to det access only if user is owner of this card */
    const [card, setCard] = useState({
        picture:'',
        text:''
    });

    const { id } = useParams();
    const imgPass = `http://localhost:8080/greeting-pictures/${card.picture}`

    useEffect(() => {
        async function  getCard() {
            const url = 'http://localhost:8080/cards/getCard?' + `id=${id}`;
            const response = await fetch(url) 
            const result = await response.json()

            // console.log(result);
            setCard({
                picture:result.data.picture,
                text:result.data.text
            });
        }
        
        getCard()

    }, []);

    return (
        <div className="page">
            {/* <div ref={introFlipCardRef} id="intro-flip-card" className={`intro-flip-card ${isClicked ? "translate" : "reverse-translate"}`}>
                        <div className={`imgBox ${isClicked ? "open-card" : "close-card"} `} onClick={()=> setIsClicked(state =>!state)}>
                            <Handwriting/>
                            <img src={image1} alt="birthday"/>
                            <img src={introCardCover} alt="flower"/>
                            <div className="fold"></div>
                        </div>
                        <div className="intro-flip-card-text" onClick={()=> setIsClicked(state =>!state)}>
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
            <h2>Card information:</h2>
            <h4>ID: {id}</h4>
            <h4>text:{card.text}</h4>
            <img
                src={imgPass}
            /> */}
        </div>
    )
}
