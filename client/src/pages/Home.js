import React, { useState } from 'react';
import PetSearchResults from "../components/PetSearchResults";
import { Container, Form, Header, Button, Segment, Grid } from 'semantic-ui-react';
import { savePetIds, getSavedPetIds } from '../utils/localStorage'; // - dont think this is needed here
import { useMutation } from '@apollo/client'; // - dont think this is needed here
import { SAVE_PET } from '../utils/mutations'; // - dont think this is needed here

const Home = () => {

    // create state for holding returned search - dont think this is needed here
    const [searchedPets, setSearchedPets] = useState([]);
    // create state for holding filter field data
    const [filter, setFilter] = useState();
    // create state for holding saved petId values - dont think this is needed here
    const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());

    // - dont think this is needed here
    const [savePet, { error }] = useMutation(SAVE_PET);

    // create method to search for pets and set state on form submit
    const handleFormSubmit = async (event) => {

        event.preventDefault();

        // set filter state to search form values
        setFilter(Object.fromEntries(new FormData(event.target).entries()));
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
                                <label>Pet Compatibility</label>
                                <Form.Field label='Kids Ok' control='input' type='checkbox'
                                    name="kids" value="Y"
                                />
                                <Form.Field label='Cats Ok' control='input' type='checkbox'
                                    name="cats" value="Y"
                                />
                                <Form.Field label='Dogs Ok' control='input' type='checkbox'
                                    name="dogs" value="Y"
                                />
                            </Form.Group>

                            <Form.Group grouped>
                                <label>Medical Condition?</label>
                                <Form.Field label='Yes' control='input' type='checkbox' name="medical" value="Y" />
                            </Form.Group>

                        </Form.Group>
                        <Grid>
                            <Grid.Column textAlign="center">
                                <Button type='submit' fluid color='blue'>Search</Button>
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