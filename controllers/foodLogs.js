

// INDUCES
const FoodLog = require("../models/foodLogs")
const express = require('express')
const router = express.Router()

// INDEX
router.get('/', async (req, res) => {
    try {
        const foundFoodLogs = await FoodLog.find({})
        res.render('foodLogs/Index', {
            foodLogs: foundFoodLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
router.get('/new', (req, res) => {
    res.render('foodLogs/New')
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await FoodLog.findOneAndDelete({'_id': req.params.id})
        .then(() => {
            res.redirect('/foodLogs')
        })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    if(req.body.wouldOrderAgain === 'off') {
        req.body.wouldOrderAgain = false
    } else {
        req.body.wouldOrderAgain = true
    }
    try {
        await FoodLog.findOneAndUpdate({ '_id': req.params.id},
        req.body, { new: true})
        .then(() => {
            res.redirect(`/foodLogs/${req.params.id}`)
        })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

// CREATE

router.post('/', async (req, res) => {
    if(req.body.wouldOrderAgain === 'off'){
        req.body.wouldOrderAgain = false
    } else {
        req.body.wouldOrderAgain = true
    }
    try {
        const createdLog = await FoodLog.create(req.body)
        res.redirect(`/foodLogs/${createdLog._id}`)
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

// EDIT
router.get('/:id/edit', async (req, res) => {
    try {
        const foundLog = await FoodLog.findOne( {'_id': req.params.id})
        res.render('foodLogs/Edit', {
            foodLog: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundLog = await FoodLog.findOne({_id: req.params.id})

        res.render('foodLogs/Show', {
            foodLog: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = router
