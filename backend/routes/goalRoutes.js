const express = require("express")
const router = express.Router()
const {getGoals, setGoal, deleteGoal, updateGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
// router.get('/', getGoals)

// router.post('/', setGoals)

// router.delete('/:id', deleteGoals)
// router.put('/:id', puttGoals)

module.exports = router
