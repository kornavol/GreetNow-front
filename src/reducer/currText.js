const currText = (state = 'Add your text', action) => {
    switch (action.type) {
        case "SEND_TEXT":
            state = action.text
            console.log('state_Redux',state);
            return state
        default:
            return state
    }
}

export default currText;
