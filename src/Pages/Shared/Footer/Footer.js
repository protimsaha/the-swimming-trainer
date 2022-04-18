import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className=' footer'>
            <p className='text-center text-white'>Alright reserved by John Smith © {year}</p>
            <h5 className='text-center text-white'>Get My App on</h5>
            <div className='brand text-center d-block'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcaUNTZe3Fdk0hNkGPJ2-eSuDcpJ6ws1vO3lLMuutOJe_GvM8RCcHTKF3iHmurrZkPcY&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQCC4y8gDbzZxfGPA_bK0bYKHSrMR2ouLpg&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Footer;