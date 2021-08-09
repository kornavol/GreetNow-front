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
            <h2>Card information:</h2>
            <h4>ID: {id}</h4>
            <h4>text:{card.text}</h4>
            <img
                src={imgPass}
            />
        </div>
    )
}
