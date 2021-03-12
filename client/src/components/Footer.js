import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';


const Footer = () => {
    return (

        <Container className="topPadding">
            <Grid centered columns={2}>
                <Grid.Column textAlign="center">
                    <footer>

                        <p>Thank you for visiting!</p>
                        <p>
                        </p>
                        <span>
                            © MustFit Pets 2021
  </span>
                    </footer></Grid.Column>
            </Grid>
        </Container>



    );
};

export default Footer;