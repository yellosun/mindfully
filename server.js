const express = require('express')
const db = require('./db/models/index.js')
const app = express()
const host = '0.0.0.0'
const port = process.env.PORT || 3000

const router = express.Router()
app.use('/api', router)

app.listen(port, host)
console.log(`Magic happens on http://${host}:${port}`)

// API Routes

router.get('/', async (req, res) => {
	let r = await db.Quote.findAll()
	res.json(r)
})

router.get(`/author/:author`, async (req, res) => {
	let r = await db.Quote.findAll()
	let a = r.filter(q => {
		let str = q.author.replace(/\s/g, '-').toLowerCase()
		let auth = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		return auth === req.params.author
	})
	res.json(a)
})

router.get('/category/:category', async (req, res) => {
	let r = await db.Quote.findAll()
	let c = r.filter(q=> {
		return q.category === req.params.category
	})
	res.json(c)
})