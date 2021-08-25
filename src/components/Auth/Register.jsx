import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/* Material UI Components */
import { 
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
/* Material UI Icon */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
/* Material UI Styles */
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Greet Now
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'black',
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    logo: {
        fontFamily: 'Norican',
        margin: theme.spacing(1)
    },
    link: {
        color: 'black',
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.dark
        }
    }
}));

export default function Register(props) {
    const classes = useStyles();

    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const registerHandler = (e) => {
        e.preventDefault();

        let data = {};

        data.firstName = firstName;
        data.lastName = lastName;
        data.email = email;
        data.password = password;

        let url = 'http://localhost:8080/auth/register';
        let options = {
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }

        if(password !== confirmPassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(()=>{
                setError("");
            }, 5000);
            return setError("Passwords do not match!");
        }

        fetch(url, options)
        .then(result=>result.json()
        .then(output=>
            {
                if(output.success) {
                    alert('Congrats, you registered as well! Please login.');
                    history.push("/login");
                } else {
                    alert('This user already exists'); //check this and other kind of possible errors
                    setError(output.error);
                    setTimeout(()=>{
                        setError("");
                    }, 5000);
                }
                //console.log(output);
            }
        ))
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Register
            </Typography>
            <Typography className={classes.logo} component="h1" variant="h5">
            Greet Now
            </Typography>
            {error && <span className="error-message">{error}</span>}
            <form className={classes.form} noValidate onSubmit={registerHandler}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e)=> setFirstName(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={(e)=> setLastName(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e)=> setEmail(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Register
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                <Link className={classes.link} onClick={() => {props.setModalShow(true); props.setToggleRegister(true)}} variant="body2">
                    {"Already have an account? Sign in"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    );
}