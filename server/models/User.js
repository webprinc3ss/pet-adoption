// import Schema constructor and model function
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        // tell mongoose to expect an ObjectId from the Pet model
        savedPets: [
            {
               type: Schema.Types.ObjectId,
               ref: 'Pet' 
            }
        ]
    }
);

// create the User model using the userSchema
const User = model('User', userSchema);
// export the User model
module.exports = User;