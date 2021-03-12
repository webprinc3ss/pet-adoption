import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
import { Container, Grid, Segment } from 'semantic-ui-react';

const PetSearchResults = ({ filter }) => {

    const { loading, error, data } = useQuery(GET_PETS, { variables: { filter } })

    if (loading)
        return <>loading</>

    return (
        <Container>
            <Grid centered columns={1}>
                <Grid.Column>
                    <Segment>
                        {/* <ul>
 {searchResults.map(item => (
  <li>{item}</li>
))}
</ul> */}
                        {JSON.stringify(data)}
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>

    )
}

export default PetSearchResults;