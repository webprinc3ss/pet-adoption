// use graphql error handling for client
const { AuthenticationError } = require('apollo-server-express');
const { graphql, GraphQLScalarType, Kind } = require('graphql');
// import models
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

// resolvers - the functions we connect to each typeDef
const resolvers = {
    //Custom date type: Telling Apollo Server how to figure out how to parse a date and how to serialize a Date
    Date: new GraphQLScalarType({
        name: 'Date',
        serialize(value) {
            return value.toISOString()
        },
        parseValue(value) {
            const date = new Date(value)
            if (isNaN(date.getTime())) {
                return null
            }
            return date;
        },
        parseLiteral(ast) {
            const date = new Date(ast.value)
            if (isNaN(date.getTime())) {
                return null
            }
            return date;
        }
    }),
    // queries
    Query: {
        // get single user - check authentication from context
        me: async (parent, args, context) => {
            console.log("Context.user", context.user);

            // if authenticated user exists
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    // exclude mongoose id and pw
                    .select('-__v -password')
                console.log("Context.user_id", context.user._id);
                console.log("userData ", userData)
                return userData;

            }
            // if user does not exist
            throw new AuthenticationError('Not Logged In');
        },

        pets: async (parent, { filter }) => {
            console.log(filter);
            return Pet.find(filter);
        }
    },

    // mutations
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // create and sign user token
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            // find user by email
            const user = await User.findOne({ email });

            // user generic client error message if incorrect user
            if (!user) {
                throw new AuthenticationError("Incorrect Credentials");
            }
            const correctPw = await user.isCorrectPassword(password);

            // use generic client error message if incorrect pass
            if (!correctPw) {
                throw new AuthenticationError("Incorrect Credentials");
            }

            // create and sign user token
            const token = signToken(user);
            return { token, user };
        },

        createPet: async (parent, { petData }, context) => {
            console.log("R_petData:", petData);
            if (context.user) {
                // console.log("Context.user-createPet", context.user);
                const createdPet = await Pet.create(petData);
                console.log("Context.user-createPet", context.user);
                return createdPet;
            }
        },

        savePet: async (parent, { petData }, context) => {
            console.log("petData:", petData);

            // if user logged in - add petData to savedPets
            if (context.user) {
                console.log("Context.user-savePet", context.user);
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedPets: petData } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError("You need to be logged in!");
        },

        removePet: async (parent, { petId }, context) => {

            if (context.user) {
                console.log("Context.user-removePet", context.user);
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedPets: { petId } } },
                    { new: true }
                )

                return updatedUser;
            }
        }
    }
};

module.exports = resolvers;