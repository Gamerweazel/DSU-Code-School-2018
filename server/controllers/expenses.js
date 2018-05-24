const Expense = require('../models/expense')

module.exports = {
  listExpenses: (req, res) => {
    Expense.find()
      .then(docs => res.json(docs))
      .catch(e => console.log(e))
  },
  getExpense: (req, res) => {
    // Remember the :id in our get expenses path? This is where it comes in handy.
    Expense.findById(req.params.id)
      .then(doc => res.json(doc))
      .catch(e => console.log(e))
  },
  createExpense: (req, res) => {
    // We now have the 'body' part of the request thanks to bodyparser module!
    // This allows us to finally take client data from a request in order to create our expenses.
    Expense.create({
      description: req.body.description,
      amount: req.body.amount
    })
      .then(doc => {
        console.log('Document created successfully', doc)
        res.status(200).send('Document created successfully')
      })
      .catch(e => console.log(e))
  },
  updateExpense: (req, res) => {
    Expense.findByIdAndUpdate(req.params.id, {
      description: req.body.description,
      amount: req.body.amount
    })
      .then(() => res.send('Document update successful'))
      .catch(e => console.log(e))
  },
  deleteExpense: (req, res) => {
    Expense.findByIdAndRemove(req.params.id)
      .then(() => res.send('Document delete successful'))
      .catch(e => console.log(e))
  },
  mySecretFunction: (req, res) => res.send('the secret password is "ice-princess"')
}
