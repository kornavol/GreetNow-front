import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../Auth/Logout";
/* Material UI Components */
import { 
    AppBar,
    Button,
    Divider,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar, 
    Typography,
    withStyles  
} from '@material-ui/core';
/* Material UI Icons */
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import './css/Appbar.css';

/* Desktop Navbar Styles */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    backgroundColor: {
        backgroundColor: "transparent"
    },
        menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        color: '#000000',
        fontFamily: 'Norican',
        fontSize: '1.7rem',
        [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
        }
    },
    button: {
        fontFamily: 'Nunito',
        "&.active, &:hover": {
            color:'#dc004e'
        }
    },
    login: {
        fontFamily: 'Nunito',
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    dashboard: {
        color: '#dc004e'
    }
}));

/* Menu Styles */
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
},
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    {...props}
    />
));


const AppbarDesktop = (props) => {
    /* Material UI Styles */
    const classes = useStyles();
    const username = props.user;
    const StyledMenuItem = props.StyledMenuItem;

    return (
        <div id="appbar" className={classes.root}>
            <AppBar className={classes.backgroundColor} position="static" elevation={0}>
                <Toolbar>
                    {props.isAuth ? (
                        <div>
                            <Button className={classes.dashboard} aria-controls="simple-menu" aria-haspopup="true" onClick={props.handleClick}>
                                Dashboard
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={props.anchorEl}
                                keepMounted
                                open={Boolean(props.anchorEl)}
                                onClose={props.handleClose}
                            >   
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={ 'Hi ' + username}/>
                                </StyledMenuItem>
                                <Divider/>
                                {props.dashItems.map((dash, i) => (
                                <StyledMenuItem key={i} onClick={()=>{props.handleButtonClick(dash.pageURL); props.handleClose()}}>
                                    <ListItemIcon>
                                        {dash.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={dash.dashTitle} />
                                </StyledMenuItem>
                                ))}
                                <Logout
                                    isMobile={props.isMobile}
                                    setUser={props.setUser}
                                    setIsAuth={props.setIsAuth}
                                    handleButtonClick={props.handleButtonClick}
                                    open={props.open}
                                    setOpen={props.setOpen}
                                    handleDrawerOpen={props.handleDrawerOpen}
                                    handleDrawerClose={props.handleDrawerClose}
                                    anchorEl={props.anchorEl}
                                    setAnchorEl={props.setAnchorEl}
                                    handleClick={props.handleClick}
                                    handleClose={props.handleClose}
                                    StyledMenuItem={props.StyledMenuItem}
                                    />
                            </StyledMenu>
                        </div>
                    ) : (
                        <div>
                            <Button className={classes.login} aria-controls="simple-menu" aria-haspopup="true" onClick={props.handleClick}>
                                Login
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={props.anchorEl}
                                keepMounted
                                open={Boolean(props.anchorEl)}
                                onClose={props.handleClose}
                            >
                                <StyledMenuItem onClick={() => {props.setModalShow(true); props.setToggleRegister(true); props.handleClose()}}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="small"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={() => {props.setModalShow(true); props.setToggleRegister(false); props.handleClose()}}>
                                    <ListItemIcon>
                                        <PersonAddIcon fontSize="small"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>
                    )}
                    {/* <Button className={classes.button} key={i} onClick={() => props.handleButtonClick(menu.pageURL)}>{menu.menuTitle}</Button> */}
                    <div className={classes.headerOptions}>
                                {props.menuItems.map((menu, i) => (
                                    <Button className={classes.button} key={i} component={NavLink} exact={true} to={menu.pageURL}>{menu.menuTitle}</Button>
                                ))}
                                <Typography variant="h6" className={classes.title}>
                                    GreetNow
                                </Typography>
                    </div>         
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default AppbarDesktop;