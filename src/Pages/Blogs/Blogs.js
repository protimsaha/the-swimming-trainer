import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>MY NEW BLOGS</h1>
            <div className='my-5'>
                <h3>What is the difference between authentication and authorization?</h3>
                <p className='fs-5'>Authentication works through passwords, OTP, etc. information of the user to for providing the access to the system but   in authorization process, user's authorities are checked for checked accessing the resources. In authentication process the user is verified through difference process but in the authorization process the user is validated. Authentication determines whether the user verified or not whereas authorization determines on what permission user have. Authentication can be changeable to   the user but in the process of authorization it can't be changeable to the user.  </p>
            </div>
            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fs-5'>I am using firebase to implement user authentication in my project. I can create user by email password system and also with social log in systems . Such as - login with google, login in with Facebook, login with GitHub, logging in with  Microsoft, etc.
                    I can use many alternative systems instead of firebase authentication .such as - 1.Back4App , 2.Parse , 3.AWS amplify , 4.Backlendless , 5. Kuzzle , 6. Supabase etc. systems.
                </p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p className='fs-5'>We use firebase in our react app to create authentication functionality in an app. But we can do more than authentication by using firebase. Firebase provided us with many services. The most useful and popular uses of firebase are-
                    1.	Cloud Firestore
                    2.	Cloud Functions
                    3.	Realtime Database
                    4.	Hosting
                    5.	Cloud Storage
                    6.	Google Analytics
                    7.	Predictions
                    8.	Cloud messaging
                    9.	Dynamic Links
                    10.	Remote Config
                </p>
            </div>
        </div>
    );
};

export default Blogs;