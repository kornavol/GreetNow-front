import './css/BackPage.css';
import { useEffect, useState } from 'react';

const BackPage = () => {

    const [text, setText] = useState('click here to change the text');

    useEffect(() => {
        const changedText = sessionStorage.getItem('text');
        if(changedText){
            setText(changedText);
        }
    },[])

    const [isEditable, setIsEditable] = useState(false);

    const editToggle = () => {
        setIsEditable(true);
    }

    const editTextHandler = (e) => {
        let changedText = e.target.innerText;
        sessionStorage.setItem('text', changedText);
        setText(changedText);
    }

    return (
        <div id="card-back" onBlur = {editTextHandler} contentEditable = {isEditable}>
            <p onClick={editToggle}>{text}</p>
        </div>
    );
}

export default BackPage;