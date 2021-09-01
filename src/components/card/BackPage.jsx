import './css/BackPage.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendText } from '../../actions';

const BackPage = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('Click here to compose a message or select a template from the Text Catalog');

    const dispatch = useDispatch();
    const selectedText = useSelector((state) => state.currText);

    const editToggle = () => {
        setIsEditable(true);
        setText('Please write a message');
    }

    const editTextHandler = (e) => {
        let changedText = e.target.innerText;
        setText(changedText);
    }

    function updateTextHandler(){
        dispatch(sendText(text));
        setIsEditable(false);
    }

    function keydown(e) {
        /* const enter = '/n';
        if (e.key === 13) {
            return enter;
        } 
        console.log(enter); */
    }

    const updateText = <button onClick={updateTextHandler}>✔️</button>;

    return (
        <div id="card-back" >
            <h3 onBlur = {editTextHandler} onKeyDown={keydown} onClick={editToggle} contentEditable = {isEditable}>{selectedText ? selectedText : text}</h3>
            {isEditable? updateText : null}
        </div>
    );
}

export default BackPage;