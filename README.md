# WebRTC Video Conferencing with simple-peer
A simple video conferencing example using simple-peer.
This project allows multiple devices to connect with eachother with audio and video using webrtc.
The package [simple-peer](https://github.com/feross/simple-peer) is used for webrtc.
The implementation of the signaling server is done with [socket.io](https://socket.io/)

## Demo
[Demo on heroku](https://dirvann-webrtc-video.herokuapp.com/)

## Running

run `npm install` and then `npm start` in the main directory.

Then open the browser at `localhost:3012` or `[your network ip/ public dns]:3012`.



## Configuration

Configurations can be found in `app.js` and `public/js/main.js`.

Replace the ssl certificates `ssl/key.pem` and `ssl/cert.pem` with your own.

