const currPict = (state = '', action) => {
    switch (action.type) {
        case "SEND_PICT":
            state = action.picture
            console.log(state);
            return state
        default:
            return state
    }
}

export default currPict;
