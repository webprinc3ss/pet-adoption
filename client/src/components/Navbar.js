import React from 'react';
import { Container, Image, Menu, } from 'semantic-ui-react';
import logo from '../assets/images/pet_logo_final.png';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Navbar = () => {

    // Turn on Logout when Auth is activated
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };


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

                    {/* Use this menu below for Auth */}
                    {Auth.loggedIn() ? (
                        <>
                            <Menu.Item as="a" name="Saved Pets" as={Link} to="/saved">
                                Saved Pets
        </Menu.Item>

                            <Menu.Item as="a" name="Submit Pet" as={Link} to="/submit_pet">
                                Submit Pet
        </Menu.Item>

                            <Menu.Item as="a" name="logout" as={Link} to="/">
                                Logout
        </Menu.Item>

                        </>
                    ) : (
                        <>
                            <Menu.Item as="a" name="login" as={Link} to="/login">
                                Login
        </Menu.Item>
                        </>
                    )}
                    {/* End of menu to be used for Auth */}


                    {/* Comment out rest of menu items below if using Auth */}
                    {/* <Menu.Item as="a" name="Saved Pets" as={Link} to="/saved">
                        Saved Pets
        </Menu.Item>

                    <Menu.Item as="a" name="Submit Pet" as={Link} to="/submit_pet">
                        Submit Pet
        </Menu.Item>

                    <Menu.Item as="a" name="login" as={Link} to="/login">
                        Login
        </Menu.Item> */}

                </Menu.Menu>

            </Menu>
        </>

    );
};

export default Navbar;