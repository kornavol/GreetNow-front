import { Link } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image04 from '../assets/test_pictures/flower4.jpg';
import './css/CardRouletteHome.css';


const CardRoulette = () => {

    return (    
        <section className="section-container" >
            <div className="sub-container card-roulette">
                <h1>Card Roulette</h1>
                <div id="roulette-home" className="roulette">
                    <div className="roulette-img"><img src={image04} alt="flower"/></div>
                </div>
            </div>
            <Link to="card-editor-home" smooth={true} duration={1200} offset={-95}><ExpandMoreIcon style={{fontSize:'10vmin'}}/></Link>
        </section>
    )
}

export default CardRoulette;