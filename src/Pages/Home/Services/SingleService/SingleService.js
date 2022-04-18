import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Service.css'

const SingleService = ({ service }) => {
    const navigate = useNavigate()

    const { name, photo, description, price } = service
    const handleServiceBooking = (name) => {
        navigate(`${name}`)
    }
    return (
        <div className="card col-md-5 col-sm-12 my-4" >
            <img src={photo} className="card-img-top rounded m-2" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text fs-5">{description}</p>
                <h5>Cost: $ {price}</h5>
                <button onClick={() => handleServiceBooking(name)} className='btn btn-primary'>{name}</button>
            </div>
        </div>
    );
};

export default SingleService;