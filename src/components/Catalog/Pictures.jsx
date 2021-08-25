import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { sendPict } from '../../actions';
import { Link } from 'react-router-dom';


const Pictures = (props) => {

    const image = useRef(0);

    function closeModal() {
        props.setModalShow(false);        
    }
    
    const dispatch = useDispatch();

    const picSet = props.pictures.map((picture, i) => {
    const pass = `http://localhost:8080/greeting-pictures/${picture.name}`

        return (
            <Link to='/card-editor' key={i}>
                <img
                    ref={image}
                    alt='front page img'
                    key={picture._id}
                    id={picture._id}
                    className="picture mt-5 mb-5"
                    src={pass}
                    onClick={() => {dispatch(sendPict(picture)); closeModal()}}
                    style={{ cursor: 'pointer' }}
                />
            </Link>
        )
    });

    return (
        <div>{picSet}</div>
    );
};

export default Pictures;
