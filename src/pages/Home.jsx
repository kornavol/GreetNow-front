import './css/Home.css';

import { Link } from 'react-router-dom';

import Presentation from '../components/Presentation.jsx';
import ImgCatalog from '../components/Catalog/ImgCatalog.jsx';
import Benefits from '../components/Benefits.jsx';
import UsersReviews from '../components/UsersReviews.jsx';


/* Home Page */
export default function Home() {

    const handleCardGenerator = (e) => {
        return (
            <Link to='/card' cardCase={e} />
        );
    }

    return (
        <div id="home" className='page'>
            <Presentation />
            <div id="home-card-choice" className="component">
                <div style={{ display: 'flex', flexDirection:'column', flexWrap:'nowrap'  }}>
                    <h4>You can decide how to create a card</h4>
                    <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        {/* Redirect to Card Roulete Component */}
                        <Link to='/roulette'><div>CardRoulette</div></Link>
                        {/* Redirect to Card Roulete Component */}
                        <Link to='/editor'><div>CardEditor</div></Link>
                    </div>
                </div>
                <ImgCatalog />
            </div>
            <Benefits />
            <UsersReviews />

        </div>
    )
}
