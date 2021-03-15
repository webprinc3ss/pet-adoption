import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { CREATE_PET } from '../utils/mutations';
import { Container, Form, Header, Button, Segment, Grid, Input, TextArea } from 'semantic-ui-react';
// import Auth from '../utils/auth';

const SubmitPet = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    //takes photo file in and saves to state
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
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
        console.log(e.target)
        try {
            await fetch("/api/files", {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(console.log);
        } catch (err) {
            console.error(err);
            setShowAlert('Something went wrong!');
        }
    };

    return (
        <section>
            <Container className="topPadding">
                <Header as="h1" textAlign="center">Submit A Pet</Header>
                <Segment>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input label="Name" name="name">
                                <input placeholder='Pet name' />
                            </Form.Input>
                            <Form.Field label="Type" control='select' name="type">
                                <option value='cat'>Cat</option>
                                <option value='dog'>Dog</option>
                            </Form.Field>

                            <Form.Field label='Sex' control='select' name="sex">
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </Form.Field>
                            <Form.Field label='Age' control='select' name="ageClass">
                                <option value='young'>Young</option>
                                <option value='adult'>Adult</option>
                                <option value='senior'>Senior</option>
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='2'>
                            <Form.Group grouped name="behavior">
                                <label>Behavior</label>
                                <Form.Field label='kids' name="kids" control='input' type='checkbox' />
                                <Form.Field label='only pet' name="onlyPet" control='input' type='checkbox' />
                                <Form.Field label='other cats' control='input' type='checkbox' />
                                <Form.Field label='other dogs' control='input' type='checkbox' />
                            </Form.Group>
                            <Form.Group grouped>
                                <Input label='Photo Upload'
                                    id="fileInput"
                                    type="file"
                                    name="photo" //photo???
                                    onChange={handleFileInputChange}
                                    value={fileInputState}
                                    className="form-input"
                                // style={{ width: "370px" }}
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
                        <Form.Group widths="2">
                            <Form.Group grouped>
                                <label>Medical Condition?</label>
                                <Form.Field label='yes' control='input' type='checkbox' name="medical" />
                            </Form.Group>
                            <Form.Group grouped>

                                <Form.Field label='Tell us about this pet' control='input' type='textarea' name="about"
                                    style={{ width: "400px", height: "200px" }}


                                />
                            </Form.Group>
                        </Form.Group>
                        <Grid>
                            <Grid.Column textAlign="center">
                                <Button type='submit' fluid color='blue'>Submit</Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                </Segment>
            </Container>
        </section>
    );
};

export default SubmitPet;