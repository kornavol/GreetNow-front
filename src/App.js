import './App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Card from './pages/Card';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage';
import Cookies from './components/Cookies.jsx';

function App() {

  /*  for show Component Coockies  (component) */
  const [isAccepted, setAccepted] = useState(false);

  

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/card">
          <Card />
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
    </Switch>

      {isAccepted? <Cookies/>: null }
      <Footer/>
    </div>
  );
}

export default App;
