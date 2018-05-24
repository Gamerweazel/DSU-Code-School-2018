const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenses')

// A router is the exact same as app.get, the difference is we can use it as a middleware on a specific route for the app.
// Separating code like this is easier to edit later.

// We take advantage of controllers, which hold the logic for the desired action that matches the specific route.
router.get('/', expenseController.listExpenses)
router.get('/:id', expenseController.getExpense)

// Just to stress, we have the ability to customize our controllers and routes. We are not forced to follow any rules.
// If a client requests '/expenses/secrets/secret' then our secret function will run from our controller.
router.get('/secrets/secret', expenseController.mySecretFunction)

// Different actions exist other than get, post occurs when a client wants to make new data.
router.post('/:id', expenseController.createExpense)

// Put is used for updating data.
router.put('/:id', expenseController.updateExpense)

// Delete is self explanatory.
router.delete('/:id', expenseController.deleteExpense)

module.exports = router
