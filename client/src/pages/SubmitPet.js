import React, { useState } from 'react';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_PET } from '../utils/mutations';
import { Container, Form, Header, Button, Segment, Grid, Input, Message } from 'semantic-ui-react';
import Auth from '../utils/auth';

const SubmitPet = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState('');
    // const [petData, setPetData] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [createPet, { error }] = useMutation(CREATE_PET);
    // const [name, setName] = useState("")


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
            // .then(this.props.router.push('/'))
            // .then(this.refs.myForm.submit())
            // .then(setName(""))
            // .then(this.props.history.push('/'));
        }


        catch (err) {
            console.error(err);
            setShowAlert('Something went wrong!');
        }
    };

    Auth.loggedIn();



    return (
        <section>
            <Container className="topPadding">
                <Header as="h1" textAlign="center">Submit A Pet</Header>

                <Segment>

                    {Auth.loggedIn() ? (

                        < Form onSubmit={handleFormSubmit}>
                            <Form.Group widths="equal">
                                <Form.Input
                                    label="Name"
                                    name="name"
                                // value={name}
                                >
                                    <input placeholder='Pet name'
                                    />
                                </Form.Input>
                                <Form.Field label="Type"
                                    control='select'
                                    name="type"
                                // value={formState.type}
                                >
                                    <option value='cat'>Cat</option>
                                    <option value='dog'>Dog</option>
                                </Form.Field>

                                <Form.Field
                                    label='Sex'
                                    control='select'
                                    name="sex"
                                // value={formState.sex}
                                >
                                    <option value='M'>Male</option>
                                    <option value='F'>Female</option>
                                </Form.Field>
                                <Form.Field
                                    label='Age Category'
                                    control='select'
                                    name="ageClass"
                                // value={formState.ageClass}
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
                                // value={formState.ageClass}
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
                                    // value={formState.name}
                                    >
                                        <input placeholder='Pet age'
                                        />
                                    </Input>
                                    <br></br><br></br>
                                    <Form.Group grouped >
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

                            </Form.Group>
                            <Form.Group>
                                <Form.Field label='Tell us about this pet' control='input' type='textarea' name="about"
                                    style={{ width: "250px", height: "150px" }}
                                />
                            </Form.Group>
                            <Grid>
                                <Grid.Column textAlign="center">
                                    <Button type='submit' fluid color='blue'>Submit</Button>
                                </Grid.Column>
                            </Grid>
                        </Form>

                    ) : (
                        <>
                            <Message style={{ textAlign: "center", backgroundColor: "#fbb540", color: "cream", fontWeight: "600", fontSize: "20px" }}>You must log in to submit a pet!</Message>

                            <Login />
                        </>
                    )}
                </Segment>
            </Container>
        </section >
    );
};

export default SubmitPet;