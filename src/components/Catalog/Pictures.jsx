import React from 'react';
import { useDispatch } from "react-redux";
import { sendPict } from '../../actions';

const Pictures = ({ pictures }) => {

    const dispatch = useDispatch();

    const picSet = pictures.map((picture) => {
        const pass = `http://localhost:8080/greeting-pictures/${picture.name}`

        return (
            <img
                key={picture._id}
                id={picture._id}
                className="picture"
                src={pass}
                onClick={() => dispatch(sendPict(picture))}
                style={{ cursor: 'pointer' }}
            />
        )
    });

    return (
        <div>{picSet}</div>
    );
};

export default Pictures;
