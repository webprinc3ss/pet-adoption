import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container,
} from 'semantic-ui-react';

const Signup = () => {
    return (
        <Container className="topPadding">
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Sign Up
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
                                placeholder="Username"
                                type="username"
                            />

                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large">
                                Sign Up
      </Button>
                        </Form>
                    </Segment>
                    <Message>
                        Already have an account?  <Link to="/login">Log in</Link>
                    </Message>
                </Grid.Column>
            </Grid></Container>
    );
};

export default Signup;