import './css/Card.css';

import React, {useState, useEffect, useRef} from "react";
import  { useSelector } from 'react-redux';
import { useParams} from "react-router-dom";
import previewEnvelopeBack from '../assets/white-card-back.png';
import previewEnvelopeLeft from '../assets/white-envelope-left.png';
import previewEnvelopeRight from '../assets/white-envelope-right.png';
import previewEnvelopeRightOpen from '../assets/white-envelope-right-open.png';
import previewCoverImage from '../assets/cover-card-editor.png';
import previewBackImage from '../assets/cover-back-card-editor.png';
import { FiChevronLeft } from "react-icons/fi";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PetalsAnimation from '../components/PetalsAnimation';
import { Link } from 'react-router-dom';

/* All unique data has to come from back.
    All cards are public. 
*/
export default function Card() {

    const [isClicked, setIsClicked] = useState(false);

    const previewCardRef = useRef(0);
    const previewFlipCardRef = useRef(0);
    const previewEnvelopeRightRef = useRef(0);
    const previewEnvelopeLeftRef = useRef(0);

    const selectedImage = useSelector((state) => state.currPict);
    const selectedText = useSelector((state) => state.currText);
    console.log('====================================');
    console.log(selectedImage);
    console.log('====================================');

    useEffect(() => {
        const zIndex1 = setTimeout(() => {
            previewEnvelopeRightRef.current.style.zIndex = "2";
        }, 2700);

        const zIndex2 = setTimeout(() => {
            previewCardRef.current.style.zIndex = "7";
        }, 2900);

        const zIndex3 = setTimeout(() => {
            previewEnvelopeLeftRef.current.style.zIndex = "8";
        }, 2900);

        const zIndex4 = setTimeout(() => {
            previewEnvelopeRightRef.current.style.zIndex = "6";
        }, 3200);

        const zIndex5 = setTimeout(() => {
            previewEnvelopeLeftRef.current.style.zIndex = "5";
        }, 4100);

        const addTransition = setTimeout(() => {
            previewFlipCardRef.current.style.transition = "1s"
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

    /* TO-DO. We need to det access only if user is owner of this card */
/*     
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
 */
    return (
        <div id="preview-container">
            <PetalsAnimation/>
            <header>
                <h1>Preview</h1>
            </header>
            <div className="preview-card-container" data-aos="fade-up" data-aos-duration="1700">
                <div className="preview-envelope">
                    <div className="preview-envelope-back">
                        <img src={previewEnvelopeBack} alt="envelope"/>
                    </div>

                    <div ref={previewCardRef} id="preview-card" className="preview-card">
                        { selectedImage.name != null ? (
                            <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card"/>
                        ) : (
                            <img src={previewCoverImage} alt="card"/>
                        )}
                    </div> 
                
                    <div ref={previewEnvelopeLeftRef} id="preview-envelope-left" className="preview-envelope-left">
                        <img src={previewEnvelopeLeft} alt="envelope"/>
                    </div>
                    <div ref={previewEnvelopeRightRef} id="preview-envelope-right" className="preview-envelope-right ">
                        <div className="preview-envelope-right-box">
                            <img src={previewEnvelopeRight} alt="envelope"/>
                            <img src={previewEnvelopeRightOpen} alt="envelope"/>
                        </div>
                    </div>

                    <div ref={previewFlipCardRef} id="preview-flip-card" className={`preview-flip-card ${isClicked ? "preview-translate" : "preview-reverse-translate"}`}>
                        <div className={`preview-imgBox ${isClicked ? "preview-open-card" : "preview-close-card"}`} onClick={()=> setIsClicked(state =>!state)}>
                            {selectedImage.name != null  ? (
                                <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card"/>
                                ) : (
                                    <img src={previewCoverImage} alt="card"/>
                                )}
                            <img src={previewBackImage} alt="image"/>
                        </div>
                        <div className="preview-flip-card-text" onClick={()=> setIsClicked(state =>!state)}>
                            <h2>Card information:</h2>
                            <h4></h4>
                            <h3>{selectedText}</h3>
                            <h4>Greet Now</h4>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="preview-footer">
                <Link><h4><FiChevronLeft/> Back</h4></Link>
                <Link className="preview-custom-btn save-btn" href="/card"><SaveOutlinedIcon/> Save</Link>
                <Link className="preview-custom-btn send-btn" href="/card">Send</Link>
                
            </div>
        </div>
    )
}


/* <h4>ID: {id}</h4>
<h3>text:{card.text}</h3>
 */