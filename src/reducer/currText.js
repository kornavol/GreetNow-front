const currText = (state = 'Add your text', action) => {
    switch (action.type) {
        case "SEND_TEXT":
            state = action.text
            return state
        default:
            return state
    }
}

export default currText;
