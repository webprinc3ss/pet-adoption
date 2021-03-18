const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String, // ["cat", "dog"]
            required: true
        },
        age: {
            type: Number, // changed from String
            required: true
        },
        ageClass: {
            type: String, // ["Young", "Adult", "Senior"]
            required: true
        },
        enterDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        size: {
            type: String, // ["small", "medium", "large"]
            required: true
        },
        kids: {
            type: String, // ["Y", "N"]
            required: true
        },
        dogs: {
            type: String, // ["Y", "N"]
            required: true
        },
        cats: {
            type: String, // ["Y", "N"]
            required: true
        },
        medical: {
            type: String, // ["Y", "N"]
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