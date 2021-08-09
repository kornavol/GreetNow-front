import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/* Material UI Components */
import { 
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
/* Material UI Icon */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
/* Material UI Styles */
import { makeStyles } from '@material-ui/core/styles';

import ForgotPass from '../Auth/ForgotPass';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Greetnow
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

/* Material UI Styles */
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login(props) {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(localStorage.getItem('authToken')){
            history.push("/");
        }
    }, []);

    const loginHandler = (e) => {
        e.preventDefault();

        let data = {};

        data.email = email;
        data.password = password;

        let urlLogin = 'http://localhost:8080/auth/login';
        let options = {
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        }

        function handleErrors(response) {
            console.log(response);
            if (!response.ok) {
                alert(response.statusText);
            }
            return response;
        }
        
        fetch(urlLogin, options)
            .then(handleErrors)
            .then(response=>response.json()
            .then(output=>{
                //alert(output.message);
                if(output.success){
                    localStorage.setItem('authToken', output.token);
                    props.props.setIsAuth(true);
                    //redux set auth(true);
                    history.push('/');
                }else{
                    setError(output.error);
                    setTimeout(()=>{
                        setError("");
                    }, 5000);
                }
            })
        );
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Log In
            </Typography>
            <form className={classes.form} noValidate onSubmit={loginHandler}>
                {error && <span className="error-message">{error}</span>}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=> setPassword(e.target.value)}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Login
            </Button>
            <Grid container>
                <Grid item xs>
                <Link onClick={() => {props.setModalShow(true); props.setToggleRegister(false)}} variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link onClick={() => {props.setModalShow(true); props.setToggleRegister(false)}}>
                    {"Don't have an account? Register"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
        </Container>
    );
}