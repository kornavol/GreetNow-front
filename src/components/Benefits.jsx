import React from 'react';
import data from '../data.json';
import { Link } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image01 from '../assets/test_pictures/micheile-henderson-ntGM_0dHu2c-unsplash.jpg';
import './css/Benefits.css';


const Benefits = () => {
    return (
        
        <div id="benefits" className="benefits-container" data-aos="fade-up" data-aos-duration="1000">
            <Link className="benefits-scroll-up" to="img-catalog" smooth={true} duration={1000} offset={-50}>
                <ExpandLessIcon style={{fontSize:'5vmin'}}/>
            </Link>
            {data.Benefits.map((header, i) => (
                <div key={i}>
                    <h1>{header.title}</h1>
                    <p>{header.subtitle}</p>
                </div>
            ))}
            
            <div className="block-container">
            <div className="block">
                <div className="benefits-img"><img src={image01} alt="envelope"/></div>
            </div>
                <div className="block">
                    <div className="text-container">
                        <ul>
                            {data.Benefits.map((text, i) => (
                                <div key={i}>
                                    {text.body.map((textField, i) => (
                                    <li key={i}>
                                        <h3>{textField.title}</h3>
                                        <p>{textField.bodyText}</p>
                                    </li>
                                ))}
                            </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Link className="benefits-scroll-down" to="reviews" smooth={true} duration={1000} offset={-150}>
                <ExpandMoreIcon style={{fontSize:'5vmin'}}/>
            </Link>
        </div> 
    );
}

export default Benefits;