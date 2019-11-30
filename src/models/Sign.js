const mongoose = require(`mongoose`)

const SignSchema = new mongoose.Schema({
    name: String,
    birthdate: Date,
    starSign: String
}, {
    timestamps: true
});

module.exports = mongoose.model(`Sign`, SignSchema)