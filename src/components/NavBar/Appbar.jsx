import React from "react";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { List, Divider, ListItemIcon, ListItemText, ListItem, AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import EditIcon from '@material-ui/icons/Edit';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";

import Login from '../Auth/Login';
import Register from '../Auth/Register';


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

    const loginItems = [
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
            {loginItems.map((text, i) => (
                <ListItem button key={i} onClick={() => handleButtonClick(text.pageURL)}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.title} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {menuItems.map((text, i) => (
                <ListItem button key={i} onClick={() => handleButtonClick(text.pageURL)}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.menuTitle} />
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
                    {loginItems.map((text, i) => (
                <Button key={i} variant='contained' onClick={() => handleButtonClick(text.pageURL)}>{text.title}</Button>
            ))}
                    {menuItems.map((text, i) => (
                <Button key={i} onClick={() => handleButtonClick(text.pageURL)}>{text.menuTitle}</Button>
            ))}
                
                </div>
            )}
            
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default withRouter(Header);