import './css/CardEditor.css';
import React, { useState } from 'react';
import CardBody from '../components/card/CardBody';
import ImgSelection from '../components/card/ImgSelection';

const CardEditor = () => {
    

    const [auth, setAuth] = useState(false);
    const [catalog, setCatalog] = useState(<ImgSelection/>);

    function catalogHandler(catalog) {
    setCatalog(catalog);
    }

    return (
        <div id="card-editor-container">
            <div className="card-editor-title">
                <h3>Create a Greeting Card with the Card Editor</h3>
            </div>
                
            <CardBody catalog={catalogHandler}/>
            <div id="card-img-cat-btn">
                {catalog}
                <div className="preview-button">
                    <a className="preview-btn" href="/card">Preview</a>
                </div>
            </div>
        </div>
    );
}

export default CardEditor;
