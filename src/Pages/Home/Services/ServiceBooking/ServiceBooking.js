import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceBooking.css'

const ServiceBooking = () => {
    const { serviceId } = useParams()
    console.log(serviceId)

    return (
        <div className='container service-book '>
            <h1 className='text-center'>Want to book this pack: <span className='text-warning'>{serviceId}</span></h1>

            <div className='booking text-center'>
                <Link to='/booking'>
                    <button className='booking-btn'>Book The Package</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceBooking;