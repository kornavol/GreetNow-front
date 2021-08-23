/* global css for table*/
import "../../components/Contacts/assets/css/style.bundle.css";
import React, { useState } from "react";

import ContactsTable from "../../components/Contacts/ContactsTable/ContactsTable";
import Wizzard from "../../components/Contacts/ContactsTable/Wizzard/Wizzard";

export default function ContactList() {
    const [switchCase, setSwitchCase] = useState("contacts");

    return (
        <div id="contact-list" className="page">
            {(() => {
                switch (switchCase) {
                    case "contacts":
                        return (
                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setSwitchCase("new_record")}
                                >
                                    New Record
                                </button>
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
    );
}
