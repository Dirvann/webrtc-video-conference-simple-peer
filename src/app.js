const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const httpolyglot = require('httpolyglot')
const https = require('https')

//////// CONFIGURATION ///////////

// insert your own ssl certificate and keys
const options = {
    key: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'cert.pem'), 'utf-8')
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
const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');

const video = document.getElementById('video');
const mode_btn = document.getElementById('btn_mod');

const local_default = document.querySelector(".local");
const local_360 = document.querySelector(".local_360");
const remote_default = document.querySelector(".remoute_video");


mode_btn.onclick = () => {
    mod = !mod;
    console.log(mod);
    if (mod) {
        local_default.style.display = "none";
        remote_default.style.display = "none";
        local_360.style.display = "block";
        local_360.querySelector('video').style.display = "block";
    }
    else {
        local_default.style.display = "block";
        remote_default.style.display = "block";
        local_360.style.display = "none";
    }
}
AFRAME.registerComponent('play-video', {
    schema: {
        target: { type: 'selector' },
        src: { type: 'string' },
        on: { default: 'click' },
    },

    multiple: true,

    init: function () {
        var data = this.data;

        this.el.addEventListener(data.on, function () {
            data.target.setAttribute('src', data.src);
            data.target.components.material.material.map.image.play();
        });
    }
});



