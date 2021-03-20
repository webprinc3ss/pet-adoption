import React from 'react';
import { Container, Grid, Segment, Card, Icon, Image, Header } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_PET } from '../utils/mutations';
import catAnimationData from '../utils/36318-cat-preloader.json';
import LottieLoader from 'react-lottie-loader';
import defaultImage from '../assets/images/card_default.png';
import Auth from '../utils/auth';

const SavedPets = () => {
    const { loading, data } = useQuery(GET_ME);
//Not the best way, but this can work too:
    // const { loading, data } = useQuery(GET_ME, {pollInterval: 1000});
    const [removePet, { error }] = useMutation(REMOVE_PET);
    //Jason may code savePets using Local Storage feature
        // import { removePetId } from '../utils/localStorage';
    console.log ("Data", data )
    
    const userData = data?.me || {};
    console.log("userData", userData)

 // create function that accepts the pets's mongo _id value as param and deletes the pet from the database
 const handleRemovePet = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
console.log("pet_Id", petId)
    if (!token) {
        return false;
    }
   
    try {
        // savePet mutation to save Pet
        await removePet({
            variables: {petId}
        });

        if (error) {
            throw new Error('Something Went Wrong!');
        }

        // if Pet successfully saves to user's account, save pet id to state
        //setSavedPet([...savedPetIds, petToSave.petId]);

        //May need remove from Local Storage if coded that way
        // removeBookId(bookId);

    } catch (err) {
        console.log(err);
        console.error(err);
    }
};


    // if data isn't here yet - loading
    if (loading) {
        return <div style={{width: '300px', position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}><LottieLoader
            animationData={catAnimationData}
            autoplay='true'
            active
        /></div>
    }
    return (
        <Container>
        <Grid centered columns={1}>
            <Grid.Column>
                <Segment>
            <Header as='h1' textAlign="center"> {userData.savedPets?.length
                ? `Viewing ${userData.username}'s ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'pet' : 'pets'}:`
                : <>You have no saved pets!
                <div><Image src={defaultImage} alt={"logo"} size='medium'/></div></>
                }</Header>
            
            {/* {!userData.savedPets
                                ? <Image src={defaultImage} alt={"logo"} size='medium'/>
                                : ''} */}

                    <Card.Group>
                            {userData.savedPets?.map((pet) => (
                                <Card key={pet._id} >
                                    {pet.photo ? (
                                        <Image src={pet.photo} alt={`Image of ${pet.name}`} wrapped ui={false} loading/>

                                    ) : <Image src={defaultImage} wrapped ui={false} />}
                                    <Card.Content>
                                        <Card.Header>{pet.name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{new Date(pet.enterDate).toLocaleDateString()}, {pet.age}, {pet.sex} </span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {pet.about}
                                            <br /><br />

                                            <i>
                                                {pet.kids === "Y"
                                                    ? <p>Ok With Kids </p>
                                                    : ''}

                                                {pet.cats === "Y"
                                                    ? <p>Ok With Cats</p>
                                                    : ''}

                                                {pet.dogs === "Y"
                                                    ? <p>Ok With Dogs</p>
                                                    : ''}

                                                {pet.medical === "Y"
                                                    ? <p>Medical Condition
                                                        
                                                    </p> : ''}
                                            </i>

                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        {/* Save Pet button  */}
                                        <span className="remove-pet" onClick={() => handleRemovePet(pet._id)}>
                                      
                                            <Icon name='remove circle' /> Remove Pet!
                                        </span>
                                    </Card.Content>
                                </Card>
                            )
                            )}
                        </Card.Group>



                        {/* <Image
                            src={dash}
                            centered
                        // style={{ height: "60px" }}
                        /> */}
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default SavedPets;