import React, { useState, useEffect } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom'

import Appbar from './components/NavBar/Appbar';

import Home from './pages/Home';
/* for all users */
import Intro from './components/Intro';
import CardRoulette from './pages/CardRoulette';
import CardEditor from './pages/CardEditor';
import Catalog from './pages/Catalog';
import Card from './pages/Card';
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

  const history = useHistory();
  /*  for show Component Coockies  (component) */
  const [isAccepted, setAccepted] = useState(false);

  /* Checking if user is authorized*/
  const [isAuth, setIsAuth] = useState(false);
  const [privateData, setPrivateData] = useState();//now it is just the first name

  const fetchPrivateData = () => {

    const url = "http://localhost:8080/private";

    let options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    }
    fetch(url, options)
    .then(result=>result.json()
    .then(output=>{
      //console.log(output);
      if (output.success === true) {
        setPrivateData(output.data);
        setIsAuth(true);
      }else{
        localStorage.removeItem('authToken');
        setPrivateData('');
        setIsAuth(false);
        /* alert(output.error); */
      }
    }
    ));

  }

  fetchPrivateData();

  /* useEffect(()=>{
    console.log('token check');
    if(!localStorage.getItem('authToken')){
      setIsAuth(false);
    }else{
      fetchPrivateData();
    }
  },[]); */

  return (
    <div className="App">
      <Grid container direction="column">
        <Grid container>
        <Grid item sm={false} md={3}/>
            <Grid className="bg" item sm={12} md={6}>
              <Appbar user={privateData} setUser={setPrivateData} isAuth={isAuth} setIsAuth={setIsAuth}/>
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
              <Route path="/roulette">
                <CardRoulette />
              </Route>
              <Route path="/card-editor">
                <CardEditor />
              </Route>
              {/* Footer */}
              <Route path="/qa">
                <QA />
              </Route>
              <Route path="/about-us">
                <AboutUs className="page" />
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
              {isAuth ?
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
              {/* To create cards base on id */}
              <Switch>
                <Route path="/cards/:id" children={<Card />} />
              </Switch>
            </Switch>
            {isAccepted ? <Cookies /> : null}
              <Footer />
            </Grid>
          <Grid item sm={false} md={3} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
