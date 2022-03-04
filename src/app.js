const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const httpolyglot = require('httpolyglot')
const https = require('https')

//////// CONFIGURATION ///////////

// insert your own ssl certificate and keys
app.use(cors({
    origin: '*'
}));
const options = {
    key: fs.readFileSync(path.join(__dirname,'..','ssl','key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname,'..','ssl','cert.pem'), 'utf-8')
}

const port = process.env.PORT || 3012

////////////////////////////

require('./routes')(app)

const httpsServer = httpolyglot.createServer(options, app)
const io = require('socket.io')(httpsServer)
require('./socketController')(io)


httpsServer.listen(port, () => {
    console.log(`listening on port ${port}`)
})





