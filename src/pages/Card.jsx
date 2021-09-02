import './css/Card.css';
import previewEnvelopeBack from '../assets/envelope-back-gold.png';
import previewEnvelopeLeft from '../assets/white-envelope-left.png';
import previewEnvelopeRight from '../assets/white-envelope-right.png';
import previewEnvelopeRightOpen from '../assets/white-envelope-right-open-gold.png';
import previewCoverImage from '../assets/cover-card-editor.png';
import previewBackImage from '../assets/cover-back-card-editor.png';
import { FiChevronLeft } from "react-icons/fi";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import FlowerShowerAnimation from '../components/FlowerShowerAnimation';


import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { sendText, sendPict } from '../actions';

//sharing
import CardSharing from '../components/CardSharing';

/* All unique data has to come from back.
    All cards are public. 
*/
export default function Card(props) {
    const [isClicked, setIsClicked] = useState(false);
    const username = props.user;
    /* to change a button or for another operation */
    const [isSaved, setIsSaved] = useState(false);
    /* to use card as cardpafe or previe for creation */
    const [isPublicCard, setIsPublicCard] = useState(false);
    const isAuth = props.isAuth;

    /* Public card page logic */
    const dispatch = useDispatch()
    const { id } = useParams();

    console.log('isAuth', isAuth);

    useEffect(() => {
        if (id) {
            setIsPublicCard(true)
        }

    }, [id]);


    const previewCardRef = useRef(0);
    const previewFlipCardRef = useRef(0);
    const previewEnvelopeRightRef = useRef(0);
    const previewEnvelopeLeftRef = useRef(0);

    const selectedImage = useSelector((state) => state.currPict);
    const selectedText = useSelector((state) => state.currText);
    //const contactName = useSelector((state) => state.contact);
    const [sendButton, setSendButton] = useState(true);
    const [cardLink, setCardLink] = useState();

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



    //console.log('URL params', id);

    useEffect(() => {
        async function getCard() {
            const url = 'http://localhost:8080/cards/getCard?' + `id=${id}`;
            const option = {
                method: 'GET',
            }

            const response = await fetch(url, option)
            const result = await response.json()

            console.log('for URL card:', result);

            if (result.status === 'success') {
                const picName = result.data.picture;
                const text = result.data.text;
                /* add pop-up with message */
                setCardLink(`/cards/${result.data._id}`);

                dispatch(sendText(text));
                dispatch(sendPict({ name: picName }));
            }
        }

        // console.log('SELECTED - IMAGE', selectedImage);

        if (id) {
            getCard()
            // setIsPublicCard(true)
        }

    }, []);

    /* TO-Do: 
     - add to option:
        - recipient ID
        -event
     - Replace all CRUD operation to redux. 
        Becouse we will use them also in User card catalog 
    */
    async function SaveCard() {
        // console.log(selectedImage);
        // console.log('name', selectedImage.name);
        // console.log(selectedText);

        const card = {
            text: selectedText,
            picture: selectedImage.name,
            createdBy: 'user',
            /* not neccery */
            recipient: '',
            event: ''
        }

        const url = 'http://localhost:8080/cards/new_record';
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify(card)
        }

        const respond = await fetch(url, options);
        const result = await respond.json().then(data => { return data });

        if (result.status === 'success') {
            console.log(result.data);
            setIsSaved(true);
            setCardLink(`/cards/${result.data._id}`);
            /* clear text storage 
            /* To-DO: Needing to create a same dispatch for picture */
        }


    }

    /* To-do:
    - Add  ternary operator  
    which willl be check card owner and add CRUD buttons 
    (Need to thinking about logic.)
    - align text ot center
    - Add mockup with name of recipient (f.e. Dear {Andreas} ) (optional)
    */

    // console.log('isPublicCard', isPublicCard);
    // console.log('isSaved', isSaved);

    /* Clen-up the redux storage (CurrPict and CurrText) when component unmontening */
    useEffect(() => {
        return () => {
            dispatch(sendText(''))
            dispatch(sendPict({ name: 'cover-card-editor.png' }))
        };
    }, []);

    const sendShareBtn = (
        sendButton ?
            <div className="preview-custom-btn send-btn" onClick={() => { setSendButton(false), SaveCard() }}>Send</div>
            :
            <CardSharing username={username} /* contactName={contactName} */ url={cardLink} title={'A special Card for you!'} setSendButton={() => setSendButton(true)} />
    );

    const loginAd =
        isAuth ?
            null
            :
            (<div>
                <a>Please </a>
                <a style={{ cursor: 'pointer', fontWeight: 'bold', color: 'tomato' }} onClick={() => { props.setModalShow(true); props.setToggleRegister(true) }}>Login</a>
                <a> if you want to save the card.</a>
            </div>);

    return (
        <div id="preview-container">
            <FlowerShowerAnimation />

            
                
                    <header className={isPublicCard ? "hidden-header": null}>
                        <h1>Preview</h1>
                        <p>Click the Card to Open</p>
                    </header>
            

            <div className="preview-card-container" data-aos="fade-up" data-aos-duration="2000">
                <div className="preview-envelope">
                    <div className="preview-envelope-back">
                        <img src={previewEnvelopeBack} alt="envelope" />
                    </div>

                    <div ref={previewCardRef} id="preview-card" className="preview-card">
                        {/* 1. Looks like we don't need more make a conditional rendering */}
                        {selectedImage._id ? (
                            <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card" />
                        ) : (

                            <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card" />
                            // <img src={previewCoverImage} alt="card" />
                        )}
                    </div>

                    <div ref={previewEnvelopeLeftRef} id="preview-envelope-left" className="preview-envelope-left">
                        <img src={previewEnvelopeLeft} alt="envelope" />
                    </div>
                    <div ref={previewEnvelopeRightRef} id="preview-envelope-right" className="preview-envelope-right ">
                        <div className="preview-envelope-right-box">
                            <img src={previewEnvelopeRight} alt="envelope" />
                            <img src={previewEnvelopeRightOpen} alt="envelope" />
                        </div>
                    </div>

                    <div ref={previewFlipCardRef} id="preview-flip-card" className={`preview-flip-card ${isClicked ? "preview-translate" : "preview-reverse-translate"}`}>
                        <div className={`preview-imgBox ${isClicked ? "preview-open-card" : "preview-close-card"}`} onClick={() => setIsClicked(state => !state)}>
                            {/* 2. Looks like we don't need more make a conditional rendering */}
                            {selectedImage._id ? (
                                <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card" />
                            ) : (
                                <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card" />
                                // <img src={previewCoverImage} alt="card" />
                            )}
                            <img src={previewBackImage} alt="preview back" />
                        </div>
                        <div className="preview-flip-card-text" onClick={() => setIsClicked(state => !state)}>
                            {selectedText ? (
                                <div className="preview-selected-text">
                                    <h3>{selectedText}</h3>
                                    <h4>Greet Now</h4>
                                </div>
                            ) : (
                                <div className="preview-empty-text">
                                    <h2>Hello {username},</h2>
                                    <h3>Please compose a message <br /> or choose a text template from <br /> the Text Catalog.</h3>
                                    <h4>Greet Now</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isPublicCard ? null


                :

                <div>
                    {isAuth ? (
                        <div /* className="preview-footer" */>
                            {isSaved ? (
                                <div className="preview-footer">
                                    {/* <button className="btn btn-bg-success">Edit</button>
                                            <button className="btn btn-bg-danger">Delete</button> */}
                                    <Link to="/card-editor"><h4><FiChevronLeft /> Back</h4></Link>
                                    <h4>Your Card has been saved to <Link to="/my-cards"><u>My Cards</u></Link></h4>
                                    {sendShareBtn}
                                </div>
                            ) : (
                                <div className="preview-footer">
                                    <Link to="/card-editor"><h4><FiChevronLeft /> Back</h4></Link>
                                    <div
                                        className="preview-custom-btn save-btn"
                                        onClick={() => SaveCard()}
                                    >
                                        <SaveOutlinedIcon />
                                        Save
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="preview-footer">
                            <Link to="/card-editor"><h4><FiChevronLeft /> Back</h4></Link>
                            {loginAd}
                            {sendShareBtn}
                            {/* <div
                                        className="preview-custom-btn send-btn"
                                        onClick={() => {
                                            dispatch(sendText(''));
                                            dispatch(sendPict({ name: 'cover-card-editor.png' }));
                                        }}
                                    >Send</div> */}
                        </div>
                    )}
                </div>

            }


        </div>
    )
}