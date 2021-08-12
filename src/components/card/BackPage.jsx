import './css/BackPage.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendText } from '../../actions';

const BackPage = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('click here to change this text or select one from the Text Catalog');

    const dispatch = useDispatch();
    const selectedText = useSelector((state) => state.currText);
    console.log(selectedText);

    const editToggle = () => {
        setIsEditable(true);
        setText('Dear');
    }

    const editTextHandler = (e) => {
        let changedText = e.target.innerText;
        setText(changedText);
    }

    function updateTextHandler(){
        dispatch(sendText(text));
        setIsEditable(false);
    }

    const updateText = <button onClick={updateTextHandler}>✔️</button>;

    return (
        <div id="card-back" >
            <p onBlur = {editTextHandler} onClick={editToggle} contentEditable = {isEditable}>{selectedText!=='null'? selectedText : text}</p>
            {isEditable? updateText : null}
        </div>
    );
}

export default BackPage;