import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
// import { useMutation } from '@apollo/react-hooks';
// import { SAVE_PET } from '../utils/mutations';
import defaultImage from '../assets/images/card_default.png';
import { Container, Grid, Segment, Card, Icon, Image, Pagination } from 'semantic-ui-react';

const PetSearchResults = ({ filter }) => {

    const { loading, error, data } = useQuery(GET_PETS, { variables: { filter } })
    // const [savePet, { error }] = useMutation(SAVE_PET);

    // create state to hold saved bookId values
    // const [savePetIds, setSavedPetIds] = useState(getSavedPetIds());

    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // useEffect(() => {
    //     return () => saveBookIds(savedBookIds);
    // });

    if (loading)
        return <>loading</>

    const { pets } = data;
    console.log(pets)

    // const petData = items.map((pet) => ({
    //     bookId: book.id,
    //     authors: book.volumeInfo.authors || ['No author to display'],
    //     title: book.volumeInfo.title,
    //     description: book.volumeInfo.description,
    //     image: book.volumeInfo.imageLinks?.thumbnail || '',
    //   }));

    // setSearchedPets(data);


    // const handleSavePet = async (petId) => {
    // find the book in `searchedBooks` state by the matching id
    // const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //     return false;
    // }

    // try {
    // const response = await saveBook(bookToSave, token);

    // await saveBook({
    //     variables: { bookData: bookToSave }
    // });

    // if (error) {
    //     throw new Error('something went wrong!');
    // }

    // if book successfully saves to user's account, save book id to state
    //         setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

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
                                    {pet.photo ? (
                                        <Image src={pet.photo} alt={`Image of ${pet.name}`} wrapped ui={false} />

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



                                                {pet.behavior.length

                                                    ? `No `
                                                    : ''} {
                                                    pet.behavior.length ? pet.behavior.map((behavior) =>
                                                        (<span> {behavior} </span>)) : '-'
                                                }

                                                <br />
                                                {pet.medical ? (`Medical Condition`) : ""}


                                            </i>

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