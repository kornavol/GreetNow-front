import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TRow from "./CTRow";
import THead from "./CTHead";

import { getAllContacts } from "../../../actions/contactsCRUD";

export default function ContactsTable(props) {
    // const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);

    let number = 0;

    const Rows = contacts.map((row) => {
        if (contacts === []) {
            console.log(1, row);
            return <h3>You don't have any contacts</h3>;
            
        } else {
            number++;
            console.log(2, row);
            return <TRow key={number} number={number} contact={row} setSwitchCase = {props.setSwitchCase} />;
        }
    });

    // useEffect(() => {
    //     dispatch(getAllContacts());
    // }, [dispatch]);


    console.log("contacts from Table", contacts);

    return (
        <div className="card-body">
            <div
                className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                // className='table'
                id="kt_datatable"
            >
                <table
                    className="datatable-table"
                /* style = {{overflowX: 'scroll'}} */
                >
                    <THead />
                    <tbody style={{}} className="datatable-body">
                        {Rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
