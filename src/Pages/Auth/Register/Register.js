import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Form className='w-50 mx-auto border p-5 rounded my-5'>
            <h2 className='text-center'>Please Register!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <p>Already have an account? <span onClick={handleLogin} className='text-success' role={'button'}>Login</span></p>
            <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Register;