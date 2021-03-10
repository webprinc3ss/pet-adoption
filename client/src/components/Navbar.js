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
                    <li> <Link to="/">
                        <img src={logo} style={{ height: "50px", width: "50px", float: "left" }} alt="MustFit Pets" />
                    </Link>
                        <Link to="/"><h1>MustFit Pets</h1></Link>
                    </li>
                    <li>
                        <Link to="/">Find Pets</Link>
                    </li>
                    <li>
                        <Link to="/mission">Our Mission</Link>

                    </li>
                    <li>
                        <Link to="/saved">Saved Pets</Link>
                    </li>
                    <li>
                        <Link to="/login">Login/SignUp</Link>

                    </li>
                </ul>
            </nav>
        </>

    );
};

export default Navbar;