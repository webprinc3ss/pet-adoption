import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from '../assets/images/pet_logo_final.png';
import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const Navbar = () => {

    return (
        <>

            <div class="ui six item menu">
                <a class="item"> <Image

                    src={logo}

                    centered
                    style={{ height: "60px" }}
                /></a>
                <a class="item">Find Pets</a>
                <a class="item">Mission</a>
                <a class="item">Saved Pets</a>
                <a class="item">Submit Pet</a>
                <a class="item">Login</a>
            </div>





            {/* <nav>
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
                        <Link to="/submit_pet">Submit Pet</Link>
                    </li>
                    <li>
                        <Link to="/login">Login/SignUp</Link>

                    </li>
                </ul>
            </nav> */}
        </>

    );
};

export default Navbar;