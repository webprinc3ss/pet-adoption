import React from 'react';
import logo from '../assets/images/mustfit_logo.png';
import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul>
                    <li as={Link} to='/'>
                        <img src={logo} style={{ height: "50px", width: "50px", float: "left" }} alt="MustFit Pets" />
                        <h1>MustFit Pets</h1>
                    </li>
                    <li as={Link} to='/'>Find Pets
         </li>
                    <li>Our Mission
         </li>
                    <li as={Link} to='/saved'>Saved Pets
         </li>
                    <li as={Link} to='/login'>Login/SignUp
         </li>
                </ul>
            </nav>
        </>

    );
};

export default Navbar;