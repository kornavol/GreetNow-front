import './css/ContactList.css';

/* Global Theme Styles(used by all pages) */
// import '../../components/Contacts/assets/plugins/global/plugins.bundle.css'
// import '../../components/Contacts/assets/plugins/global/plugins.bundle.css'
// import '../../components/Contacts/assets/plugins/custom/prismjs/prismjs.bundle.css'

/* main css for table. Needs to be changed */
import '../../components/Contacts/assets/css/style.bundle.css'

/* Layout Themes(used by all pages) */
// import '../../components/Contacts/assets/css/themes/layout/header/base/light.css'
// import '../../components/Contacts/assets/css/themes/layout/header/menu/light.css'
// import '../../components/Contacts/assets/css/themes/layout/brand/dark.css'
// import '../../components/Contacts/assets/css/themes/layout/aside/dark.css'

import React, { useState, useEffect } from 'react';

import ContactsTable from '../../components/Contacts/ContactsTable/ContactsTable';
// import {Wizzard as WizzComp} from '../../components/Contacts/Wizzard';
import Wizzard from '../../components/Contacts/ContactsTable/Wizzard/Wizzard';


export default function ContactList() {

    const [switchCase, setSwitchCase] = useState('contacts')

    return (

        <div id='contact-list' className="page">
            <style
                scoped
                dangerouslySetInnerHTML={{
                    __html: "@import '../../components/Contacts/assets/css/style.bundle.css'"
                }}
            />
            {(() => {
                switch (switchCase) {
                    case 'contacts':
                        return (
                            <div>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => setSwitchCase('new_record')}
                                >
                                    New Record
                                </button>
                                <ContactsTable />
                            </div>)
                    case 'new_record':
                        return <Wizzard unmPopUp={() => { setSwitchCase('contacts') }} />
                    default:
                        return <h1>No project match</h1>;
                }
            })()}
        </div>


    );
}
