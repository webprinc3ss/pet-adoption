import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
import defaultImage from '../assets/images/card_default.png';
import { Container, Grid, Segment, Card, Icon, Image, Pagination } from 'semantic-ui-react';

const PetSearchResults = ({ filter }) => {

    const { loading, error, data } = useQuery(GET_PETS, { variables: { filter } })



    if (loading)
        return <>loading</>

    const { pets } = data;
    console.log(pets)

    return (
        <Container>
            <Grid centered columns={1}>
                <Grid.Column>
                    <Segment>
                        <h1>
                            {pets.length

                                ? `Viewing ${pets.length} results:`
                                : 'No results'}
                        </h1>

                        <Card.Group>
                            {pets.map((pet) => (
                                <Card key={pet._id} >
                                    {pet.image ? (
                                        <Image src={pet.image} alt={`Image of ${pet.name}`} wrapped ui={false} />

                                    ) : <Image src={defaultImage} wrapped ui={false} />}
                                    <Card.Content>
                                        <Card.Header>{pet.name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{new Date(pet.enterDate).toLocaleDateString()} , {pet.age} , {pet.sex} </span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {pet.about}
                                            <br /><br />

                                            <i>

                                                {/* {pet.behavior} <br /> */}



                                                {pet.behavior.length

                                                    ? `No `
                                                    : ''} {
                                                    pet.behavior.length ? pet.behavior.map((behavior) =>
                                                        (<span> {behavior} </span>)) : '-'
                                                }


                                                <br />

                                                {pet.medical}</i>

                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='paw' /> Save</a>
                                    </Card.Content>
                                </Card>
                            )
                            )}
                        </Card.Group>




                        {/* USE FOR SAVED BOOKS */}
                        {/* {Auth.loggedIn() && (
                    <Button icon
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === pet. _id)}
                      onClick={() => handleSavePet(pet. _id)}><Icon name='paw' />
                      {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                        ? 'This pet has already been saved!'
                        : 'Save this Pet!'}
                    </Button> */}










                        <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={5}

                        />


                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>

    )
}

export default PetSearchResults;