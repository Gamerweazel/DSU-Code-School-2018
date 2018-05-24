const Expense = require('../models/expense')

module.exports = {
  listExpenses: (req, res) => res.send('get all expenses'),
  getExpense: (req, res) => res.send('get a single expense'),
  createExpense: (req, res) => {
    Expense.create({
      description: 'Shoe polish',
      amount: 15.99,
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
