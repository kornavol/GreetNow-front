import React from 'react';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/ImgCatalogHome.css';

const MediaCatalog = () => {
    return (
        <section id="img-catalog" data-aos="fade-up" data-aos-duration="1000">
            <Link className="img-catalog-scroll-up" to="card-roulette-home-container" smooth={true} duration={1000} offset={-30}>
                <ExpandLessIcon style={{fontSize:'5vmin'}}/>
            </Link>
            <div className="catalog-sub-container">
                <h1>Media Catalog</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                
            </div>
            <Link className="img-catalog-scroll-down" to="benefits" smooth={true} duration={1000} offset={-150}>
                <ExpandMoreIcon style={{fontSize:'5vmin'}}/>
            </Link>
        </section>
    );
}

export default MediaCatalog;