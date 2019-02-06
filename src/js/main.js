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