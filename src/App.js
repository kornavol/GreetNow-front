import './App.css';
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Card from './pages/Card';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage';
import Cookies from './components/Cookies.jsx';
import Calendar from './pages/dashboard/Calendar';
import ContactList from './pages/dashboard/ContactList';
import Catalog from './pages/Catalog';
import Settings from './pages/dashboard/Settings';
import CardRoulette from './pages/CardRoulette';
import CardEditor from './pages/CardEditor';

function App() {

  /*  for show Component Coockies  (component) */
  const [isAccepted, setAccepted] = useState(false);

  const [isAuth, setIsAuth] = useState(false)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <UserProfile />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/roulette">
          <CardRoulette />
        </Route>
        <Route path="/editor">
          <CardEditor />
        </Route>
        <Route path="/about-us">
          <AboutUs />
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
          (<>
            <Route path="catalog">
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
          </>) : null

        }
      </Switch>

      {isAccepted ? <Cookies /> : null}
    </div>
  );
}

export default App;
