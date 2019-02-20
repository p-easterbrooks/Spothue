const ColorConverter = require('./color-converter')
const ColorThief = require('./color-thief')
const Cookies = require('js-cookie')
const HueConfig = require('node-hue-api')
const hue = new HueConfig.HueApi()
const _findOrCreateUser = Symbol('findOrCreateUser')
const timeout = 2000
var imgUrl

/**
 * Provides a wrapper for Philips Hue-related business logic
 */
class HueWrapper {    
    constructor(hubUser, hubIp) {
        this.hubUser = hubUser
        this.hubIp = hubIp
    }

    init(callback) {        
        if (this.hueIp === undefined) {
            HueConfig.nupnpSearch().then((bridge) => {
                if (Array.isArray(bridge) && bridge.length) {
                    console.log(bridge[0].ipaddress)
                    this.hubIp = bridge[0].ipaddress
                    this[_findOrCreateUser]()
                } else {
                    Promise.all([Hue.upnpSearch(timeout), this[_findOrCreateUser]()])
                        .then((results) => {
                            this.hubIp = results[0].ipaddress;
                            callback()
                        }
                    )
                }
            })
        }
    }

    [_findOrCreateUser]() {
        if (this.hubUser === undefined) {
            //find
            let cookieUser = Cookies.get('hubUser')
            if (cookieUser !== undefined) {
                this.hubUser = cookieUser  
            } 

            //create
            console.log('About to register user. Hub IP is: ' + this.hubIp)        
            hue.registerUser(this.hubIp, 'Spotihue').then((user) => {
                console.log('New user registered: ' + user)
                this.hubUser = user
                Cookies.set('hubUser', this.hubUser)
            })
            .fail((err) => {
                console.log("Please press your hub's link button")
            })
            .done()          
        }
    }

    processColors (data) {
        if (data.item.album.images[1].url !== imgUrl) {
            console.log('NEW IMAGE')
            imgUrl = data.item.album.images[1].url
    
            $('.bg-image-blur, .bg-image').fadeTo(375, 0, function () {
                $(this).css('background-image', 'url(\'' + this.imgUrl + '\')')
            }).fadeTo(375, 1)
    
            console.log("URL IS: " + imgUrl)
            this.getPaletteFromUrl(imgUrl, (palette) => {
                this.processPalette(palette)
            })
        }
    }

    getPaletteFromUrl(imageUrl, callback) {
        console.log("PALETTE URL IS: " + imageUrl)
        let sourceImage = document.createElement('img')
        sourceImage.crossOrigin = 'Anonymous'
        var thief = new ColorThief()
        sourceImage.src = imageUrl
        sourceImage.onload = function () {
          callback(thief.getPalette(sourceImage, 5, 5))
        };
    }

    setLamp(x, y, lightNumber) {
        let myX = Number(x)
        let myY = Number(y)
        let URL = 'http://' + this.hubIp + '/api/' + this.hubUser + '/lights/' + lightNumber + '/state'
        let dataObject = { 'on': true, 'sat': 254, 'bri': 254, 'xy': [myX, myY] }
    
        $.ajax({
            url: URL,
            type: 'PUT',
            data: JSON.stringify(dataObject),
            contentType: 'application/json'
        })
    }

    getCIEColor(color) {
        let r = color[0]
        let g = color[1]
        let b = color[2]
    
        return ColorConverter.rgb_to_cie(r, g, b)
    }

    processPalette(palette) {
        let primaryColor = palette[0]
        let secondaryColor = palette[1]

        let lampCIEColor = this.getCIEColor(primaryColor)

        //set color on ambiance light
        this.setLamp(lampCIEColor[0], lampCIEColor[1], 3)

        //set colors on UI
        $('#title').css('color', 'rgb(' + primaryColor[0] + ',' + primaryColor[1] + ',' + primaryColor[2] + ')')
        $('body').css('backgroundColor', 'rgb(' + secondaryColor[0] + ',' + secondaryColor[1] + ',' + secondaryColor[2] + ')')
    }

}

module.exports = HueWrapper
