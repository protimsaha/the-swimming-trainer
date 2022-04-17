import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='row not-found container-fluid'>
            <div className="not-found-text col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column">
                <h2 className='text-warning'>Your Saearched Result Not Found!</h2>
                <h2 className='text-danger'>404</h2>
            </div>
            <div className="not-found-photo  col-md-6 col-sm-12">
                <img className='img-fluid' src="https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;