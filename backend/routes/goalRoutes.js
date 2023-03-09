const express = require("express")
const router = express.Router()
const {getGoals, setGoals, deleteGoals, puttGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(puttGoals).delete(deleteGoals)
// router.get('/', getGoals)

// router.post('/', setGoals)

// router.delete('/:id', deleteGoals)
// router.put('/:id', puttGoals)

module.exports = router

