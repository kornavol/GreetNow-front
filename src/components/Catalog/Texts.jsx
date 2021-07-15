import React from 'react';
import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { sendText } from '../../actions';

const Texts = ({ texts }) => {
    
    const dispatch = useDispatch();
    
    function dispatchToRedux(text) {
        console.log('dispatch-text', text);
        dispatch(sendText(text))
    }


    console.log("textssss", texts);
    const textSet = texts.map((text) => (
        <ListGroup.Item
            key={text.id}
            id={text.id}
            onClick={() => { dispatchToRedux(text) }}
            style={{ cursor: 'pointer' }}
        >
            {text.title}
        </ListGroup.Item>
    ));

    return <ListGroup>{textSet}</ListGroup>;
};

export default Texts;
