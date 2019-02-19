
const Poller = require('./Poller')
const SpotifyWrapper = require('./SpotifyWrapper')
const HueWrapper = require('./HueWrapper')

let spotifyWrapper = new SpotifyWrapper()
let hueWrapper = new HueWrapper('192.168.1.219', '974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv')

spotifyWrapper.authenticate()

//new poller with 2 second timeout
let poller = new Poller(2000)

// Wait till the timeout sent our event to the EventEmitter
poller.onPoll(() => {
    console.log('polling');
    let spotifyApi = spotifyWrapper.exposeSpotifyApi()
    spotifyApi.getMyCurrentPlayingTrack().then(
        (data) => hueWrapper.processColors(data),
        (err) => console.error(err)
    )

    poller.poll(); // Go for the next poll
});

// Initial start
poller.poll();
