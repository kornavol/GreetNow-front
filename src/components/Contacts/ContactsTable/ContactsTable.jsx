import React from "react";
import { useSelector } from "react-redux";

import THead from "./CTHead";
import TRow from "./CTRow";


export default function ContactsTable(props) {
    const contacts = useSelector((state) => state.contacts);

    let number = 0;

    const Rows = contacts.map((row) => {
        if (contacts === []) {
            return <h3>You don't have any contacts</h3>;
        } else {
            number++;
            return (
                <TRow
                    key={number}
                    number={number}
                    contact={row}
                    setSwitchCase={props.setSwitchCase}
                />
            );
        }
    });

    return (
        <div className="card-body">
            <div
                className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                id="kt_datatable"
            >
                <table className="datatable-table">
                    <THead />
                    <tbody style={{}} className="datatable-body">
                        {Rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
