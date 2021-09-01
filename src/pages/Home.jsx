import React, { useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Intro from '../components/Intro';
import CatalogHome from '../components/CatalogHome';
import Benefits from '../components/Benefits.jsx';
import UsersReviews from '../components/UsersReviews.jsx';

import { Grid } from '@material-ui/core';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import './css/Home.css';
/* AOS Scroll Animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Initializes Scroll Animation */
AOS.init();

/* Home Page */
const Home = (props) => {
    const user = props.user;
    const isAuth = props.isAuth;
    const setIsAuth = props.setIsAuth;
    const toggleRegister = props.toggleRegister;
    const setToggleRegister = props.setToggleRegister;
    const modalShow = props.modalShow;
    const setModalShow = props.setModalShow;

    const SliderData = [
        <Intro
            user={user}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            toggleRegister={toggleRegister}
            setToggleRegister={setToggleRegister}
            modalShow={modalShow}
            setModalShow={setModalShow}
        />,
        <Benefits />,
        <UsersReviews />
    ]

    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const moveDot = index => {
        setCurrent(index)
    }

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", () => {
            setisLoading(false)
            // console.log('dow is ready');
        });
        
        // return window.removeEventListener("load", setisLoading(false));
    }, []);

    console.log(isLoading);

    return (
        <div>
            {/* {isLoading ? <CircularProgress /> : */}
                <Grid container direction="column">
                    <Grid container>
                        <Grid item xs={12} className="home-slider">
                            <div className="left-arrow">
                                <NavigateBeforeOutlinedIcon onClick={prevSlide} style={{ fontSize: '5vmin' }} />
                            </div>
                            <div className="right-arrow">
                                <NavigateNextOutlinedIcon onClick={nextSlide} style={{ fontSize: '5vmin' }} />
                            </div>
                            <Grid container>
                                {SliderData.map((slide, index) => {
                                    return (
                                        <Grid key={index} item xs={12} className={index === current ? 'slide active' : 'slide'} key={index}>
                                            {index === current && (
                                                slide
                                            )}

                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <div className="container-dots">
                                {Array.from({ length: 3 }).map((item, index) => (
                                    <div key={index} onClick={() => moveDot(index)} className={current === index ? "dot active" : "dot"}></div>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            {/* } */}
        </div>
    )
}

export default Home;