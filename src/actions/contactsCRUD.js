/* CRUD for Contacnt */

// const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem('authToken')}`
// }

export const getAllContacts = () => {
    const url = `${process.env.REACT_APP_ROUTE}/recipients/getAll`
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    }

    /* dispatch comes from middleware */
    return async dispatch => {
        const response = await fetch(url, options);
        const result = await response.json()
        const contacts = result.data
        dispatch({ type: "GET_ALL_CONTACTS", contacts })
    }
}

export const deleteContact = (contact) => {
    const url = `${process.env.REACT_APP_ROUTE}/recipients/delete_record`
    const options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(contact)
    }

    /* dispatch comes from middleware */
    return async dispatch => {
        const response = await fetch(url, options);
        const result = await response.json()
        // dispatch({ type: "DELETE_CONTACTS", result })
        return result
    }
}