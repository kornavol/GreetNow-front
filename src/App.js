import React, { useState, useEffect } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import Appbar from './components/NavBar/Appbar';

import Home from './pages/Home';
/* for all users */
import Intro from './components/Intro';
import CardEditor from './pages/CardEditor';
import Catalog from './pages/Catalog';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
/* only for authorized users */
import Calendar from './pages/dashboard/Calendar';
import ContactList from './pages/dashboard/ContactList';
import Settings from './pages/dashboard/Settings';

/* Footer */
import Footer from './components/Footer/Footer';
import QA from './pages/QA';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';

/* Other pages and components  */
import NotFoundPage from './pages/NotFoundPage';
import Cookies from './components/Cookies.jsx';

/* Material UI Grid and Components*/
import { Grid } from '@material-ui/core';

function App() {

  /*  for show Component Coockies  (component) */
  const [isAccepted, setAccepted] = useState(false);
  
  /* Checking if user is authorized*/

  const [isAuth, setIsAuth] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [background, setBackground] = useState(false);
  
  /* Change background color */
  const changeBackground = () => {
    
    if (window.scrollY >= window.screen.height - 450) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


    return (
    <div className = {`App ${background ? "red" : "blue"}`}>
      <Grid container direction="column">
        <Grid container>
          <Grid item sm={false} md={3}/>
            <Grid item sm={12} md={6}>
              <Appbar isLoggedIn={isLoggedIn}/>
                <Switch>
                  {/* Nav */}
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/media-catalog">
                    <Catalog />
                  </Route>
                  <Route path="/intro">
                    <Intro />
                  </Route>
                  <Route path="/card-editor">
                    <CardEditor />
                  </Route>
                  {/* Footer */}
                  <Route path="/qa">
                    <QA />
                  </Route>
                  <Route path="/about-us">
                    <AboutUs className ="page" />
                  </Route>
                  <Route path="/contact-us">
                    <ContactUs />
                  </Route>
                  <Route path="/impressum">
                    <Impressum />
                  </Route>
                  <Route path="/privacy-policy">
                    <PrivacyPolicy />
                  </Route>
                  <Route path="/404">
                    <NotFoundPage />
                  </Route>
                  {isLoggedIn ?
                    (<div>
                      <Route path="/catalog">
                        <Catalog />
                      </Route>
                      <Route path="/calendar">
                        <Calendar />
                      </Route>
                      <Route path="/contacts">
                        <ContactList />
                      </Route>
                      <Route path="/settings">
                        <Settings />
                      </Route>
                    </div>) : null

                    }
                </Switch>
                {isAccepted ? <Cookies /> : null}
                <Footer />
              </Grid>
            <Grid item sm={false} md={3}/>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
