import React from 'react';
import './css/ContactList.css';
import ContactsTable from '../../components/Contacts/ContatsTable/ContactsTable';

export default function ContactList() {
    
    /* data set from Back-end */
    const entities = [
        {
            "_id": "13asdsad1",
            "id": 1,
            "firstName": "Sonni",
            "lastName": "Gabotti",
            "email": "sgabotti0@wsj.com",
            "userName": "sgabotti0",
            "gender": "Female",
            "status": 0,
            "dateOfBbirth": "10/14/1950",
            "ipAddress": "251.237.126.210",
            "type": 1,
            "_userId": 1,
            "_createdDate": "09/07/2016",
            "_updatedDate": "05/31/2013"
          },
          {
            "_id": "13asdsad2",
            "id": 2,
            "firstName": "Adreas",
            "lastName": "Kornblum",
            "email": "sgabotti0@wsj.com",
            "userName": "sgabotti0",
            "gender": "Female",
            "status": 0,
            "dateOfBbirth": "08/07/1986",
            "ipAddress": "251.237.126.210",
            "type": 1,
            "_userId": 1,
            "_createdDate": "09/07/2016",
            "_updatedDate": "05/31/2013"
          },
    ]



    return (
        <div className="page">
            {/* Add:
            Filters
            Search
            Button: Add new custommer

            */}
            <ContactsTable entities = {entities}/>
            {/* Pagination */}
        </div>
    );
}
