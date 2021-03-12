import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

const Mission = () => {
    return (
        <Container className="topPadding">
            <Header as='h1' textAlign="center">Eevee's Mission</Header>
            <Grid centered columns={2}>
                <Grid.Column>
                    <section>

                        <p>Hi!  I am Eevee and I am an ambassador for MustFit Pets. This is my story and why I want to help other hard-to-place-pets find a furever home. </p>
                    </section></Grid.Column>
            </Grid>
        </Container>
    );
};

export default Mission;
