import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('PublicReview.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='review-cont '>
            {
                reviews.map(review =>
                    <div key={review.id} className="card review p-2">
                        <img src={review.photo} className="card-img-top img-fluid rev-img" alt="..." />
                        <h4>{review.name}</h4>
                        <div className="card-body">
                            <p className="card-text">{review.review}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Review;