import '../../assets/css/wizzard.css'
import { Tabs, Tab } from "react-bootstrap";

import React, { useState } from "react";

import Bio from './Bio';
import Events from './Events';


export default function Wizzard({ unmPopUp }) {

    const [key, setKey] = useState("bio");
    const [recipient, setRecipient] = useState({ 
        firstName: '', 
        lastName: '', 
        dateOfBbirth: '', 
        gender: '', 
        relationships: [],
        events:[]
    });

    // console.log(recipient);
    
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('authToken')
      }

    function sendRecip() {
        const url = 'http://localhost:8080/recipient/new_record'


    } 

    return (

        <div id="contacts-wizzard">
            <Tabs id="wizzard-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="bio" title="bio">
                    <Bio form={recipient} setForm={setRecipient}  />
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

