const express = require('express')
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/twitter')
    .then(() => { console.log('Connected to MongoDB...'); })
    .catch((err) => { console.error('Could not connect to MongoDB...', err) })

app.get('/', (req, res) => {
    res.render('Welcome')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

