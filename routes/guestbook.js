const express = require('express')
const router = express.Router()

let visitorCount = 0
function getGuestbook(req, res) {
	console.log('GET /guestbook');
	visitorCount++
	res.status(200).send(`Du är besökare nummer ${visitorCount}`)
}

router.get('/', getGuestbook)

module.exports = router