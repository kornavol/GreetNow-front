import React from 'react';
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { sendText } from "../../actions";
import './css/ImgCatalog.css';
import { Link } from 'react-router-dom';

const Texts = (props) => {
    const dispatch = useDispatch();
    const setModalShow = props.setModalShow;

    const textSet = props.texts.map((text, i) => (
        <Link className="link-text-catalog" to='/card-editor' key={i}>
            <ListGroup.Item
                key={text._id}
                id={text._id}
                onClick={() => {dispatch(sendText(text.text)); setModalShow(false)}}
                style={{ cursor: "pointer" }}
            >
                {text.text}
            </ListGroup.Item>
        </Link>
    ));

    return <ListGroup>{textSet}</ListGroup>;
};

export default Texts;
