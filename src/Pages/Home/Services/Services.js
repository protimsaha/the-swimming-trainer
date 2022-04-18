import React from 'react';
import SingleService from './SingleService/SingleService';
import UseServices from './UseServices';

const Services = () => {
    const [services] = UseServices()

    return (
        <div className='container'>
            <h2>Available Services :{services.length} </h2>
            <div className=' row  d-flex justify-content-between'>
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;