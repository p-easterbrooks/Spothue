var Spotify = require('spotify-web-api-js')
var spotifyApi = new Spotify()

class SpotifyWrapper {
    authenticate () {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split('=')
                    initial[parts[0]] = decodeURIComponent(parts[1])
                }
                return initial
            }, {})
        window.location.hash = ''
    
        // Set token
        let _token = hash.access_token
    
        const authEndpoint = 'https://accounts.spotify.com/authorize'
        const clientId = '451b6dddb0b24b1cbad3e071aa8fe9d0'
        const redirectUri = location.href
        const scopes = [
            'user-read-currently-playing',
            'user-read-playback-state'
        ]
        // If there is no token, redirect to Spotify authorization
        if (!_token) {
            window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
        }
    
        spotifyApi.setAccessToken(_token)
    }

    exposeSpotifyApi () {
        return spotifyApi
    }
}

module.exports = SpotifyWrapper
