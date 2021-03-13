const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        ageClass: {
            type: String,
            required: true,
        },
        enterDate: {
            type: Date,
            required: true,
            default: Date.now,
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
        sex: {
            type: String,
            required: true
        },
        about: {
            type: String,
            required: true
        }
    }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;