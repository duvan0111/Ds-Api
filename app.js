const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')

mongoose.connect('mongodb://localhost:27017/dsBd',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//cross
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//config json
app.use(express.json())

//middleware
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoutes)


module.exports = app