const currText = (state = 'null', action) => {
    switch (action.type) {
        case "SEND_TEXT":
            return action.text
        default:
            return state
    }
}

export default currText;
