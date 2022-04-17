import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../images/swimming logo.jpg'
import auth from '../../Auth/FirebaseInit/Firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid nav-bg  ">
                <Nav.Link className='navbar-brand logo' as={Link} to='/'><img src={logo} alt="" /></Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className='links'>
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/about'>About Me</Link>
                        <p className='text-white'>{user?.displayName}</p>
                        {user?.photoURL ? <img className='user-img' src={user?.photoURL} alt="" /> : ''}
                        {
                            user?.uid ? <button className='logout' onClick={logout}>Logout</button> :
                                <Link to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;