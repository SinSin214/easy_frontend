const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.get('/homepage', (req, res) => {
    res.json({ sayHi: 'abcdef' })
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})