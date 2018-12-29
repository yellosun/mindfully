const express = require('express')
const app = express()
const host = '0.0.0.0'
const port = process.env.PORT || 3000

const router = express.Router()
app.use('/api', router)

app.listen(port, host)
console.log(`Magic happens on http://${host}:${port}`)

// API Routes

router.get('/', (req, res) => {
	res.json({message: 'herro dis is ma api'})
})

