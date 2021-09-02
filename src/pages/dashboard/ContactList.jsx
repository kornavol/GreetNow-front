/* global css for table*/
import "../../components/Contacts/assets/css/style.bundle.css";
import React, { useState } from "react";

import ContactsTable from "../../components/Contacts/ContactsTable/ContactsTable";
import Wizzard from "../../components/Contacts/ContactsTable/Wizzard/Wizzard";
import { Link } from 'react-router-dom';
import './css/ContactList.css';

export default function ContactList() {
    const [switchCase, setSwitchCase] = useState("contacts");

    return (
        
        <div className="white-space">
        <div id="contact-list">
            
            {(() => {
                switch (switchCase) {
                    case "contacts":
                        return (
                            <div className="contacts-frame">
                                <header className="contacts-header">
                                <h2>Contacts</h2>
                                <Link to="#"
                                    className="contacts-custom-btn contacts-btn"
                                    onClick={() => setSwitchCase("new_record")}
                                >
                                    New Contact
                                </Link>
                                </header>
                                <ContactsTable setSwitchCase={setSwitchCase} />
                            </div>
                        );
                    case "new_record":
                        return (
                            <Wizzard
                                purpose={"create"}
                                unmPopUp={() => setSwitchCase("contacts")}
                            />
                        );
                    case "edit_contact":
                        return (
                            <Wizzard
                                purpose={"edit"}
                                unmPopUp={() => setSwitchCase("contacts")}
                            />
                        );
                    default:
                        return <h1>No project match</h1>;
                }
            })()}
        </div>
        </div>
    );
}
