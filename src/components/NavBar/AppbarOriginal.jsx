import React from "react";
/* Material UI ternary operator replacement*/
import clsx from 'clsx';
/*Material UI Components*/
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { 
    List, 
    Divider, 
    ListItemIcon, 
    ListItemText, 
    ListItem, 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Button, 
    useMediaQuery
    } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import EditIcon from '@material-ui/icons/Edit';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import MenuIcon from "@material-ui/icons/Menu";
/*Material UI Styles*/
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import ForgotPass from '../Auth/ForgotPass';

/* React-Bootstrap */
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody';


/*Drawer Styles*/

const drawerWidth = 300;

const drawerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

/*Desktop Navbar Settings*/

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
        flexGrow: 1
        }
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    }
}));

const Header = props => {

    /*Drawer Functions*/
    const drawerClasses = drawerStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    /*Desktop Navbar Functions*/

    const { history } = props;
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

        const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    /*Login and Register Functions*/
    
    function login(){
        alert('Pop-up login form')
        return <Login/>
    }

    function register(){
        alert('Pop-up register form')
        return <Register/>
    }

    /* Navbar Items */
    const menuItems = [
        {
        menuTitle: "Home",
        pageURL: "/",
        icon: <HomeIcon/>
        },
        {
        menuTitle: "Card Roulette",
        pageURL: "/roulette",
        icon: <TrackChangesIcon/>
        },
        {
        menuTitle: "Card Editor",
        pageURL: "/card-editor",
        icon: <EditIcon/>
        },
        {
        menuTitle: "Catalog",
        pageURL: "/media-catalog",
        icon: <PhotoAlbumIcon/>
        }
    ];

    const authItems = [
        {
        title: "Login",
        pageURL: "/login",
        icon: <PersonIcon/>      
        },
        {
        title: "Register",
        pageURL: "/register",
        icon: <PersonAddIcon/>
        }
    ];

    const [modalShow, setModalShow] = React.useState(false);
    const [isLogin, setLogin] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                {isLogin ? <Login isLogin={isLogin} setLogin={setLogin} modalShow={modalShow} setModalShow={setModalShow}/>
                : <Register isLogin={isLogin} setLogin={setLogin} modalShow={modalShow} setModalShow={setModalShow}/>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}




    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            {isMobile ? (
                <>
                <div className={drawerClasses.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(drawerClasses.appBar, {
            [drawerClasses.appBarShift]: open,
            })}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(drawerClasses.menuButton, open && drawerClasses.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                GreetNow
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            className={drawerClasses.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: drawerClasses.drawerPaper,
            }}
        >
            <div className={drawerClasses.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={() => {setModalShow(true); setLogin(true); setOpen(false)}}>
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary='Login'/>
                </ListItem>
                <ListItem button onClick={() => {setModalShow(true); setLogin(false); setOpen(false)}}>
                <ListItemIcon><PersonAddIcon/></ListItemIcon>
                <ListItemText primary='Register'/>
                </ListItem>
            </List>
            <Divider />
            <List>
            {menuItems.map((menu, i) => (
                <ListItem button key={i} onClick={() => handleButtonClick(menu.pageURL)}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.menuTitle} />
                </ListItem>
            ))}
            </List>
        </Drawer>
        
        </div>
                </>
            ) : (
                <div className={classes.headerOptions}>
                    <Typography variant="h6" className={classes.title}>
                        GreetNow
                    </Typography>
                    

            {menuItems.map((menu, i) => (
                <Button key={i} onClick={() => handleButtonClick(menu.pageURL)}>{menu.menuTitle}</Button>
            ))}
                </div>
            )}
                    <Button onClick={() => {setModalShow(true); setLogin(true)}}>Login</Button>
                    <Button onClick={() => {setModalShow(true); setLogin(false)}}>Register</Button>
            </Toolbar>
        </AppBar>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default withRouter(Header);

 