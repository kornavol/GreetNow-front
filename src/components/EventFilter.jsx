import React, { useState, useEffect } from 'react';
import  { useSelector } from 'react-redux';
import Filter from "./Catalog/EvFilter";
import './css/CardRouletteAnimation.css';

/* This filter is using for Roulette component */

const EventFilter = (props) => {

    const isAuth = props.isAuth;
    const contactList = useSelector((state) => state.contacts);
    const [category, setCategory] = useState({ events: "all"});

    useEffect(() => {
        props.setEvent(category);
    }, [category]);

    const contact = contactList.map((contact, index)=>{
        return <option key={index} value={contact.firstName}>{contact.firstName}</option>
    });
    const contacts = (
    <div >
        <label htmlFor='contactlist'>Select a name</label>
        <select name='contactlist' id='contactlist'>
            {contact}
        </select>
    </div>
    );

    return (
        <div className="roulette-event-filter">
            {isAuth? contacts : null}
            <Filter setSelector={setCategory} selector={category} />
        </div>
    );
}

export default EventFilter;
