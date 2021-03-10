import React from 'react';
import logo from '../assets/images/mustfit_logo.png';
// import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img src={logo} style={{ height: "50px", width: "50px", float: "left" }} alt="MustFit Pets" />
                        <h1>MustFit Pets</h1>
                    </li>
                    <li>Find Pets
         </li>
                    <li>Our Mission
         </li>
                    <li>Saved Pets
         </li>
                    <li>Login/SignUp
         </li>
                </ul>
            </nav>
        </>

    );
};

export default Navbar;