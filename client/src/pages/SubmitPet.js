import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_PET } from '../utils/mutations';
import { Container, Form, Header, Button, Segment, Grid, Input, TextArea } from 'semantic-ui-react';
// import Auth from '../utils/auth';

const SubmitPet = () => {
    //Push to our database here..
    const [userFormData, setUserFormData] = useState({ name: '', behavior: '', medical: '', photo: '', about: '' });

    const [createPet, { error }] = useMutation(CREATE_PET);

    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        try {
            const { data } = await createPet({
                variables: { ...userFormData }
            });
            // Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        setUserFormData({
            name: '',
            behavior: '',
            medical: '',
            photo: '',
            about: '',
        });
    };





    //Cloudinary code below
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('Submit error!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

    return (
        <section>
            <Container className="topPadding">
                <Header as="h1" textAlign="center">Submit A Pet</Header>
                <Segment>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input label="Name">
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
                                <Form.Field label='kids' control='input' type='checkbox' />
                                <Form.Field label='only pet' control='input' type='checkbox' />
                                <Form.Field label='other cats' control='input' type='checkbox' />
                                <Form.Field label='other dogs' control='input' type='checkbox' />
                            </Form.Group>
                            <Form.Group grouped>
                                <Input label='Image Upload'
                                    id="fileInput"
                                    type="file"
                                    name="image" //photo???
                                    onChange={handleFileInputChange}
                                    value={fileInputState}
                                    className="form-input"
                                    style={{ width: "370px" }}
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