import React from 'react';
import data from '../data.json';
import image01 from '../assets/test_pictures/micheile-henderson-ntGM_0dHu2c-unsplash.jpg'
import './css/Benefits.css';


const Benefits = () => {
    return (
        <div className="section-container benefits-container" data-aos="fade-up" data-aos-duration="1000">
            {data.Benefits.map((header) => (
                <div>
                    <h1 id="benefits">{header.title}</h1>
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
                                    <li>
                                        <h3 key={i}>{textField.title}</h3>
                                        <p key={i}>{textField.bodyText}</p>
                                    </li>
                                ))}
                            </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;