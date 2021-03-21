import React, { useState } from 'react';
import Login from '../pages/Login';
import { useMutation } from '@apollo/client';
import { CREATE_PET } from '../utils/mutations';
import { Container, Form, Header, Button, Segment, Grid, Input, Message } from 'semantic-ui-react';
import Auth from '../utils/auth';

const SubmitPet = () => {

    const [previewSource, setPreviewSource] = useState('');
    const [createPet, { error }] = useMutation(CREATE_PET);


    //takes photo file in and saves to state
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };

    // allows to preview photo on page
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    // Submit form to server side including all form inputs
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(e.target);
        try {
            await fetch("/api/files", {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(
                    petData =>
                        createPet({ variables: { petData } })
                )
        }


        catch (err) {
            console.error(err);
            // setShowAlert('Something went wrong!');
        }
        e.target.reset();
        setPreviewSource("");
        // window.location.reload();
    };

    Auth.loggedIn();


    return (
        <section>
            <Container className="topPadding">
                <Header as="h1" textAlign="center">Submit A Pet</Header>

                <Segment>
                    {
                        error ? <Message className="warning">
                            You must fill out this form completely and correctly.
                        </Message> : null
                    }
                    {Auth.loggedIn() ? (

                        < Form onSubmit={handleFormSubmit}>
                            <Form.Group widths="equal">
                                <Form.Input
                                    label="Name"
                                    name="name"
                                >
                                    <input placeholder='Pet name'
                                    />
                                </Form.Input>
                                <Form.Field label="Type"
                                    control='select'
                                    name="type"
                                >
                                    <option value='cat'>Cat</option>
                                    <option value='dog'>Dog</option>
                                </Form.Field>

                                <Form.Field
                                    label='Sex'
                                    control='select'
                                    name="sex"
                                >
                                    <option value='M'>Male</option>
                                    <option value='F'>Female</option>
                                </Form.Field>
                                <Form.Field
                                    label='Age Category'
                                    control='select'
                                    name="ageClass"
                                >
                                    <option value='young'>Young</option>
                                    <option value='adult'>Adult</option>
                                    <option value='senior'>Senior
                                </option>
                                </Form.Field>
                                <Form.Field
                                    label='Size'
                                    control='select'
                                    name="size"
                                >
                                    <option value='small'>Small</option>
                                    <option value='medium'>medium</option>
                                    <option value='large'>large</option>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Group grouped widths="equal">
                                    <label>Medical Condition?</label>
                                    <Form.Field label='yes' control='input' type='checkbox' name="medical" />

                                    <label>Behavior</label>
                                    <Form.Field label='Can live with kids' name="kids" control='input' type='checkbox' // value={formState.kids}
                                    />
                                    <Form.Field label='Can live with cats' name="cats" control='input' type='checkbox' // value={formState.otherCats}
                                    />
                                    <Form.Field label='Can live with dogs' name="dogs" control='input' type='checkbox' // value={formState.otherDogs}
                                    />
                                </Form.Group>

                                <Form.Group grouped>
                                    <label>Age</label>
                                    <Input
                                        label="Age"
                                        name="age"
                                        style={{ width: "100%" }}
                                    >
                                        <input placeholder='Pet age'
                                        />
                                    </Input>
                                    <br></br><br></br>
                                    <Form.Group grouped >
                                        <Input label='Photo Upload'
                                            id="fileInput"
                                            type="file"
                                            name="photo"
                                            className="form-input"
                                        />

                                        {previewSource && (
                                            <img
                                                src={previewSource}
                                                alt="chosen"
                                                style={{ height: '300px' }}
                                            />
                                        )}
                                    </Form.Group>

                                </Form.Group>

                            </Form.Group>
                            <Form.Group>

                                <textarea placeholder="Tell us more" rows="3" label='Tell us about this pet' control='input' type='textarea' name="about"></textarea>
                            </Form.Group>
                            <Grid>
                                <Grid.Column textAlign="center">
                                    <Button type='submit' fluid color='blue'>Submit</Button>
                                </Grid.Column>
                            </Grid>
                        </Form>


                    ) : (
                        <>
                            <Message className="warning"> You must log in to submit a pet!</Message>

                            <Login />
                        </>
                    )}
                    {
                        error ? <Message className="warning">
                            You must fill out this form completely and correctly.
                        </Message> : null
                    }
                </Segment>
            </Container>
        </section >
    );
};

export default SubmitPet;