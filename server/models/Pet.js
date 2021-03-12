const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        ageClass: {
            type: String,
            required: true,
        },
        enterDate: {
            type: Date,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        behavior: [
            {
            type: String,
            required: false,
            }
        ],
        medical: {
            type: Boolean,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        about: {
            type: String,
            required: true
        }
    }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;