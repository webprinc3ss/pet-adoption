import React from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';


const Footer = () => {
    return (

        <Menu
            inverted
            borderless
            style={{
                flexShrink: 0, //don't allow flexbox to shrink it
                borderRadius: 0, //clear semantic-ui style
                margin: 0 //clear semantic-ui style
            }}>
            <Menu.Item>
                <Container className="footer-container">
                    <Grid className="footer-grid">
                        <Grid.Column>
                            <a href="https://github.com/webprinc3ss" target="_blank">Danielle Branton</a>
                        </Grid.Column>
                        <Grid.Column>
                        <a href="https://github.com/calistamayer" target="_blank">Calista Mayer</a>
                        </Grid.Column>
                        
                        <Grid.Column textAlign="center">

                            <span>Thank you for visiting!<br /><br />
                                    © MustFit Pets 2021
                            </span>

                        </Grid.Column>

                        <Grid.Column>
                            <a href="https://github.com/anthonykieu" target="_blank">Anthony Kieu</a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href="https://github.com/yooperjb" target="_blank">Jason Barnes</a>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Menu.Item>
        </Menu>







    );
};

export default Footer;