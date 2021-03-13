import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container
} from 'semantic-ui-react';

const Login = () => {


    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        try {

            const { data } = await login({ variables: { ...userFormData } });

            if (error) {
                throw new Error('something went wrong!');
            }


            // console.log(user);
            // Auth.login(data.login.token);

        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }


        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };


    return (
        <Container className="topPadding">
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
      </Header>
                    <Segment>
                        <Form size="large">
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large">
                                Login
          </Button>
                        </Form>
                    </Segment>
                    <Message>
                        Not registered yet?  <Link to="/signup">Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid></Container>
    );
};

export default Login;