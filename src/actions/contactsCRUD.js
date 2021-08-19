/* CRUD for Contacnt */

// const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem('authToken')}`
// }

export const getAllContacts = () => {
    const url = 'http://localhost:8080/recipients/getAll'
    const options = {
        method: 'GET',
        headers : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    }
    
    /* dispatch comes from middleware */
    return async dispatch => {
        const response = await fetch(url, options);
        const result = await response.json()
        const contacts = result.data
        console.log('contacts from CRUD', contacts);
        dispatch({type: "GET_ALL_CONTACTS", contacts})
    }
}

export const updateContact = (contact) => {
    const url = 'http://localhost:8080/recipients/update_record'
    const options = {
        method: 'POST',
        headers : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
        // body: 
    }
    /* dispatch comes from middleware */
    return async dispatch => {
        const response = await fetch(url, options);
        const result = await response.json()
        const status = result.status
        console.log(status);
        dispatch({type: "GET_ALL_CONTACTS", paylod:{status, contact}})
    }
}