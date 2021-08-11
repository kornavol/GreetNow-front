import React, { useEffect, useMemo } from "react";
import TRow from "./CTRow";
import THead from './CTHead';

export default function ContactsTable({ contacts }) {

    let number = 0;

    const Rows = contacts.map((row) => {
    number++;      
    return  <TRow key={number} number={number} contacts={row} />
})
 
    return (
        <div className="card-body">
            <div
                className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                // className='table'
                id="kt_datatable"
            >
                <table className="datatable-table" 
                /* style = {{overflowX: 'scroll'}} */
                >
                    <THead />
                    <tbody style={{}} className="datatable-body">
                        {Rows}
                    </tbody>
                </table>

            </div>
        </div >
    );
}
