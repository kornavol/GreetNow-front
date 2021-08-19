import React, { useState } from 'react';
import { Badge } from "react-bootstrap";

/* This filter is using for Roulette component */

const EventFilter = (props) => {

    const isAuth = props.isAuth;
    const [contacts, setContacts] = useState(
    <div>
        <label htmlFor contactList>Select a name</label>
        <select name='contactList' id='contactList'>
            <option value="Andreas">Andreas</option>
            <option value="Bruno">Bruno</option>
            <option value="Pio">Pio</option>
        </select>
    </div>
    );

    const fetchContacts = () => {

        const url = "http://localhost:8080/contacts";
    
        let options = {
            method: 'GET',
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        fetch(url, options)
        .then(result=>result.json()
        .then(output=>{
            if (output.success === true) {
            setContacts(output.data);
            }else{
            setContacts('');
            }
        }
        ));
    }
    isAuth? fetchContacts() : null;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {contacts}
            <Badge variant="primary">Birhday</Badge>{' '}
            <Badge variant="secondary">Weding</Badge>{' '}
            <Badge variant="success">Christmas</Badge>{' '}
            <Badge variant="danger">New Year</Badge>{' '}
        </div>
    );
}

export default EventFilter;
