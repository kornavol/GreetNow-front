import "../../assets/css/wizzard.css";
import { Tabs, Tab } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Bio from "./Bio";
import Events from "./Events";
import { editContact } from "../../../../actions/contatcInf";
import { getAllContacts } from "../../../../actions/contactsCRUD";

export default function Wizzard({ unmPopUp, purpose }) {
    const dispatch = useDispatch();

    const initRecip = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        relationships: [],
        events: [],
        newCards: 0
    };

    const [key, setKey] = useState("bio");
    const [recipient, setRecipient] = useState(initRecip);

    /* Confirm button logic */

    let confirm = (
        <button
            type="button"
            className="btn btn-primary m-3"
            onClick={() => setKey("events")}
        >
            Next
        </button>
    );

    if (key === "events") {
        confirm = (
            <button
                type="submit"
                className="btn btn-primary m-3"
                // onClick={{sendRecip}}
                onClick={() => {
                    sendRecip()
                    unmPopUp()
                }}
            >
                <span className="indicator-label">Save</span>
                {/* <span class="indicator-progress">Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span> */}
            </button>
        );
    }

    const recipForEdit = useSelector((state) => state.contact);
    console.log('recipForEdit:', recipForEdit);

    useEffect(() => {
        if (recipient == initRecip) {
            dispatch(editContact({}));
        }
    }, [recipient]);

    useEffect(() => {
        /* Checking if object is empty */
        if (Object.entries(recipForEdit).length !== 0) {
            setRecipient(recipForEdit);
            console.log('recipForEdit -USE:', recipForEdit);
        }
    }, []);

    function sendRecip() {
        let url = "";

        switch (purpose) {
            case "create":
                url = "http://localhost:8080/recipients/new_record";
                break;
            case "edit":
                url = "http://localhost:8080/recipients/update_record";
                break;
        }

        let finalForm = new FormData();

        for (const key in recipient) {
            let value = recipient[key];

            /* We need additional to check type of value and for each arr. or obj. put each element separately, 
            because append to the form automatically convert data to a string   */
            if (value === null) {
                value = ""
                
            }

            /* Don't caunt an object */
            if (Array.isArray(value)) {
                value.forEach((element) => {
                    finalForm.append(key, element);
                });
            } else {
                finalForm.append(key, value);
            }
        }

        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            body: finalForm,
        };

        fetch(url, options).then((data) =>
            data.json().then((output) => {
                if (output.status === "success") {
                    dispatch(getAllContacts());
                }
            })
        );
    }

    console.log('recipient', recipient);

    return (
        <div id="contacts-wizzard">
            <Tabs id="wizzard-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="bio" title="bio">
                    <Bio form={recipient} setForm={setRecipient} />
                </Tab>
                <Tab eventKey="events" title="events">
                    <div>
                        <Events form={recipient} setForm={setRecipient} />
                    </div>
                </Tab>
            </Tabs>

            <div className="d-flex justify-content-center ">
                <button
                    type="button"
                    className="btn btn-secondary m-3"
                    onClick={unmPopUp}
                >
                    Close
                </button>
                {confirm}
            </div>
        </div>
    );
}
