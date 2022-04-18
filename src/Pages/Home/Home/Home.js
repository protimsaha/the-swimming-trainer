import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServiceForHome from '../Services/ServiceBooking/ServiceForHome/ServiceForHome';
import UseServices from '../Services/UseServices';
import Trainer from '../Trainer/Trainer';
import './Home.css'
import Review from './Review/Review';

const Home = () => {
    const [services] = UseServices()
    const twoServices = services.slice(0, 2)
    return (
        <div>
            <Banner></Banner>
            <div className='m-5'>
                <Trainer></Trainer>
            </div>
            <h2 className='text-center my-4'>My Services</h2>
            <div className='container row  d-flex justify-content-between'>
                {
                    twoServices.map(service => <ServiceForHome key={service.id} service={service}></ServiceForHome>)
                }
            </div>
            <Link className='service-text w-25 btn btn-primary d-block mx-auto my-5' to='services'>See All Services</Link>
            <h3 className='my-4 text-center'>Look What my Customer Says</h3>
            <div className='my-5 container row'>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;