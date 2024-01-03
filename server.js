require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Log = require('./models/logs')
// const Log = require('.models/log')
const PORT = process.env.PORT || 3000

const app = express()

// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', () => {
//     console.log('connected to mongodb')
// })

// INDUCES

// INDEX
// app.get('/logs', async (req, res) => {
//     try {
//         const foundLogs = await Log.find({})
//         res.render('logs/Index', {
//             logs: foundLogs
//         })
//     } catch (error) {
//         res.status(400).send({ message: error.message })
//     }
// })

// NEW
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

// CREATE

app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        // const createdLog = await Log.create(req.body)
        res.send(req.body)
        // res.redirect(`/logs/${createdLog._id}`)
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`All systems nomenal at Port ${PORT}, Captain.`)
})
