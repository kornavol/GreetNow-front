import React, {useState, useEffect} from "react";
/* Material UI Components */
import { 
    Box,
    Button,
    MenuItem,
    useMediaQuery,
    useTheme,
    withStyles
} from '@material-ui/core';
/* Material UI Icons */
import EditIcon from '@material-ui/icons/Edit'
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import SettingsIcon from '@material-ui/icons/Settings';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
/* Router */
import { withRouter } from "react-router-dom";
/* React Components */
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import AppbarMobile from './AppbarMobile';
import AppbarDesktop from "./AppbarDesktop";
/* React-Bootstrap Modal */
import Modal from 'react-bootstrap/Modal';

/* Menu Item Styles */
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
        backgroundColor: '#dc004e',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
            fontFamily: 'Nunito'
        },
        },
    },
}))(MenuItem);

const Appbar = (props) => {

    
    const setUser = props.setUser;
    const setIsAuth = props.setIsAuth;
    const user = props.user;
    const isAuth = props.isAuth;

    /* Material UI Theme */
    const theme = useTheme();
    /* Material UI Media Query */ 
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    /* Toggles between Login and Register Buttons */
    const [toggleRegister, setToggleRegister] = useState(true);
    /* Shows Modal */
    const [modalShow, setModalShow] = useState(false);
    /* Access History */
    const { history } = props;
    /* Navigates to URL */
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    /* Desktop Dropdown Menu Open and Close Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    /* Mobile Drawer Open and Close Functions */
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        console.log('login');
        console.log(history);
    })

    useEffect(() => {
        console.log('toggleRegister');
    }, [toggleRegister])

    useEffect(() => {
        console.log('modalShow');
    }, [modalShow])

    useEffect(() => {
        console.log('mounted');
    },[]) 
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

    const dashItems = [
        {
            dashTitle: "Catalog",
            pageURL: "/catalog",
            icon: <PhotoAlbumIcon/>
        },
        {
            dashTitle: "Calendar",
            pageURL: "/calendar",
            icon: <EventIcon/>      
        },
        {
            dashTitle: "Contacts",
            pageURL: "/contacts",
            icon: <PermContactCalendarIcon/>
        },
        {
            dashTitle: "Settings",
            pageURL: "/settings",
            icon: <SettingsIcon/>
        }
    ];

    /* Modal Body */
    function MyVerticallyCenteredModal(modalVertical) {
        return (
            <Modal {...modalVertical} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    {toggleRegister ? (
                        <Login
                            isAuth={isAuth}
                            setIsAuth={setIsAuth}
                            toggleRegister={toggleRegister} 
                            setToggleRegister={setToggleRegister} 
                            modalShow={modalShow} 
                            setModalShow={setModalShow}
                            />
                    ) : (
                        <Register
                            isAuth={isAuth} 
                            setToggleRegister={setToggleRegister} 
                            toggleRegister={toggleRegister} 
                            setToggleRegister={setToggleRegister} 
                            modalShow={modalShow} 
                            setModalShow={setModalShow}
                        />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={modalVertical.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Box>
            {isMobile ? ( 
                <AppbarMobile 
                    menuItems={menuItems} 
                    dashItems={dashItems} 
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                    user={user}
                    setUser={setUser}
                    setToggleRegister={setToggleRegister} 
                    setModalShow={setModalShow} 
                    handleButtonClick={handleButtonClick}
                    open={open}
                    setOpen={setOpen}
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    StyledMenuItem={StyledMenuItem}
                    />
            ) : ( 
            <AppbarDesktop
                isMobile={isMobile}
                menuItems={menuItems} 
                dashItems={dashItems} 
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                user={user}
                setUser={setUser}
                setToggleRegister={setToggleRegister} 
                setModalShow={setModalShow} 
                handleButtonClick={handleButtonClick}
                open={open}
                setOpen={setOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                StyledMenuItem={StyledMenuItem}
                />     
            )}
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Box>
    );
};

export default withRouter(Appbar);