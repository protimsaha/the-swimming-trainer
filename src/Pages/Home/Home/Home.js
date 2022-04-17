import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleService from '../Services/SingleService/SingleService';
import UseServices from '../Services/UseServices';
import './Home.css'
import Review from './Review/Review';

const Home = () => {
    const [services] = UseServices()
    const twoServices = services.slice(0, 2)
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center my-4'>My Services</h2>
            <div className='container row my-4'>
                {
                    twoServices.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
            <Link className='service-text w-25 btn btn-primary d-block mx-auto my-4' to='services'>See All Services</Link>
            <h3 className='my-4 text-center'>Look What my Customer Says</h3>
            <Review></Review>
        </div>
    );
};

export default Home;