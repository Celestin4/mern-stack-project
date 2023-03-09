const getGoals = (req, res) => {
    res.status(200).json({message: "get goals"})
}

const setGoals = (req, res) => {
    res.status(200).json({message: "set goals"})
}

const puttGoals = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoals,
    puttGoals,
    deleteGoals


}