import React from 'react';
import { Link } from 'react-router-dom';
import '../../Service.css'
const ServiceForHome = ({ service }) => {

    const { name, photo, description, price } = service

    return (
        <div className="card mx-2 col-md-6 col-sm-12 my-4" >
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text fs-5">{description}</p>
                <h5>Cost: $ {price}</h5>
                <Link to='/services' className='btn btn-primary'>{name}</Link>
            </div>
        </div>
    );
};

export default ServiceForHome;