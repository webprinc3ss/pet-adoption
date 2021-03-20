import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container
} from 'semantic-ui-react';
import { validateEmail } from '../utils/helpers';

const Signup = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    const [validationErrors, setValidationErrors] = useState({})

    console.log("Error message", error)
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form (notice the async!)
    const handleFormSubmit = async event => {
        event.preventDefault();
        if (!validateEmail(formState.email)) {
            setValidationErrors({ email: true })
        } else {
            setValidationErrors({})
        }
        // use try/catch instead of promises to handle errors
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
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
                            onSubmit={handleFormSubmit}

                        >
                            {/* show alert if server response is bad */}

                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                name="email"
                                // type='email'
                                placeholder="Email address"
                                value={formState.email}
                                onChange={handleChange}
                                error={
                                    error?.message.includes('email') &&
                                    {
                                        content: 'Please enter a valid email address',
                                        pointing: 'below',
                                    }}

                            // header='Action Forbidden'
                            // content='You can only sign up for an account once with a given e-mail address.'
                            />
                            <Form.Input
                                name="username"
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Username"
                                type="username"
                                value={formState.username}
                                onChange={handleChange}
                                error={
                                    error?.message.includes('username') &&
                                    {
                                        content: 'Please enter a username of minimum 6 characters.',
                                        pointing: 'below',
                                    }
                                }
                            />

                            <Form.Input
                                name="password"
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                                error={
                                    error?.message.includes('password') &&
                                    {
                                        content: 'Your password must be at least 6 characters long.',
                                        pointing: 'below',
                                    }}


                            />

                            <Button color="blue" fluid size="large">
                                Sign Up
      </Button>
                        </Form>
                    </Segment>
                    {
                        error ? <Message style={{ textAlign: "center", backgroundColor: "#fbb540", fontSize: "15px" }}>
                            You must fill out this form completely.
                        </Message> : null
                    }
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