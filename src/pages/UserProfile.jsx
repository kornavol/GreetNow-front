import './css/UserProfile.css';
import { useState } from 'react';
import ContactList from './dashboard/ContactList';


export default function UserProfile() {
    const [state, setState] = useState(menu)

    function menu() {
        return (
            <>
            <div onClick = {() => (setState(<ContactList/>))} >Contact List</div>
            <div>Calendar</div>
            <div>User Catalog</div>
            <div>Settings</div>
            </>
        )
        
    }
    
    return (
        <div>
            {state}
        </div>
    )
}
