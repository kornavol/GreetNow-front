import { createCoverageMap } from 'istanbul-lib-coverage';
import React, { useState, useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../actions/contatcInf';
import Filter from "./Catalog/EvFilter";
import './css/CardRouletteAnimation.css';

/* This filter is using for Roulette component */

const EventFilter = (props) => {

    const isAuth = props.isAuth;
    const contactList = useSelector((state) => state.contacts);
    const [category, setCategory] = useState({ events: "all"});

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(contactList.length > 0){
            props.setRelationship(contactList[0].relationships);
        }
    }, [contactList]);

    useEffect(() => {
        props.setEvent(category);
    }, [category]);

    function relationshipHandler(relationship){
        const relArr = [];
        const categories = relationship.split(',');
        categories.map(item => relArr.push(item));
        props.setRelationship(relArr);
        //dispatch(editContact(recipient));
    }

    const contact = contactList.map((contact, index)=>{
        return <option key={index} value={contact.relationships}>{contact.firstName}</option>
    });
    const contacts = (

    <div className="roulette-event-filter">
        <label htmlFor='contactlist'>Select a Card from </label><Filter setSelector={setCategory} selector={category} /><label>to send to </label>
        <select name='contactlist' id='contactlist' value={this.value} onChange={(e)=>relationshipHandler(e.target.value)}>
            {contact}
        </select>
    </div>
    );

    return (
        <div className="roulette-event-filter-container">
            {isAuth? contacts :
                <div className="roulette-event-filter"><label>Select a Card from </label> <Filter setSelector={setCategory} selector={category} /></div>
            }
        </div>
    );
}

export default EventFilter;
