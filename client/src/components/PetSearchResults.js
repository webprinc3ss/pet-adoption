import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
import defaultImage from '../assets/images/card_default.png';
import { Container, Grid, Segment, Card, Icon, Image, Pagination } from 'semantic-ui-react';

const PetSearchResults = ({ filter }) => {

    const { loading, error, data } = useQuery(GET_PETS, { variables: { filter } })

    if (loading)
        return <>loading</>



    return (
        <Container>
            <Grid centered columns={1}>
                <Grid.Column>
                    <Segment>
                        {/* <h2>
                            {data.length
                                ? `Viewing ${data.length} results:`
                                : 'Search for a Pet to begin'}
                        </h2> */}

                        <Card>
                            <Image src={defaultImage} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Whiskers</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Posted 3/12/21, 5, male</span>
                                </Card.Meta>
                                <Card.Description>
                                    Meet Whiskers, a sad kitty no one adopts, who has been waiting for a loving furever home at an animal shelter for more than 2 and a half years now. The kitty was found as a stray in Flint, Michigan, and has been spending his lonely days at the Detroit Animal Welfare Group (DAWG) ever since.  He suffers from psoraisis and needs constant care. He is skittish and prefers to be the only pet.<br /><br />

                                    <i>kids, dogs, cats ok<br />
                                   medical condition</i>

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='paw' />
        Save
      </a>
                            </Card.Content>
                        </Card>

                        {/* Use for card data: */}
                        {/* <Card.Group>
                            {data.map((pet) => {
                                return (
                                    <Card key={pet._id} >
                                        {pet.image ? (
                                            <Image src={pet.image} alt={`Image of ${pet.name}`} wrapped ui={false} />

                                        ) : <Image src={defaultImage} wrapped ui={false} />}
                                        <Card.Content>
                                            <Card.Header>{pet.name}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{pet.enterDate} `{' , ' + pet.age}` `{' , ' + pet.sex}`</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {pet.about}
                                                <br /><br />

                                                <i>{pet.behavior}<br />
                                                    {pet.medical}</i>

                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='paw' /> Save</a>
                                        </Card.Content>
                                    </Card>
                                )
                            })}
                        </Card.Group> */}
                        {/* End of card data: */}

                        {/* USE FOR SAVED BOOKS */}
                        {/* {Auth.loggedIn() && (
                    <Button icon
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === pet. _id)}
                      onClick={() => handleSavePet(pet. _id)}><Icon name='paw' />
                      {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                        ? 'This pet has already been saved!'
                        : 'Save this Pet!'}
                    </Button> */}







                        {JSON.stringify(data)}


                        <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={5}
                            centered
                        />


                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>

    )
}

export default PetSearchResults;