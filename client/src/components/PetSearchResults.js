import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
import { SAVE_PET } from '../utils/mutations';
import defaultImage from '../assets/images/card_default.png';
import { Container, Grid, Segment, Card, Icon, Image} from 'semantic-ui-react';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';
import Auth from '../utils/auth';
import catAnimationData from '../utils/36318-cat-preloader.json';
import LottieLoader from 'react-lottie-loader';

const PetSearchResults = ({ filter }) => {

    // create state for holding returned pet data - caused infinite loop
    //const [filteredPets, setFilteredPets] = useState([]);

    // create state to hold saved petId values - get petIds from localstorage
    const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());
    
    // use SAVE_PET mutation to save pet to database
    const [savePet, { error }] = useMutation(SAVE_PET);

    // set up useEffect hook to save `savedPetIds` list to localStorage on component unmount
    useEffect(() => {
        return () => savePetIds(savedPetIds);
    });

    console.log("savedPetIds:", savedPetIds);

    // filter pets - gets ageClass, sex, type, medical and behavior
    const { loading, data } = useQuery(GET_PETS, { variables: { filter } });
//To update state on savedpets - Apollo Cache issue - updating cache after mutation
    // const { refetch} = useQuery(GET_ME);

    // if data isn't here yet load Cat
    console.log("loading", loading);
    if (loading) {
        return <div style={{width: '225px', position: "fixed", left: "50%", paddingTop: '200px',transform: "translate(-50%, -50%)"}}><LottieLoader
            animationData={catAnimationData}
            autoplay='true'
            active
        /></div>
    }
    
    // assign query data to pets
    const pets = data?.pets || [];
    //const {pets} = data;
   
    console.log("pets", pets);

    // create function to handle saving Pet to database - receives petId from pet card
    const handleSavePet = async (petId) => {
        
        //console.log("handleSavePet function")
        //console.log({pets});
        // check for user token - get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
       
        try {
            // savePet mutation to save Pet
            await savePet({
                variables: {petId}
            });

            if (error) {
                throw new Error('Something Went Wrong!');
            }
            
            // if Pet successfully saves to user's account, save pet id to state if it doesn't already exist
            if (!savedPetIds.includes(petId)){
                setSavedPetIds([...savedPetIds, petId]);
            }

        //    await refetch();
        } catch (err) {
            console.log(err);
            console.error(err);
        }
    };

    return (
        <Container>
            <Grid centered columns={1}>
                <Grid.Column>
                    <Segment>
                        <h1>
                            {pets.length
                                ? `Viewing ${pets.length} pets:`
                                : 'No results'}
                        </h1>

                        <Card.Group>
                            {pets.map((pet) => (
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
                                        
                                        {/* Show the save button if logged in */}
                                        {Auth.loggedIn() ? (
                                            <Card.Content extra>
                                                
                                                <span 
                                                data-disabled={savedPetIds?.some((savedPetId) => savedPetId === pet._id )}
                                                className="save-pet" 
                                                onClick={() => handleSavePet(pet._id)}>
                                                    
                                                <Icon name='paw' /> 
                                                {savedPetIds?.some((savedPetId) => savedPetId === pet._id)
                                                    ? 'Saved'
                                                    : 'Save'}
                                                
                                                </span>
                                                
                                            </Card.Content>
                                        ):(
                                            <>
                                            </>
                                        )}  

                                </Card>
                            )
                            )}
                        </Card.Group>

                        {/* <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={5}
                        /> */}

                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default PetSearchResults;