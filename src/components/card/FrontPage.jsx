import './css/FrontPage.css';
import React from 'react';
import  { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const FrontPage = () => {

    const firstView = <h4>Select a background from the Image Catalog</h4>;

    const [text, setText] = useState()
    const selectedImage = useSelector((state) => state.currPict);
    console.log(selectedImage);

    useEffect(() => {
        if(selectedImage === 'null'){
            setText(firstView);
            console.log(1);
        }else{
            setText();
            console.log(2);
        }
    }, [selectedImage]);

    return (
        <div id="card-front" style={{backgroundImage: `url('http://localhost:8080/greeting-pictures/${selectedImage.name}')`}}>
            {text}
        </div>
    );
}

export default FrontPage;
