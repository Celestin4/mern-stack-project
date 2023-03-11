const mongoose =  require ("mongoose");
const goalSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true, 'please add a name']
    },
    email: {
        type: String,
        required : [true, 'please add an email']
    },
    pasword: {
        type: String,
        required : [true, 'please add a password']
    }
}, {
    timeStamps: true,
})

module.exports = mongoose.model('user', userSchema)