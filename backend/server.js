const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))
// app.get('/api/goals', (req, res) => {
//     res.send('is harsh')
// });

app.listen(port, () => console.log(`Server is started on port ${port}`))