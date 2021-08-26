/* To-do. Change logic of initial picture  */


const currPict = (state = {name: 'cover-card-editor.png'}, action) => {
    
    // console.log('from CurrPic Storage:', state  );
    switch (action.type) {
        case "SEND_PICT":
            state = action.picture
            return state
        default:
            return state
    }
}

export default currPict;
