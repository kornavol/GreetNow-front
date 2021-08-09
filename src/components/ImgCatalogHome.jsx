import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/ImgCatalogHome.css';

const MediaCatalog = () => {
    return (
        <section id="img-catalog" className="section-container catalog" data-aos="fade-up" data-aos-duration="1000">
            <Link to="card-editor-home" smooth={true} duration={1000} offset={-250}><ExpandLessIcon style={{fontSize:'10vmin'}}/></Link>
            <div className="sub-container">
                <h1>Media Catalog</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                
            </div>
            <Link to="benefits" smooth={true} duration={1000} offset={-95}><ExpandMoreIcon style={{fontSize:'10vmin'}}/></Link>
        </section>
    );
}

export default MediaCatalog;