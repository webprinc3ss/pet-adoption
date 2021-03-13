import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
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



const Signup = () => {


    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [addUser, { error }] = useMutation(ADD_USER);

    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            // Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
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
                        Sign Up
  </Header>
                    <Segment>
                        <Form size="large"
                            // noValidate validated={validated} 
                            onSubmit={handleFormSubmit}>
                            {/* show alert if server response is bad */}

                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                                error={{
                                    content: 'Please enter a valid email address',
                                    pointing: 'below',
                                }}
                                header='Action Forbidden'
                                content='You can only sign up for an account once with a given e-mail address.'
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Username"
                                type="username"
                                error='Please enter a username'
                            />

                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                error='Please enter a password'
                            />

                            <Button color="blue" fluid size="large">
                                Sign Up
      </Button>
                        </Form>
                    </Segment>
                    <Message
                        success
                        header='Form Completed'
                        content="You're all signed up for the newsletter">
                        Already have an account?  <Link to="/login">Log in</Link>
                    </Message>
                </Grid.Column>
            </Grid></Container>
    );
};

export default Signup;