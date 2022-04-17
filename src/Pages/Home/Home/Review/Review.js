import React, { useEffect, useState } from 'react';

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('PublicReview.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container row d-flex '>
            {
                reviews.map(review =>
                    <div key={review.id} className="card col-md-4 col-sm-12 justify-content-between">
                        <img src={review.photo} className="card-img-top img-fluid" alt="..." />
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