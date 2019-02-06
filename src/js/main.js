
const Poller = require('./Poller')
const SpotifyController = require('./SpotifyController')
const HueController = require('./HueController')

let spotifyWrapper = new SpotifyController()
let hueWrapper = new HueController('needs', 'actual value')

//spotifyWrapper.authenticateSpotify()

//new poller with 2 second timeout
let poller = new Poller(2000)

// Wait till the timeout sent our event to the EventEmitter
poller.onPoll(() => {
    console.log('polling');
    let spotifyApi = spotifyWrapper.exposeSpotifyApi()
    spotifyApi.setAccessToken('BQCS-RMgxSAfbE-67FN15LeubGcjI68NWeHXzzWe3yyHR0mtHNXsBxpwK5zZNgzw5xLtclQbdorYRIQPXXXOtFehsKxekUf0e7vmqDZBuzhgOTcJHV3GDfk5G5n6sXUHfXG5PlQyvzEayGlbKhEENiCWlf0')
    spotifyApi.getMyCurrentPlayingTrack().then(
        hueWrapper.processColors(data),
        (err) => {
            console.err(err)
        }
    )

    poller.poll(); // Go for the next poll
});

// Initial start
poller.poll();

function getCIEColor(color) {
    var r = color[0]
    var g = color[1]
    var b = color[2]

    return rgb_to_cie(r, g, b)
}

function getPaletteFromUrl(imageUrl, callback) {
    sourceImage = document.createElement('img')
    sourceImage.crossOrigin = 'Anonymous'
    var thief = new ColorThief()
    sourceImage.src = imageUrl
    sourceImage.onload = function () {
        callback(thief.getPalette(sourceImage, 5, 5))
    };
}

function setLamp(x, y, lightNumber) {
    var myX = Number(x)
    var myY = Number(y)
    var hubIP = '192.168.1.219'
    var username = '974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv'
    var URL = 'http://' + hubIP + '/api/' + username + '/lights/' + lightNumber + '/state'
    var dataObject = { 'on': true, 'sat': 254, 'bri': 254, 'xy': [myX, myY] }

    $.ajax({
        url: URL,
        type: 'PUT',
        data: JSON.stringify(dataObject),
        contentType: 'application/json'
    })
}