import Badge from '@material-ui/core/Badge';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    animation: {

    },
    root: {
        color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
        
    },
}));


export default function NotificationBtn({content, link, contact}) {
    const classes = useStyles();
    const history = useHistory()

    function redirect(pass) {
        history.push(pass);
    }

    function changeContact(contact) {
        contact.newCards = 0
        // console.log(contact);
        editContact(contact)
    }
    
    /* To-DO: We are using this action also in wizzard. 
    Change all structure, this actions needs to be in redux */
    function editContact(contact) {
        let url = "http://localhost:8080/recipients/update_record"

        let finalForm = new FormData();

        for (const key in contact) {
            const value = contact[key];

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
                console.log('contact was updated');
            }
        })
    );
    }

        /* Bandage setting (Material UI) */
        // let invisible = true
        // if (content > 0) {
        //     invisible = false
        // }

        let visibility = {visibility: 'hidden'}
        if (content > 0) {
            visibility.visibility = 'visible'
        } 

    return (
        <span  style={visibility}>
            <Badge
                badgeContent={content}
                color="secondary"
                // invisible = {invisible}
                showZero= {false}
                // classes={{
                //     root: classes.root
                // }}
            >
                <NotificationsActiveIcon
                    color="primary"
                    onClick={()=>{
                        changeContact(contact)
                        redirect(link);
            
                    }}
                />
            </Badge>
        </span>
    );
}


