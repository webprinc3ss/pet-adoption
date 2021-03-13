import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
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

export const GET_PETS = gql`
    query ($filter:PetFilterInput){
        pets(filter:$filter) {
            _id
            name
            type
            # shelterTime
            # age
            # size
            # behavior
            # medical
            # photo
        }
    }
`;