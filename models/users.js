var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var passportLocalMongoose = require('passport-local-mongoose');
// user schema
var UserSchema
    = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    firstname: String,
    courses: [{
        name: String,
        progress: Number
    }]
});
// Unique check + Passport
UserSchema.plugin(uniqueValidator);
UserSchema.plugin(passportLocalMongoose);
// return the model
module.exports = mongoose.model('User', UserSchema);
