const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals, getAllGoals } = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoals)



module.exports = router