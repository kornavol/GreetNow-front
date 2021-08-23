import React from 'react';
import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { sendText } from "../../actions";
import { Link } from 'react-router-dom';

const Texts = (props) => {
    const dispatch = useDispatch();

    const textSet = props.texts.map((text) => (
        
        <ListGroup.Item
            key={text._id}
            id={text._id}
            onClick={() => {dispatch(sendText(text.text)); props.setModalShow(false)}}
            style={{ cursor: "pointer" }}
        >
            <Link to='/card-editor'>
                {text.text}
            </Link>
        </ListGroup.Item>
    ));

    return <ListGroup>{textSet}</ListGroup>;
};

export default Texts;
