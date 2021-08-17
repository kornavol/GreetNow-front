import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { sendPict } from '../../actions';
import { Link } from 'react-router-dom';


const Pictures = (props) => {
    const [isModal, setIsModal] = useState(null); 
    useEffect(() => {
        if (props.setModalShow) {
            setIsModal(props.setModalShow(false))
        }
    }, [])
    function checkModal() {
        if (isModal != null ) {
            return isModal
        }
    }
    console.log('Modal', isModal)
    const dispatch = useDispatch();

    const picSet = props.pictures.map((picture) => {
    const pass = `http://localhost:8080/greeting-pictures/${picture.name}`



        return (
            <Link to='/card-editor'>
            <img
                alt='front page img'
                key={picture._id}
                id={picture._id}
                className="picture"
                src={pass}
                onClick={() => {dispatch(sendPict(picture)); checkModal()}}
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
