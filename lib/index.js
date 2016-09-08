const express = require('express')
const app = express()

const users = ['John', 'Betty', 'Hal']

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

module.exports = app
