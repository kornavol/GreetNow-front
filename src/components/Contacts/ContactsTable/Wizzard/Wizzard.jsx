import '../../assets/css/wizzard.css'
import { Tabs, Tab } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Bio from './Bio';
import Events from './Events';
import { editResipient } from '../../../../actions/contatcInf'


export default function Wizzard({ unmPopUp }) {

    const dispatch = useDispatch();


    const [key, setKey] = useState("bio");
    const [recipient, setRecipient] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        relationships: [],
        events: []
    });

    const recipForEdit = useSelector(state => state.contact)

    useEffect(() => {
        if (recipForEdit) {
            setRecipient(recipForEdit)
        }
    }, []);

    useEffect(() => {
        dispatch(editResipient({}))
    }, [recipient]);

    
    
    console.log('recipient', recipForEdit);


    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('authToken')
    }

    function sendRecip() {
        const url = 'http://localhost:8080/recipients/new_record';
        let finalForm = new FormData();

        for (const key in recipient) {
            const value = recipient[key];

            // if (value) {

            // }
            finalForm.append(key, value)
            console.log(`${key}: ${value}`);
        }

        const options = {
            method: 'POST',
            headers,
            body: finalForm
        }

        fetch(url, options)
    //   .then(data => data.json().then(output => setContacts([...contacts, output])));
    }

    return (

        <div id="contacts-wizzard">
            <Tabs id="wizzard-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="bio" title="bio">
                    <Bio form={recipient} setForm={setRecipient} />
                </Tab>
                <Tab eventKey="events" title="events">
                    <div><Events form={recipient} setForm={setRecipient} /></div>
                </Tab>
            </Tabs>

            <div className='d-flex justify-content-center '>
                <button
                    type="button"
                    className="btn btn-secondary m-3"
                    onClick={unmPopUp}
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary m-3" onClick={sendRecip} >Save changes</button>
            </div>
        </div>















    );
}

