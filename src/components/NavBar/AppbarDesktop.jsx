import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../Auth/Logout";
/* Material UI Components */
import { 
    AppBar,
    Button,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar, 
    Typography,   
} from '@material-ui/core';
/* Material UI Icons */
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
/* Material UI Styles */
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
        "&.active": {
            color:'#ff0a54'
    },
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
        color: '#ff0a54'
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
/* Menu Styles */
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
        backgroundColor: '#ff0a54',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
            fontFamily: 'Nunito'
        },
        },
    },
}))(MenuItem);


const AppbarDesktop = (props) => {
    /* Material UI Styles */
    const classes = useStyles();
    /* Dropdown Menu Open and Close Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div id="appbar" className={classes.root}>
            <AppBar className={classes.backgroundColor} position="static" elevation={0}>
                <Toolbar>
                    {props.isAuth ? (
                        <div>
                            <Button className={classes.dashboard} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Dashboard
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {props.dashItems.map((dash, i) => (
                                <StyledMenuItem key={i} onClick={()=>{props.handleButtonClick(dash.pageURL); handleClose()}}>
                                <ListItemIcon>
                                    {dash.icon}
                                </ListItemIcon>
                                <ListItemText primary={dash.dashTitle} />
                                </StyledMenuItem>
                                ))}
                                <Logout isMobile={props.isMobile} handleClose={handleClose} setUser={props.setUser} setIsAuth={props.setIsAuth}/>
                            </StyledMenu>
                        </div>
                    ) : (
                        <div>
                            <Button className={classes.login} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Login
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem onClick={() => {props.setModalShow(true); props.setToggleRegister(true); handleClose()}}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="small"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={() => {props.setModalShow(true); props.setToggleRegister(false); handleClose()}}>
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
                                    
                                    <Button className={classes.button} key={i} component={NavLink} to={menu.pageURL}>{menu.menuTitle}</Button>
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