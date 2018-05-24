const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenses')

// A router is the exact same as app.get, the difference is we can use it as a middleware on a specific route for the app.
// Separating code like this is easier to edit later.

// Routers themselves can use middleware. Middlewares are like a conveyor belt and make decisions about the request and either send something back or move along to the next middleware.
router.use('/', (req, res, next) => {
  // The request is shared across all middleware, modifying anything on it can communicate info between middleware.
  req.message = 'hello'
  // Calling next like a function passes the request along to the next matching middleware.
  // Failing to call next will make our server hang with the request!
  next()
})

router.use('/', (req, res, next) => {
  console.log(`The message is ${req.message}`)
  next()
})

// We take advantage of controllers, which hold the logic for the desired action that matches the specific route.
router.get('/', expenseController.listExpenses)
router.get('/:id', expenseController.getExpense)

// Middlewares can also be declared like functions and passed into a router handler.
const myMiddleWare = (req, res, next) => {
  console.log('Getting a secret!')
  next()
}

// Just to stress, we have the ability to customize our controllers and routes. We are not forced to follow any rules.
// If a client requests '/expenses/secrets/secret' then our secret function will run from our controller.
router.get('/secrets/secret', myMiddleWare, expenseController.mySecretFunction)

// Different actions exist other than get, post occurs when a client wants to make new data.
router.post('/', expenseController.createExpense)

// Put is used for updating data.
router.put('/:id', expenseController.updateExpense)

// Delete is self explanatory.
router.delete('/:id', expenseController.deleteExpense)

module.exports = router
