module.exports = {
  listExpenses: (req, res) => res.send('get all expenses'),
  getExpense: (req, res) => res.send('get a single expense'),
  createExpense: (req, res) => res.send('create an expense'),
  updateExpense: (req, res) => res.send('update an expense'),
  deleteExpense: (req, res) => res.send('delete an expense'),
  mySecretFunction: (req, res) => res.send('the secret password is "ice-princess"')
}
