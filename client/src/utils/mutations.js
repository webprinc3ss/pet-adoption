import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_PET = gql`
    mutation createPet($petData: PetInput!) {
        createPet(petData: $petData) {
            _id
            name
            type
            age
            ageClass
            size
            kids
            cats
            dogs
            medical
            photo
            sex
            about
        }
    }
`;

export const SAVE_PET = gql`
    mutation savePet($petData: PetInput!) {
        savePet(petData: $petData) {
            _id
            username
            email
            savedPets {
                _id
                name
                ageClass
                enterDate
                age
                size
                behavior
                medical
                photo
                about
                sex
            }
        }
    }
`;