import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleService from '../Services/SingleService/SingleService';
import UseServices from '../Services/UseServices';
import './Home.css'

const Home = () => {
    const [services] = UseServices()
    const twoServices = services.slice(0, 2)
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center'>My Services</h2>
            <div className='container row'>
                {
                    twoServices.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
            <Link className='service-text w-25 btn btn-primary d-block mx-auto my-2' to='services'>See All Services</Link>
        </div>
    );
};

export default Home;