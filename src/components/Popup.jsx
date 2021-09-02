import React from "react";
import './css/Popup.css';
import { Link } from 'react-router-dom';

const Popup = props => {
    
    return (
        <div className="popup-box">
            <div className="box-content">
                <div className="popup-border">
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <Link to={`${props.content}`} target="_blank">Link: {props.content}</Link>
                </div>
            </div>
        </div>
    );
};

export default Popup;