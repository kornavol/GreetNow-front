import './css/FrontPage.css';
import React from 'react';
import  { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cardCoverPic from '../../assets/cover-card-editor.png';
import cardBackPic from '../../assets/cover-back-card-editor.png';


const FrontPage = (props) => {

    const firstView = <div className="cover-text-editor"><h4>Select a Cover Picture from the <br/> Image Catalog</h4></div>;

    const [text, setText] = useState()
    const selectedImage = useSelector((state) => state.currPict);
    const isClicked = props.isClicked;

    useEffect(() => {
        if(selectedImage === 'null'){
            setText(firstView);
        }else{
            setText();
        }
    }, [selectedImage]);

    return (
        <div className={`editor-imgBox ${isClicked ? "rotate" : "rotate-close" }`}>
            
            {selectedImage.name != null ? (
                <img src={`http://localhost:8080/greeting-pictures/${selectedImage.name}`} alt="card"/>
            ) : (
                <div>
                    <img src={cardCoverPic} alt="card"/>
                    {text}
                </div>
            )}
            
            <img src={cardBackPic} alt="card"/>
            
        </div>
    );
}

export default FrontPage;
