const express = require('express')
const router = express.Router()
const { getProfile, setProfile } = require('../controllers/profileController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getProfile).post(protect,setProfile)

module.exports = router