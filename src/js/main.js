
const Poller = require('./Poller')
const SpotifyWrapper = require('./SpotifyWrapper')
const HueWrapper = require('./HueWrapper')

let spotifyWrapper = new SpotifyWrapper()
let hueWrapper = new HueWrapper('192.168.1.219', '974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv')

//spotifyWrapper.authenticate()

//new poller with 2 second timeout
let poller = new Poller(2000)

// Wait till the timeout sent our event to the EventEmitter
poller.onPoll(() => {
    console.log('polling');
    let spotifyApi = spotifyWrapper.exposeSpotifyApi()
    spotifyApi.setAccessToken('BQB7XNYydnoC1bs-LDPEKGDLEtWfwwP-Zi-fe1tRsx4ok3Mky-62aK4fCiP4SOathNLqqn9fJOla-M-PfKED3ec3Vscl8Iok_xjml9ACRy_AsNJ2vU7f89id1trYXuDg-b0i17gILV0cP1FsfmTMJQs-riQ')
    spotifyApi.getMyCurrentPlayingTrack().then(
        (data) => hueWrapper.processColors(data),
        (err) => console.error(err)
    )

    poller.poll(); // Go for the next poll
});

// Initial start
poller.poll();
