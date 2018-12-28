const express = require('express')
const app = express()
const host = '0.0.0.0'
const port = 3000

app.get('/', (req, res) => res.send('herrrro!'))

app.listen(port, host)
console.log(`Server is running on http://${host}:${port}`)