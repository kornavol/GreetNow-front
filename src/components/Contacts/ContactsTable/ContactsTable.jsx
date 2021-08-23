import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import TRow from "./CTRow";
import THead from './CTHead';

import { getAllContacts } from "../../../actions/contactsCRUD";

export default function ContactsTable() {

    const [contacts, setContacts] = useState([]);

    const dispatch = useDispatch()


    // let contacts = [];
    let Rows = [];


    
    // useEffect(() => {
    //     dispatch(getAllContacts());
        

    // }, [dispatch]);
    
    /* for commit */

    const  contacts1 = useSelector((state) => state.contacts);


    useEffect(() => {
        setContacts(contacts1)


    }, [contacts1]);

    Rows = contacts.map((row) => {
        number++;
    
        return  <TRow key={number} number={number} contact={row} />
        

    }) 


    let number = 0;

    

 
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
                    {Rows.length > 0 ? Rows: null}
                    {/* {Rows} */}
                    </tbody>
                </table>

            </div>
        </div >
    );
}
