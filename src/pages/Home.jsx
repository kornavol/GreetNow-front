import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import Presentation from '../components/Presentation.jsx';
import CardRoulette from '../components/CardRouletteHome';
import CardEditor from '../components/CardEditorHome';
import ImgCatalog from '../components/ImgCatalogHome';
import Benefits from '../components/Benefits.jsx';
import UsersReviews from '../components/UsersReviews.jsx';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

/* AOS Scroll Animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Initializes Scroll Animation */
AOS.init();

const useStyles = makeStyles(() => ({
    
    cardRoulette: {
        height: '92vh',
    },
    cardEditor: {
        height: '100vh',
    },
    benefits: {
        height: '100vh'
    },
    reviews: {
        height: '100vh'
    }
}));

/* Home Page */
const Home = () => {
    const classes = useStyles();
    const handleCardGenerator = (e) => {
        return (
            <Link to='/card' cardCase={e} />
        );
    }
  
    return (
        <Grid container direction="column">
            <Grid container>
                <Grid item xs={12} className={classes.cardRoulette}>
                    <CardRoulette  />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.cardEditor}>
                    <CardEditor />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.cardEditor}>
                    <ImgCatalog/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.benefits}>
                    <Benefits />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.reviews}>
                    <UsersReviews/>
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default Home;