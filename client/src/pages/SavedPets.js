import React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';
import dash from '../assets/images/pets.jpg';
// import { useQuery, useMutation } from '@apollo/client';
// import { REMOVE_BOOK } from '../utils/mutations';
// import { GET_ME } from '../utils/queries';

const SavedPets = () => {
    return (
        <Container className="topPadding">
            <Header as='h1' textAlign="center">Saved Pets</Header>
            <Grid centered columns={2}>
                <Grid.Column>
                    <section>
                        <Image
                            src={dash}
                            centered
                        // style={{ height: "60px" }}
                        />
                    </section></Grid.Column>
            </Grid>
        </Container>
    )
}

export default SavedPets;