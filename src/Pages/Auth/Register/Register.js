import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../FirebaseInit/Firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault()
        const displayName = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        navigate('/')

        await updateProfile({ displayName });
        alert('Updated profile');

    }

    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto border p-5 rounded my-5'>
            <h2 className='text-center'>Please Register!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <p>Already have an account? <span onClick={handleLogin}
                className='text-success' role={'button'}>Login</span></p>
            <p>{error?.message}</p>
            <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                Rregister
            </Button>
        </Form>
    );
};

export default Register;