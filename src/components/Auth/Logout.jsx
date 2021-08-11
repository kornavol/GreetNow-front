import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function Logout(props) {

    const history = useHistory();

    function handleLogout(){
        localStorage.removeItem('authToken');
        props.setIsAuth(false);
        props.setUser('');
        history.push('/');
    }

    return (
        <ListItem button onClick={() => {handleLogout(); props.isMobile? props.handleDrawerClose() : props.handleClose()}}>
            <ExitToAppIcon/>
            <ListItemText primary='Logout' />
        </ListItem>
    )
}

export default Logout;
