import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { 
    Box, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

function Logout(props) {
    const StyledMenuItem = props.StyledMenuItem;
    const history = useHistory();

    function handleLogout(){
        localStorage.removeItem('authToken');
        props.setIsAuth(false);
        props.setUser('');
        history.push('/');
        props.handleDrawerClose();
        props.handleClose();
    }

    return (
        <Box>
            {props.isMobile ? (
                <ListItem button onClick={() => handleLogout()}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            ):(
                <StyledMenuItem onClick={() => handleLogout()}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </StyledMenuItem>
            )}
        </Box>
    )
}

export default Logout;
