import React, { useState } from 'react';
import './css/ContactList.css';

/* Global Theme Styles(used by all pages) */
import '../../components/Contacts/assets/plugins/global/plugins.bundle.css'
import '../../components/Contacts/assets/plugins/global/plugins.bundle.css'
import '../../components/Contacts/assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../../components/Contacts/assets/css/style.bundle.css'
/* Layout Themes(used by all pages) */
// import '../../components/Contacts/assets/css/themes/layout/header/base/light.css'
// import '../../components/Contacts/assets/css/themes/layout/header/menu/light.css'
// import '../../components/Contacts/assets/css/themes/layout/brand/dark.css'
// import '../../components/Contacts/assets/css/themes/layout/aside/dark.css'

import ContactsTable from '../../components/Contacts/ContactsTable/ContactsTable';


export default function ContactList() {

    const [contacts, setContacts] = useState([{
        _id: "13asdsad1",
        firstName: "Sonni",
        lastName: "Gabotti",
        dateOfBbirth: "10/14/1950",
        gender: "Female",
        relationship: ['family'],
        events: ['birthday', 'Christmas']
    },
    {
        _id: "13asdsad1",
        firstName: "Andreas",
        lastName: "Kornblum",
        dateOfBbirth: "08/07/1986",
        gender: "Male",
        relationship: ['family'],
        events: ['birthday', 'Christmas']
    }]);


    return (
        <div className="page">
            {/*         Add:
            Filters
            Search
            Button: Add new custommer */}
            <ContactsTable contacts = {contacts}/>
        </div>


    );
}
