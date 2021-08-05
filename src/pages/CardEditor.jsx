import './css/CardEditor.css';
import { useState } from 'react';
import CardBody from '../components/card/CardBody';
import ImgSelection from '../components/card/ImgSelection';

const CardEditor = () => {
    const [auth, setAuth] = useState(false);

    const [catalog, setCatalog] = useState(<ImgSelection/>);

    function catalogHandler(catalog){
        setCatalog(catalog);
    }

    function saveCardHandler(){
        if(!auth){
            alert('You need to be registered to use this function!')
        }else{
            //to do
        }
    }
    return (
        <div id="card-editor-container">
            <div id="card-preview-btn">
                <button onClick={saveCardHandler}>Save Draft</button>
                <button>Preview</button>
            </div>
            <div id="card-viewer">
                <div id="card-img-cat-btn">
                    {catalog}
                </div>
                <CardBody catalog={catalogHandler}/>
            </div>
        </div>
    );
}

export default CardEditor;
