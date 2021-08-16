const currText = (state = 'Add your text', action) => {
    switch (action.type) {
        case "SEND_TEXT":
            state = action.text
            console.log('state-text', state);
            return state
        default:
            return state
    }
}

export default currText;
