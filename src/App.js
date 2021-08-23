import React, { useState, useEffect } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom'

import Appbar from './components/NavBar/Appbar';

import Home from './pages/Home';
/* for all users */

import CardRoulette from './pages/CardRoulette';
import CardEditor from './pages/CardEditor';
import Catalog from './pages/Catalog';
import Card from './pages/Card';
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
import { Grid, Button } from '@material-ui/core';

import { useDispatch } from "react-redux";
import { getAllContacts } from "./actions/contactsCRUD";

import Modal from 'react-bootstrap/Modal';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllContacts())
    }
  }, [dispatch]);

  /*  for show Component Coockies  (component) */
  const [isAccepted, setAccepted] = useState(false);
  /* Checking if user is authorized*/
  const [isAuth, setIsAuth] = useState(false);
  /* username */
  const [privateData, setPrivateData] = useState();//now it is just the first name
  /* Toggles between Login and Register Buttons */
  const [toggleRegister, setToggleRegister] = useState(true);
  /* Shows Modal */
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllContacts());
    }
  }, [isAuth]);

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
      .then(result => result.json()
        .then(output => {
          if (output.success === true) {
            setPrivateData(output.data);
            setIsAuth(true);
          } else {
            localStorage.removeItem('authToken');
            setPrivateData('');
            setIsAuth(false);
          }
        }
        ));
  }

  fetchPrivateData();

  /* Modal Body */
  function VerticalModal(verticalModal) {
    return (
      <Modal {...verticalModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
              toggleRegister={toggleRegister}
              setToggleRegister={setToggleRegister}
              modalShow={modalShow}
              setModalShow={setModalShow}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={verticalModal.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="App">
      <Grid container direction="column">
        <Grid container>
          <Grid item sm={false} md={3} />
          <Grid className="bg" item sm={12} md={6}>
            <Appbar
              user={privateData}
              setUser={setPrivateData}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              toggleRegister={toggleRegister}
              setToggleRegister={setToggleRegister}
              modalShow={modalShow}
              setModalShow={setModalShow}
            />
            <Switch>
              {/* Nav */}
              <Route exact path="/">
                <Home
                  user={privateData}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  toggleRegister={toggleRegister}
                  setToggleRegister={setToggleRegister}
                  modalShow={modalShow}
                  setModalShow={setModalShow}
                />
              </Route>
              <Route exact path="/media-catalog">
                <Catalog setModalShow={setModalShow} />
              </Route>

              <Route path="/roulette">
                <CardRoulette isAuth={isAuth} />
              </Route>
              <Route path="/card-editor">
                <CardEditor />
              </Route>
              <Route
                path="/card">
                <Card
                  user={privateData}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  toggleRegister={toggleRegister}
                  setToggleRegister={setToggleRegister}
                  modalShow={modalShow}
                  setModalShow={setModalShow}
                />
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

              <Route path="/contacts1">
                <ContactList />
              </Route>
              {isAuth ?
                (<div>
                  <Route path="/catalog">
                    <Catalog setModalShow={setModalShow} />
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
      <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
