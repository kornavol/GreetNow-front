const currImg = (state = 'Add your image', action) => {
    switch (action.type) {
        case "SEND_IMAGE":
            state = action.imgUrl
            console.log('state_Redux',state);
            return state
        default:
            return state
    }
}

export default currImg;