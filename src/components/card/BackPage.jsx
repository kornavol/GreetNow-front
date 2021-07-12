import './css/BackPage.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendText } from '../../actions';

const BackPage = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('click here to change the text or select one from the Text Catalog');

    const dispatch = useDispatch();
    const selectedText = useSelector((state) => state.currText.body);
    console.log(selectedText);

    /* useEffect(() => {
        const changedText = sessionStorage.getItem('text');
        if(changedText){
            setText(changedText);
        }
    },[]); */

    const editToggle = () => {
        setIsEditable(true);
    }

    const editTextHandler = (e) => {
        let changedText = e.target.innerText;
        /* sessionStorage.setItem('text', changedText); */
        setText(changedText);
    }

    function updateTextHandler(){
        dispatch(sendText({
            "userId": 1,
            "id": 1,
            "title": "custom text",
            "body": text
          }));
        setIsEditable(false);
    }

    const updateText = <button onClick={updateTextHandler}>✔️</button>;

    return (
        <div id="card-back" >
            <p onBlur = {editTextHandler} onClick={editToggle} contentEditable = {isEditable}>{selectedText!=null? selectedText : text}</p>
            {isEditable? updateText : null}
        </div>
    );
}

export default BackPage;