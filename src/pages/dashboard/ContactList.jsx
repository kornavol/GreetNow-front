import React, {useState} from 'react';
import './css/ContactList.css';
import ContactsTable from '../../components/Contacts/ContactsTable/ContactsTable';

export default function ContactList() {

    const [contacts, setContacts] = useState([{
        _id: "13asdsad1",
        firstName: "Sonni",
        lastName: "Gabotti",
        dateOfBbirth: "10/14/1950",
        gender: "Female",
        relationship:['family'],
        events:['birthday', 'Christmas']
      },
      {
        _id: "13asdsad1",
        firstName: "Andreas",
        lastName: "Kornblum",
        dateOfBbirth: "08/07/1986",
        gender: "Male",
        relationship:['family'],
        events:['birthday', 'Christmas']
      }]);
    

    return (
        <div className="page">
            Add:
            Filters
            Search
            Button: Add new custommer

           
            {/* <ContactsTable entities = {entities}/> */}
            {/* Pagination */}
        </div>
    );
}
