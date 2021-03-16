import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

const Mission = () => {
    return (
        <Container className="topPadding">
            <Header as='h1' textAlign="center">Eevee's Mission</Header>
            <Grid centered columns={2}>
                <Grid.Column>
                    <section>

                        <p>
                            Hi! I am Eevee, a sweet and gentle chihuahua! Until I was 11 years old, I was a "breeder" for my owner. 
                            I had thousands of puppies througout my life! But, my owner did not care about my health :( When I was found 
                            by a pet rescue organization, I had no teeth and my leg was so injured, it had to be removed. I learned to 
                            get around on three legs, though, and I still had a heart of gold. When my new mom Ellie found me, I was really nervous
                            at first... when I saw how gentle and caring she was, I felt comfortable showing her my silly side! We took 
                            so many naps and adventures together; I am so lucky that I got a second chance at the magical life I deserved!
                            Now, I am an ambassador for MustFit Pets. This is my story and why I want to help other hard-to-place-pets find a furever home. </p>
                    </section>
                    </Grid.Column>
                    <Grid.Column>
                        <img src="./assets/images/eevee.png" alt="Eeevee the chihuahua" />
                    </Grid.Column>
            </Grid>
        </Container>
    );
};

export default Mission;
