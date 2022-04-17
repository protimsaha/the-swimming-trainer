import React from 'react';

const Booking = () => {

    const handleBooking = () => {
        alert('Booking Confirm')
    }
    return (
        <div className='booking text-center'>
            <button onClick={handleBooking} className='booking-btn'>Confirm Booking</button>
        </div>
    );
};

export default Booking;