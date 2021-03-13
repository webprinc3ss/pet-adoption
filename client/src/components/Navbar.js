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

            <Menu borderless
                style={{
                    flexShrink: 0, //don't allow flexbox to shrink it
                    borderRadius: 0, //clear semantic-ui style
                    margin: 0,


                }}
            //clear semantic-ui style
            >

                <Menu.Item as="a" header as={Link} to="/">
                    <Image

                        src={logo}
                        centered
                        style={{ height: "60px" }}
                    />
                    {/* <Header as='h2'>MustFit Pets</Header> */}
                </Menu.Item>



                <Menu.Menu position="right">
                    <Menu.Item as="a" name="Find Pets" as={Link} to="/">
                        Find Pets
        </Menu.Item>

                    <Menu.Item as="a" name="Mission" as={Link} to="/mission">
                        Mission
        </Menu.Item>

                    <Menu.Item as="a" name="Saved Pets" as={Link} to="/saved">
                        Saved Pets
        </Menu.Item>

                    <Menu.Item as="a" name="Submit Pet" as={Link} to="/submit_pet">
                        Submit Pet
        </Menu.Item>

                    <Menu.Item as="a" name="login" as={Link} to="/login">
                        Login
        </Menu.Item>

                </Menu.Menu>

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