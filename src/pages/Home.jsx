import './css/Home.css';
import { Link } from 'react-router-dom';
import Presentation from '../components/Presentation.jsx';
import ImgCatalog from '../components/ImgCatalog.jsx';
import Benefits from '../components/Benefits.jsx';
import UsersReviews from '../components/UsersReviews.jsx';
import Footer from '../components/Footer';



export default function Home() {

    const handleCardGenerator = (e) => {
        return (
            <Link to='/card' cardCase = {e}/>
        );
    }

    return (
        <div>
            <Presentation />
            <div id="home-card-choice">
                <h3>You can decide how to create a card</h3>
                {/* Redirect to Card Roulete Component */}
                <Link to='/roulette'><div>CardRoulette</div></Link>
                {/* Redirect to Card Roulete Component */}
                <Link to='/editor'><div /* onClick={()=>handleCardGenerator(editor)} */>CardEditor</div></Link>
                <ImgCatalog />
            </div>
            <Benefits />
            <UsersReviews />
            <Footer />
        </div>
    )
}
