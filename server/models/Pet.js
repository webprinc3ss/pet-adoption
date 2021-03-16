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
            required: true
        },
        age: {
            type: String,
            required: true
        },
        ageClass: {
            type: String,
            required: true
        },
        enterDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        size: {
            type: String,
            required: true
        },
        kids: {
            type: String,
            required: true
        },
        dogs: {
            type: String,
            required: true
        },
        cats: {
            type: String,
            required: true
        },
        medical: {
            type: Boolean,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        sex: {
            type: String,
            required: true,
            enum: ["M", "F"]
        },
        about: {
            type: String,
            required: true
        }
    }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;