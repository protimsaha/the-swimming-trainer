import React from 'react';
import me from '../../images/for-phero.jpeg'

const About = () => {
    return (
        <div className='container row my-5'>
            <div className="col-md-6 col-sm-12">
                <img className='img-fluid rounded' src={me} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
                <h2> Puspok Protim Saha</h2>
                <p className='fs-5'>I have completed my course content sincerly till now. I want to catch SCIC . Then I will complete myself for interview with my mentors. I want to get a React developer job in my country or remote within next two month. Atlast I want to thank Programming Hero team & specially to Jhankar Mahbub vai for creating such a dedicated , effective and well formed platform for us.</p>
            </div>
        </div>
    );
};

export default About;