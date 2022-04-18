import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/sweeming banner 1.webp'
import banner2 from '../../../images/banner2.webp'
import banner3 from '../../../images/banner3.webp'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel className='banner'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Swimming advantages</h3>
                    <p>Swimming reduces fat problems, joint pain and give strangth</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Swimming for saving Life</h3>
                    <p>We should teach our children how to swim to save their lives from sink in water</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Swimming for competition</h3>
                    <p>There are many competition all over the world on swimming . This is a opertunity to aquire name, fame also prize</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;