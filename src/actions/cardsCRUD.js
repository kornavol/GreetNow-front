/* CRUD for User Cards List */

export const updateCard = (contact) => {
    const url = 'http://localhost:8080/cards/update_record'
    const options = {
        method: 'POST',
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


export const deleteCard = (contact) => {
    const url = 'http://localhost:8080/cards/delete_record'
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
        // dispatch({ type: "", result })
        return result
    }
}