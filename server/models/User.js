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
               ref: 'Pet',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to hash password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
      console.log("password:", this.password);
    }
  
    next();
  });

// custom method to compare and validate password for logging in using isCorrectPassword
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

// create the User model using the userSchema
const User = model('User', userSchema);
// export the User model
module.exports = User;