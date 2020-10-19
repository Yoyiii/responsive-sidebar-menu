const express = require('express')
const discord = require('discord.js')
const path = require('path')
const fs = require('fs')
const https = require('https')
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/posts', function(req, res) {
    res.sendFile(path.join(__dirname, 'posts.html'))
})

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    },
    app
)

sslServer.listen(3000, function() {
    console.log('Website Is Ready!')
})

const client = new discord.Client()

client.on('ready', () => {
    console.log('Bot Is Ready!')

})

client.login('')