import React from 'react';
import data from '../data.json';
import image01 from '../assets/test_pictures/micheile-henderson-ntGM_0dHu2c-unsplash.jpg';
import './css/Benefits.css';


const Benefits = () => {
    return (
        
        <div id="benefits" className="benefits-container">
            {data.Benefits.map((header, i) => (
                <div key={i}>
                    <h1>{header.title}</h1>
                    <p>{header.subtitle}</p>
                </div>
            ))}
            <div className="benefits-logo">
                <h2>Greet Now</h2>
            </div>
            <div className="benefits-block-container">
            <div className="benefits-block" data-aos="fade-right" data-aos-duration="1700">
                <div className="benefits-img"><img src={image01} alt="envelope"/></div>
            </div>
                <div className="benefits-block" data-aos="fade-left" data-aos-duration="1700">
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
            <div className="benefits-flower" data-aos="fade-up" data-aos-duration="1700"></div>
        </div> 
    );
}

export default Benefits;