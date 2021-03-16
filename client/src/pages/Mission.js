import React from 'react';
import { Container, Form, Header, Button, Segment, Grid, Image } from 'semantic-ui-react';
import eevee from "../assets/images/eevee.png";

const Mission = () => {
    return (
        <Container className="topPadding">
            <Header as='h1' textAlign="center">Eevee's Mission</Header>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Image src={eevee} />
                </Grid.Column>
                <Grid.Column textAlign="justified">
                    <section>

                        <p>
                            Hi! I am Eevee, a sweet and gentle chihuahua! Until I was 11 years old, I was owned by a breeder
                            who did not care enough about my health. When I was found by a pet rescue organization, I had no 
                            teeth and my leg was so injured, it had to be removed. I learned to get around on three legs, though, 
                            and I still had a heart of gold. <br /><br />
                            
                            When my new mom Ellie adopted me, I was really nervous at first... when I saw how caring she was, I felt 
                            comfortable showing her my silly side! I am so lucky that I got a second chance at the magical life I deserved!
                            <br /><br />

                            Now, I am an ambassador for MustFit Pets. This is my story and why I want to help other hard-to-place-pets 
                            find a furever home. 
                        </p>
                    </section>
                    </Grid.Column>

            </Grid>
        </Container>
    );
};

export default Mission;
