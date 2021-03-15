import React, { useState } from 'react';
import PetSearchResults from "../components/PetSearchResults";
import { Container, Form, Header, Button, Segment, Grid } from 'semantic-ui-react'

const Home = () => {

    const [filter, setFilter] = useState({type:'', sex:'', ageClass:''});

    // create method to search for pets and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const newFilter = Object.fromEntries(new FormData(event.target).entries())
        
        console.log("filter: ", newFilter);
        newFilter.behavior = [];
        // check if medical has an "on" value (has been checked) - if so assign to true
        if (newFilter.medical) {
            newFilter.medical = true;
        }

        if (newFilter.kids) {
            delete newFilter.kids
            newFilter.behavior.push("kids");
        }

        if (newFilter.cats) {
            delete newFilter.cats
            newFilter.behavior.push("cats");
        }

        if (newFilter.dogs) {
            delete newFilter.dogs
            newFilter.behavior.push("dogs"); 
        }

        
        if (!newFilter.behavior.length) {
            delete newFilter.behavior
        }
        console.log("newFilter", newFilter);
        // set filter to form values
        setFilter(newFilter)

    }

    return (
        <section>
            <Container className="topPadding">
                <Header as='h1' textAlign="center">Search for Pets</Header>
                <Segment>
                    <Form onSubmit={handleFormSubmit}>
                        
                        <Form.Group widths='equal'>
                            <Form.Field label='Type' control='select'
                                name="type"
                            >
                                <option value='cat'>Cat</option>
                                <option value='dog'>Dog</option>
                            </Form.Field>

                            <Form.Field label='Sex' control='select'
                                name="sex"
                            >
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </Form.Field>
                            
                            <Form.Field label='Age' control='select' name="ageClass"    >
                                <option value='young'>Young</option>
                                <option value='adult'>Adult</option>
                                <option value='senior'>Senior</option>
                            </Form.Field>

                        </Form.Group>
                        
                        <Form.Group widths='2'>
                            <Form.Group grouped name="behavior">
                                <label>Behavior</label>
                                <Form.Field label='No kids' control='input' type='checkbox'
                                    name="kids"
                                />
                                <Form.Field label='No Cats' control='input' type='checkbox'
                                    name="cats"
                                />
                                <Form.Field label='No dogs' control='input' type='checkbox'
                                    name="dogs"
                                />
                            </Form.Group>
                            
                            <Form.Group grouped>
                                <label>Medical Condition?</label>
                                <Form.Field label='Yes' control='input' type='checkbox' name="medical" value={true} />
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
            {filter && <PetSearchResults filter={filter} />}
        </section>
    )
}

export default Home;