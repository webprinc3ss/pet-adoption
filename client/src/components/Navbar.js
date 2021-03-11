import React from 'react';
import { Container, Image, Menu, Header } from 'semantic-ui-react';
import logo from '../assets/images/mustfit_logo.png';
import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

const Navbar = () => {

    return (
        <>
            <Menu>
                <Container>
                    <Menu.Item as="a" header as={Link} to="/">
                        <Image
                            size="tiny"
                            src={logo}
                            centered
                        />
                        <Header as='h1'>MustFit Pets</Header>
                    </Menu.Item>


                    <Menu.Menu position="right">
                        <Menu.Item as="a" name="login">
                            Login
        </Menu.Item>

                        <Menu.Item as="a" name="register">
                            Register
        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
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