const mongoose = require('mongoose')
const conn = mongoose.createConnection('mongodb+srv://Saikrishna:Saikrishna123@cluster0.7y8fwdm.mongodb.net/?retryWrites=true&w=majority')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    to: {
        type: String        
    },
    subject: {
        type: String        
    },
    text: {
        type: String        
    }
})



const User = conn.model('User', userSchema)
module.exports = User;