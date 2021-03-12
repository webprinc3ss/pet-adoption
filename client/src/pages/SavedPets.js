import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { REMOVE_BOOK } from '../utils/mutations';
// import { GET_ME } from '../utils/queries';

const SavedPets = () => {
    return (
        <Container className="topPadding">
            <Header as='h1' textAlign="center">Saved Pets</Header>
            <Grid centered columns={2}>
                <Grid.Column>
                    <section>

                    </section></Grid.Column>
            </Grid>
        </Container>
    )
}

export default SavedPets;