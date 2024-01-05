const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    Date: { type: Date, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true},
    wouldOrderAgain: Boolean,
}
, { timestamps: true }
)

const FoodLog = mongoose.model('FoodLog', logSchema)

module.exports = FoodLog
