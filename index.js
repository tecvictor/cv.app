const express = require('express')
const app = express ()
const path = require('path')


app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get ('/', async (req, res) => {
    res.render('home')
})

app.get ('/education', async (req, res) => {
    res.render('education')
})

app.get ('/experience', async (req, res) => {
    res.render('experience')
})

app.get ('/certifications', async (req, res) => {
    res.render('certifications')
})


app.listen (3000, err => {
    if (err) {
        console.log ("Não foi possível iniciar")
    }
    else {
        console.log ("Currículo On-line")
    }
})