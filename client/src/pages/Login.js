import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
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

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Container className="topPadding">
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
                    </Header>
                    <Segment>
                        <Form size="large" onSubmit={handleFormSubmit}>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />

                            <Button color="blue" fluid size="large">
                                Login
                        </Button>
                        </Form>
                    </Segment>

                    {
                        error ? <Message>
                            The provided credentials are incorrect
            </Message> : null
                    }


                    <Message>
                        Not registered yet?  <Link to="/signup">Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid></Container>
    );
};

export default Login;