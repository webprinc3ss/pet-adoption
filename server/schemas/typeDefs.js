// import the gql tagged template function
// apollo-server-express integrates with express
const { gql } = require('apollo-server-express');

// create typeDefs - all data the client will expect to work with
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedPets: [Pet]
    }

    type Pet {
        _id: ID
        name: String
        type: String
        shelterTime: Number
        age: Number
        size: String
        behavior: [String]
        medical: Boolean
        photo: String
        sex: String
    }

    input PetInput {
        name: String!
        type: String!
        shelterTime: Number
        age: Number
        size: String
        behavior: [String]
        medical: Boolean
        photo: String
        sex: String
    }

    input PetFilterInput {
        type: String
        age: Number
        size: String
        behavior: [String!]
        medical: Boolean
    }

    type Query {
        me: User
        pets(filter: PetFilterInput): [Pet]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createPet(petData: PetInput!): Pet
        savePet(petData: PetInput!): User
        removePet(petId: ID!): User
    } 

    type Auth {
        token: ID!
        user: User
    }
`;

// export typeDefs
module.exports = typeDefs;