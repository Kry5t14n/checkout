const express = require('express')
const app = express()
port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port)