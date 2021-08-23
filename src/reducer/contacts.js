const contacts = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_CONTACTS":
            //  state =[...state, action.contacts]
            state = state.concat(action.contacts);
            return state
        case "UPDATE_CONTACTS":
            return state
        case "DELETE_CONTACTS":
                return state
        default:
            return state
    }
}
// return {...state, selectedGlobalTriviaTab : action.payload};
export default contacts;
