const ColorConverter = require('./color-converter')
const ColorThief = require('./color-thief')
const Cookies = require('js-cookie')
const HueConfig = require('node-hue-api')
const hue = new HueConfig.HueApi()
const _findOrCreateUser = Symbol('findOrCreateUser')
const timeout = 2000
const chalk = require('chalk')
var imgUrl

/**
 * Provides a wrapper for Philips Hue-related business logic
 */
class HueWrapper {    
    constructor(hubIp, hubUser) {
        this.hubUser = hubUser
        this.hubIp = hubIp
        this.init(() => console.log('good init'))
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
                $(this).css('background-image', 'url(\'' + imgUrl + '\')')
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

    setLamp(color, lightNumber) {
        let r = color[0];
        let g = color[1];
        let b = color[2];
    
        let cieColor = ColorConverter.rgb_to_cie(r, g, b)
    
        let myX = Number(cieColor[0])
        let myY = Number(cieColor[1])
        let URL = `https://${this.hubIp}/api/${this.hubUser}/lights/${lightNumber}/state`
    
        let dataObject = { 'on': true, 'sat': 254, 'bri': 254, 'xy': [myX, myY] }

        console.log(chalk.bold.rgb(r, g, b)('COLOR') + ` XY: ${ColorConverter.rgb_to_cie(r, g, b)}`)
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
        var primaryColor = palette[0]
        console.log(primaryColor)
        var secondaryColor = palette[1]
        var tertiaryColor = palette[2]
    
        //set colors on lights
        this.setLamp(primaryColor, 3);
        this.setLamp(secondaryColor, 7);
        this.setLamp(tertiaryColor, 8);

        //set colors on UI
        $('#title').css('color', 'rgb(' + primaryColor[0] + ',' + primaryColor[1] + ',' + primaryColor[2] + ')')
        $('body').css('backgroundColor', 'rgb(' + secondaryColor[0] + ',' + secondaryColor[1] + ',' + secondaryColor[2] + ')')
    }

}

module.exports = HueWrapper
