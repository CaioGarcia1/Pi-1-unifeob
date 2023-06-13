const {readFile, readFileSync} = require('fs');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const { exec } = require("child_process");
app.get('/', (req, res) => {
    readFile('./views/home.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('500, sorry')
        }
        res.send(html);
    })
});

app.get('/idade', (req, res) => {
    readFile('./views/idade.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('500, sorry')
        }
        res.send(html);
    })
});


app.get('/horario', (req, res) => {
    readFile('./views/horario.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('500, sorry')
        }
        res.send(html);
    })
});


app.listen(process.env.PORT || 3002, () => console.log('running'))