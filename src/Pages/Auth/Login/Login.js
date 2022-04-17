import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../FirebaseInit/Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {

    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/register')
    }

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    console.log(user?.user, error)

    const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);

    if (user || githubUser) {
        navigate('/')
    }

    let errorElement;
    if (error || githubError) {
        errorElement = error.message;
    }
    return (
        <Form className='w-50 mx-auto border p-5 rounded my-5'>
            <h2 className='text-center'>Please Login!</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <p className='text-danger'>{errorElement}</p>
            <p>New to my website? <span onClick={handleRegister} className='text-success' role={'button'}> Register</span></p>
            <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                Login
            </Button>
            <div className='or my-3'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-4 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='text-center my-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50'>
                    <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <span className='px-3'>Google Sign in</span></button>
            </div>
            <div className='text-center my-4'>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50'>
                    <img className='google' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    <span className='px-3'>Github Sign in</span></button>
            </div>
        </Form>
    );
};

export default Login;