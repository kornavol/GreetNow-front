import React, {useState} from "react";
import Logout from "../Auth/Logout";
/* Material UI alternative for ternary operator */
import clsx from 'clsx';
/*Material UI Components*/
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List, 
    ListItem,
    ListItemIcon, 
    ListItemText,
    makeStyles,
    Toolbar, 
    Typography,
    useTheme
} from '@material-ui/core';
/* Material UI Icons */
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
/*Drawer Styles*/
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
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

const AppbarMobile = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const username = props.user;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                style={{backgroundColor:theme.palette.secondary.dark}}
                className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
                })}
            >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, props.open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    GreetNow
                </Typography>
            </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/>
                    {props.isAuth ? (
                        <List>
                            <ListItem >
                                <ListItemIcon><PersonIcon/></ListItemIcon>
                                <ListItemText primary= {'Hi ' + username}/>
                            </ListItem>
                                </List>
                            ):(
                                <List>
                            <ListItem button onClick={() => {props.setModalShow(true); props.setToggleRegister(true); props.setOpen(false)}}>
                                <ListItemIcon><PersonIcon/></ListItemIcon>
                                <ListItemText primary='Login'/>
                            </ListItem>
                            <ListItem button onClick={() => {props.setModalShow(true); props.setToggleRegister(false); props.setOpen(false)}}>
                                <ListItemIcon><PersonAddIcon/></ListItemIcon>
                                <ListItemText primary='Register'/>
                            </ListItem>
                            </List>
                            )}                    
                <Divider/>
                {props.isAuth ? (
                <List>
                    {props.menuItems.map((menu, i) => (
                        <ListItem button key={i} onClick={() => {props.handleButtonClick(menu.pageURL); props.handleDrawerClose()}}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.menuTitle} />
                        </ListItem>
                    ))}
                    {props.dashItems.splice(-1).map((dash, i) => (
                        <ListItem button key={i} onClick={() => {props.handleButtonClick(dash.pageURL); props.handleDrawerClose()}}>
                            <ListItemIcon>{dash.icon}</ListItemIcon>
                            <ListItemText primary={dash.dashTitle} />
                        </ListItem>
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
                </List>
                ):(
                    <List>
                    {props.menuItems.map((menu, i) => (
                        <ListItem button key={i} onClick={() => {props.handleButtonClick(menu.pageURL); props.handleDrawerClose()}}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.menuTitle} />
                        </ListItem>
                    ))}
                </List>
                    )}
            </Drawer>   
        </div>      
    );
};

export default AppbarMobile;