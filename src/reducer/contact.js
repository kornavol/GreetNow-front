/* set and get contact for CRUD operations */

const contact = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_RECIP_RECORD':
            return action.payload;
    
        default:
            return state;
    }
}  

export default contact;