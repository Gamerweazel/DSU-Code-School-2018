const Expense = require('../models/expense')

module.exports = {
  listExpenses: (req, res) => {
    Expense.find()
      .then(docs => res.json(docs))
      .catch(e => console.log(e))
  },
  getExpense: (req, res) => res.send('get a single expense'),
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
  updateExpense: (req, res) => res.send('update an expense'),
  deleteExpense: (req, res) => res.send('delete an expense'),
  mySecretFunction: (req, res) => res.send('the secret password is "ice-princess"')
}
