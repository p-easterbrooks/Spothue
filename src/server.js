//imports
const http = require('http')
const port = 3000
const request = require('request')
const Poller = require('./Poller')
const ColorThief = require('./color-thief')
const ColorConverter = require('./color-converter')
const chalk = require('chalk');
var Image = require('canvas').Image

//global var
var imgUrl

//TODO handle client requests
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end()
}

//server
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad ${port} happened', err)
    }
    console.log(`server is listening on ${port}`)

    //new poller with 2 second timeout
    let poller = new Poller(2000)

    // Wait till the timeout sent our event to the EventEmitter
    poller.onPoll(() => {
        console.log('polling');

        const options = {
            url: 'https://api.spotify.com/v1/me/player/currently-playing',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQDKLhs0e4MUX0ue1s8naIM4dOLdpG1RqqAuojgVNOmTWrQp2SAlYLy1mIGSL65f-FkQvwTu-2kwzmL_Bex5YxgZvKwzTtFKUsxpuNdTVBGf9g9hyuqVylJDiyDQwMKoSGeAAykBh0J4jlnziPmSIUvqn9c'
            }
        };
        request(options, doAction)

        poller.poll(); // Go for the next poll
    });

    // Initial start
    poller.poll();
})

function doAction(error, response, body) {
    const data = JSON.parse(body)
    if (data.item.album.images[1].url !== imgUrl) {
        console.log('NEW IMAGE')
        imgUrl = data.item.album.images[1].url
        console.log(`imgUrl: ${imgUrl}`)
        getPaletteFromURL(imgUrl, processColors)
    }
}

function getPaletteFromURL(imageUrl, callback) {
    //create canvas and image
    var img = new Image()
    img.src = imageUrl
    img.crossOrigin = 'Anonymous'

    img.onload = () => callback(new ColorThief().getPalette(img, 4, 2))
}

function logColor(color) {
}

function processColors(palette) {
    var primaryColor = palette[0]
    var secondaryColor = palette[1]
    var tertiaryColor = palette[2]

    //set colors on lights
    setLamp(primaryColor, 3);
    setLamp(secondaryColor, 7);
    setLamp(tertiaryColor, 8);
}

function setLamp(color, lightNumber) {
    var r = color[0];
    var g = color[1];
    var b = color[2];

    let cieColor = ColorConverter.rgb_to_cie(r, g, b)

    var myX = Number(cieColor[0])
    var myY = Number(cieColor[1])
    var hubIP = '192.168.1.219'
    var username = '974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv'
    var URL = `http://${hubIP}/api/${username}/lights/${lightNumber}/state`

    const options = {
        json: true,
        body: { 'on': true, 'sat': 254, 'bri': 254, 'xy': [myX, myY] }
    }

    console.log(chalk.bold.rgb(r, g, b)('COLOR') + ` XY: ${ColorConverter.rgb_to_cie(r, g, b)}`)
    request.put(URL, options);
}
