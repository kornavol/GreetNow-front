const contacts = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_CONTACTS":
            //  state =[...state, action.contacts]
            // state = state.concat(action.contacts);
            return action.contacts
        case "UPDATE_CONTACTS":
            return state
        case "DELETE_CONTACTS":
                return state
        default:
            return state
    }
}
export default contacts;
