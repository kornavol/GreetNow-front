import React from 'react';
import { Card } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import data from '../data.json';
import './css/UserReviews.css';


const UserReviews = () => {
    
    return (

        <div id="reviews" className="reviews-container">
            {data.Reviews.map((header, i) => (
                <div key={i}>
                    <h1>{header.title}</h1>
                    <p>{header.subtitle}</p>
                </div>
            ))}
            <div className="reviews-logo">
                <h2>Greet Now</h2>
            </div>
            <div className="flower-frame1" data-aos="fade-right" data-aos-duration="1700"></div>
            <div className="flower-frame2" data-aos="fade-left" data-aos-duration="1700"></div>
                {data.Reviews.map((text, i) => (
                    <div key={i} className="reviews-card-container">
                        {text.body.map((textField, i) => (
                            <Card key={i} data-aos="fade-up" data-aos-duration="1700">
                                {/* <img src={image01} alt="review"/> */}
                                <h4>{textField.title}</h4>
                                <Rating name="read-only" value={textField.stars} readOnly size="small"/>
                                <p>{textField.bodyText}</p>
                            </Card>
                        ))}
                    </div>
                ))}
                </div>
    );
}

export default UserReviews;