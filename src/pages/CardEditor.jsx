import './css/CardEditor.css';
import { Link } from 'react-router-dom';


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardBody from '../components/card/CardBody';
import ImgSelection from '../components/card/ImgSelection';
import { sendText, sendPict } from '../actions';

/* To-Do: 
- Don't allow the user to go to the preview if a text wasn't added
- put and fetch initial card from back-end
- clear a text field if user click on a text 
- add logic if user edis SAVED card (based of id checking)   */
const CardEditor = () => {
    // const [auth, setAuth] = useState(false);
    const [catalog, setCatalog] = useState(<ImgSelection/>);

    const dispatch = useDispatch()

    function catalogHandler(catalog) {
    setCatalog(catalog);
    }

        /* Clen-up the redux storage (CurrPict and CurrText) when component unmontening */
        useEffect(() => {
            return () => {
                dispatch(sendText(''))
                dispatch(sendPict({name: 'cover-card-editor.png'}))
            };
        }, []);



    return (
        <div id="card-editor-container">
            <div className="card-editor-title">
                <h3>Create a Greeting Card with the Card Editor</h3>
            </div>
                
            <CardBody catalog={catalogHandler}/>
            <div id="card-img-cat-btn">
                {catalog}
                <div className="preview-button">
                    <Link className="preview-btn" to="/card">Preview</Link>
                </div>
            </div>
        </div>
    );
}

export default CardEditor;
