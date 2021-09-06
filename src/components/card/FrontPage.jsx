import './css/FrontPage.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import cardCoverPic from '../../assets/cover-card-editor.png';
import cardBackPic from '../../assets/cover-back-card-editor.png';
import { CircularProgress } from '@material-ui/core';


const FrontPage = (props) => {

    const firstView = <div className="cover-text-editor"><h4>Select a Cover Picture from the <br /> Image Catalog</h4></div>;

    const [text, setText] = useState()
    const selectedImage = useSelector((state) => state.currPict);
    const isClicked = props.isClicked;
    const cardCoverPic = `${process.env.REACT_APP_BACK_ROUTE}/greeting-pictures/cover-card-editor.png`

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (selectedImage === 'null') {
            setText(firstView);
        } else {
            setText();
        }
    }, [selectedImage]);

    useEffect(() => {
        setLoading(true)
    }, []);

    return (
        <div className={`editor-imgBox ${isClicked ? "rotate" : "rotate-close"}`}>
            {/* {loading ? <CircularProgress color="secondary" /> : */}

                    {selectedImage.name ? (
                        <img
                            src={`${process.env.REACT_APP_BACK_ROUTE}/greeting-pictures/${selectedImage.name}`}
                            alt="card"
                            data-aos="fade-center" data-aos-duration="1700"
                        />
                    ) : (
                        // <div>
                        //     <img src={cardCoverPic} alt="card"/>
                        //     {text}
                        // </div>
                        <CircularProgress color="secondary" />
                    )}

                    <img src={cardBackPic} alt="card" />

                {/* } */}
        </div>
    );
}

export default FrontPage;
