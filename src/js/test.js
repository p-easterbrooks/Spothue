const HueWrapper = require('./HueWrapper')

var displayStatus = function(status) {
    console.log(JSON.stringify(status, null, 2));
};

let hue = new HueWrapper('5uP0ikzbZVzEcmfakTSgOxFH6QkaTlhwUZsYG24S')
hue.init(() => {
    console.log('User is ' + hue.hubUser)
    console.log('IP is ' + hue.hubIp)
})