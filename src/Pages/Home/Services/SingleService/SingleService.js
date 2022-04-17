import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const navigate = useNavigate()

    const { name, photo, description, price } = service
    const handleServiceBooking = (name) => {
        navigate(`${name}`)
    }
    return (
        <div className="card col-md-6 mx-auto col-sm-12 p-2" >
            <div>
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5>{price}</h5>
                    <button onClick={() => handleServiceBooking(name)} className='btn btn-primary'>{name}</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;