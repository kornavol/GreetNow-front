import './Home.css';

import Presentation from '../components/Presentation.jsx';
import ImgCatalog from '../components/ImgCatalog.jsx';
import Benefits from '../components/Benefits.jsx';
import UsersReviews from '../components/UsersReviews.jsx'


export default function Home() {
    return (
        <div>
            <Presentation />
            <h3>You can decide how to create a card</h3>
            {/* Redirect to Card Roulete Component */}
            <div>CardRoulette</div>
            {/* Redirect to Card Roulete Component */}
            <div>CardEditor</div>
            <ImgCatalog />
            <Benefits />
            <UsersReviews />
        </div>
    )
}
