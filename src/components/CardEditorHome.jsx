import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/CardEditorHome.css';

const CardEditor = () => {
    return (
        <section id="card-editor-home" className="section-container card-editor-container" data-aos="fade-up" data-aos-duration="1000">
            <Link to="roulette-home" smooth={true} duration={1000} offset={-250}><ExpandLessIcon style={{fontSize:'10vmin'}}/></Link>
            <div className="sub-container">
                <h1>Card Editor</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
            </div>
            <Link to="img-catalog" smooth={true} duration={1000} offset={-95}><ExpandMoreIcon style={{fontSize:'10vmin'}}/></Link>
        </section>
    );
}

export default CardEditor;