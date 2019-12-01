const mongoose = require('mongoose')

const SignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    starSign: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Sign', SignSchema)