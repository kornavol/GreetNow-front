import React from 'react';
/* 
import { Card } from '@material-ui/core';
import image01 from '../assets/test_pictures/markus-winkler--fRAIQHKcc0-unsplash.jpg';
import data from '../data.json';
 */
import './css/UserReviews.css';


const UserReviews = () => {
    
    return (
        <div>
            <h1>Reviews</h1>
        </div>
/* 
        <div className="section-container reviews-container" data-aos="fade-up" data-aos-duration="1000">
            {data.Reviews.map((header) => (
                <div>
                    <h1>{header.title}</h1>
                    <p>{header.subtitle}</p>
                </div>
            ))}
            <div className="reviews-card-container">
                {data.Reviews.map((text, i) => (
                    <div key={i}>
                        {text.body.map((textField, i) => (
                            <Card key={i}>
                                <img src={image01} alt="review"/>
                                <h4>{textField.title}</h4>
                                <p>{textField.bodyText}</p>
                            </Card>
                        ))}
                    </div>
                ))}
                </div>
            </div>
             */
    );
}

export default UserReviews;