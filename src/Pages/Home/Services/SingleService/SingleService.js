import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, photo, description, price } = service
    return (
        <div class="card col-md-6 col-sm-12 p-2" >
            <div>
                <img src={photo} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h5>{price}</h5>
                    <Link className='btn btn-primary' to='/'>Go Somewher</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;