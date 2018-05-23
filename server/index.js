// We must include express, now that we are outside the browser the rules change slightly. We must use node and npm to run our code.
const express = require('express')
const app = express()

// use our client folder to serve up our index page, we no longer using python server we are using our own server.
app.use(express.static(`${__dirname}/../client`))

// in the url bar the '/' corresponds to the root of the server, so a request to localhost:8000 will be directed to this route.
app.get('/', (req, res) => res.sendFile('index.html'))

// Add your own routes and send messages to the requester. A request to localhost:8000/hello will be directed to this route.
app.get('/hello', (req, res) => res.send('hello'))

// This allows the server to 'wake up' and get ready to respond to any incoming requests.
app.listen('8000', () => console.log('App listening on port 8000'))
