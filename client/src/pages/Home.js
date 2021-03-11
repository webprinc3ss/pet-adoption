import React from 'react';
import { Container, Form, Header, Button, Segment, Grid } from 'semantic-ui-react'
//See SearchBook.js from Book Project


const Home = () => {

    return (
        <section>
            <Container className="topPadding">
                <Header as='h1' textAlign="center">Search for Pets</Header>
                <Segment>
                    <Form>
                        <Form.Group widths='equal'>

                            <Form.Field label='Type' control='select'>
                                <option value='cat'>Cat</option>
                                <option value='dog'>Dog</option>
                            </Form.Field>

                            <Form.Field label='Sex' control='select'>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </Form.Field>
                            <Form.Field label='Age' control='select'>
                                <option value='young'>Young</option>
                                <option value='adult'>Adult</option>
                                <option value='senior'>Senior</option>
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='2'>
                            <Form.Group grouped>
                                <label>Behavior</label><br />
                                <Form.Field label='No kids' control='input' type='checkbox' />
                                <Form.Field label='Only pet' control='input' type='checkbox' />
                                <Form.Field label='No Cats' control='input' type='checkbox' />
                                <Form.Field label='No dogs' control='input' type='checkbox' />
                            </Form.Group>
                            <Form.Group grouped>
                                <label>Medical Condition?</label>
                                <Form.Field label='yes' control='input' type='checkbox' />
                            </Form.Group>
                        </Form.Group>
                        <Grid>
                            <Grid.Column textAlign="center">
                                <Button type='submit' fluid color='blue'>Submit</Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                </Segment>
            </Container>
            <br></br>
            <div>Pet Cards go here.</div>
        </section>
    )
}

export default Home;