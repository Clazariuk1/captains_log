require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const logRoutes = require('./controllers/logs')
const foodRoutes = require('./controllers/foodLogs')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

app.use('/logs', logRoutes)
app.use('/foodLogs', foodRoutes)

app.listen(PORT, () => {
    console.log(`All systems nomenal at Port ${PORT}, Captain.`)
})
