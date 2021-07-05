import { useState } from "react";

const TextItem = ({text}) => {

    //const editedText = {...text};
    const [isEditable, setIsEditable] = useState(false);

    const editCheckHandler = (e) => {
        console.log(e);
        if(e.charCode === 13){
            e.preventDefault();
        }
    }

    const editTextHandler = (e) => {
        const id = e.target.getAttribute('data-id');
        let info = e.target.innerText;
        
        //editedText[id] = info;
    }

    return (
        <div data-id='text' onKeyPress={editCheckHandler} onBlur = {editTextHandler} contentEditable = {isEditable}>
            {text}
        </div>
    )
}

export default TextItem;
