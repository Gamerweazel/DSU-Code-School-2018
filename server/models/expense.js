const mongoose = require('mongoose')
const moment = require('moment')

const expenseSchema = mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: String, default: moment().format('MMMM Do, YYYY') }
})

module.exports = mongoose.model('Expense', expenseSchema)
