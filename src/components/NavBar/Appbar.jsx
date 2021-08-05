import React from "react";
/* Material UI Components */
import { 
    Box,
    Button,
    useMediaQuery
} from '@material-ui/core';
/* Material UI Icons */
import EditIcon from '@material-ui/icons/Edit'
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import SettingsIcon from '@material-ui/icons/Settings';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
/* Material UI Styles */
import { useTheme } from "@material-ui/core/styles";
/* Router */
import { withRouter } from "react-router-dom";
/* React Components */
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import AppbarMobile from './AppbarMobile';
import AppbarDesktop from "./AppbarDesktop";
/* React-Bootstrap Modal */
import Modal from 'react-bootstrap/Modal';

const Appbar = (props) => {

    /* Material UI Theme */
    const theme = useTheme();
    /* Material UI Media Query */ 
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    /* Toggles between Login and Register Buttons */
    const [toggleRegister, setToggleRegister] = React.useState(true);
    /* Shows Modal */
    const [modalShow, setModalShow] = React.useState(false);
    /* Access History */
    const { history } = props;
    /* Navigates to URL */
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    /* Authentication Items */
    const authItems = [
        {
            authTitle: "Login",
            pageURL: "/login",
            icon: <PersonIcon/>
        },
        {
            authTitle: "Register",
            pagerURL: "/register",
            icon: <PersonAddIcon/>

        }
    ]

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
            pageURL: "/media-catalog",
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
        },
        {
            dashTitle: "Logout",
            pagerURL: "/logout",
            icon: <ExitToAppIcon/>
        }
    ];

    /* Modal Body */
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    {toggleRegister ? (
                        <Login
                            isLoggedIn={props.isLoggedIn} 
                            setIsLoggedIn={props.setIsLoggedIn} 
                            toggleRegister={toggleRegister} 
                            setToggleRegister={setToggleRegister} 
                            modalShow={modalShow} 
                            setModalShow={setModalShow}
                        />
                    ) : (
                        <Register 
                            isLoggedIn={props.isLoggedIn} 
                            setToggleRegister={setToggleRegister} 
                            toggleRegister={toggleRegister} 
                            setToggleRegister={setToggleRegister} 
                            modalShow={modalShow} 
                            setModalShow={setModalShow}
                        />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
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
                    isLoggedIn={props.isLoggedIn} 
                    setToggleRegister={setToggleRegister} 
                    setModalShow={setModalShow} 
                    handleButtonClick={handleButtonClick}/>
            ) : ( 
            <AppbarDesktop 
                menuItems={menuItems} 
                dashItems={dashItems} 
                isLoggedIn={props.isLoggedIn} 
                setToggleRegister={setToggleRegister} 
                setModalShow={setModalShow} 
                handleButtonClick={handleButtonClick}/>     
            )}
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Box>
    );
};

export default withRouter(Appbar);