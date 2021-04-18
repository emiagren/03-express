const express = require('express')
const app = express()
// "app" borde egentligen heta "server" men vi följer det som står i officiella dokumentationen

const frontend = require('./routes/frontend.js')
const guestbook = require('./routes/guestbook.js')
const animals = require('./routes/animals.js')

const PORT = 1337

// middleware läggs alltid FÖRE endpoints
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// endpoints/resurser/routes


// hanterar resursen "web root" - request och response
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Yes I am here')
})

app.get('/secret', (req, res) => {
	console.log('GET /secret');
	res.send('You have found the secret route!')
})

app.use('/frontend', frontend)

app.use('/guestbook', guestbook)

app.use('/animals', animals)

// starts the server
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})

console.log('This file is done');