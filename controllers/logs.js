// you could pull whole app in here but you don't need it, you only need route
//certain languages work different ways. sometimes universal import, sometimes localized import. EVERY FILE needs the import given.
// You DONT need upper/lowercase naming. you can use _ instead. ex : _router instead of Router . gives variation between the variable names.
const Log = require('../models/logs')

const express = require('express')

const router = express.Router()

// INDUCES

// INDEX
router.get('/', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
router.get('/new', (req, res) => {
    res.render('logs/New')
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Log.findOneAndDelete({'_id': req.params.id})
        .then(() => {
            res.redirect('/logs')
        })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    if(req.body.shipIsBroken === 'off') {
        req.body.shipIsBroken = false
    } else {
        req.body.shipIsBroken = true
    }
    try {
        await Log.findOneAndUpdate({ '_id': req.params.id},
        req.body, { new: true})
        .then(() => {
            res.redirect(`/logs/${req.params.id}`)
        })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

// CREATE

router.post('/', async (req, res) => {
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

// EDIT
router.get('/:id/edit', async (req, res) => {
    try {
        const foundLog = await Log.findOne( {'_id': req.params.id})
        res.render('logs/Edit', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})

        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})




module.exports = router
