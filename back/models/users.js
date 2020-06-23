let mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// OLD
// let User = mongoose.model('User', {
//     userName: { type: String, index: true },
//     password: { type: String },
//     email: { type: String, unique: true},
//     isLogged: { type: String, default: true },
//     role: { type: String, default: true }
// });


// module.exports = User;

// NEW
let userSchema = new mongoose.Schema({
    userName: { type: String, index: true },
    password: { type: String },
    email: { type: String, unique: true},
    isLogged: { type: String, default: true },
    role: { type: String, default: true }
})

// userSchema.pre('save', function(next) {
//     let user = this

//     if(!user.isModified('password'))
//     return next()

//     //bcrypt.hash(user.password, null, null, (err, hash)=> { //- previos method
//     bcrypt.hash(user.password, 10, (err, hash)=> {
//         if(err) return next(err);
//         user.password = hash;
//         next();
//     });
// })

module.exports = mongoose.model('User', userSchema)