const express = require('express')
const router = express.Router()

// A router is the exact same as app.get, the difference is we can use it as a middleware on a specific route for the app.
// Separating code like this is easier to edit later.

// Whichever path matches first is the one that gets sent back.
router.get('/', (req, res) => res.send('You are on the path /expenses'))
// Anything with a colon in front of it like ':id' means anything in its place will be sent into our function as req.params.id.
router.get('/:id', (req, res) => res.send(`You are on the path /expenses/${req.params.id}`))
router.get('/:id/:name', (req, res) => res.send(`You are on the path /expenses/${req.params.id}/${req.params.name}`))

module.exports = router
