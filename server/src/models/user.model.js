const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    role: { type: String, required: false }
});

userSchema.plugin(unique);

module.exports = mongoose.model('User', userSchema);