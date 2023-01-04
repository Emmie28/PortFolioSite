const asyncHandler = require('express-async-handler')

const Profile = require('../models/profileModel')
const User = require('../models/userModel')
const multer = require('multer')

//Configure the image storage
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const upload = multer({storage:Storage})


// @desc Set Profile
// @route Set /api/profile
// @access Private
const setProfile = asyncHandler( async (req, res) => {
    const id = req.user.id
    
    const { firstname, lastname, email, phone, address, profession} = req.body
    if(!firstname || !lastname || !email || !phone || !address || !profession){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const profile = await Profile.create({
        user: id,
        image:req.body.file,
        firstname,
        lastname,
        email,
        address,
        phone,
        profession,    
    })

    if(profile){
        
    res.status(200).json({ 
        firstname,
        lastname,
        email,
        address,
        phone,
        profession,
    })
}
})


// @desc Get profile
// @route Get /api/profile
// @access Private
const getProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.find({ user: req.user.id })
    if(profile)
        res.status(200).json(profile)
    else
        res.status(400).json({error: 'Error in retrieving profile'})
})

module.exports = {
    getProfile,
    setProfile,
}