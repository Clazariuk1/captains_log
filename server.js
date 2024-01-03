require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Log = require('./models/logs')
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
    if(req.body.shipIsBroken === 'off'){
        req.body.shipIsBroken = false
    } else {
        req.body.shipIsBroken = true
    }
    try {
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

// SHOW
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})

        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`All systems nomenal at Port ${PORT}, Captain.`)
})
