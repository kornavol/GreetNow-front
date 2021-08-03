import React from "react";
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
        backgroundColor: "#FFFFFF"
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
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    dashboard: {
        color: '#ff9b85'
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
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
        },
    },
}))(MenuItem);


const AppbarDesktop = (props) => {
    /* Material UI Styles */
    const classes = useStyles();
    /* Dropdown Menu Open and Close Functions */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.backgroundColor} position="static" elevation={0}>
                <Toolbar>
                    {props.isLoggedIn ? (
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
                            </StyledMenu>
                        </div>
                    ) : (
                        <div>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                    <div className={classes.headerOptions}>
                                {props.menuItems.map((menu, i) => (
                                    <Button key={i} onClick={() => props.handleButtonClick(menu.pageURL)}>{menu.menuTitle}</Button>
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