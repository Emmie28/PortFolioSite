const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    firstname: {
        type: String,
        required: [true, 'Please add firstname'],
        
    },
    lastname:{
        type: String,
        required: [true, 'Please add lastname']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],

    },
    image: {
        data:Buffer,
        contentType: String,
    },
    address: {
        type: String,
        required: [true, 'Please add address'],
    },
    phone: {
        type: String,
    }, 
    profession: {
        type: String,
    }
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)