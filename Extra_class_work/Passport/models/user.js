const mongoose=require('mongoose')
const passportLocalmongoose=require('passport-local-mongoose')

let UserSchema= new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalmongoose);
module.exports = mongoose.model('User', UserSchema)