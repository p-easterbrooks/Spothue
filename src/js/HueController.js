const ColorConverter = require('./color-converter')
const ColorThief = require('./color-thief')

class HueController {
    constructor(hubIp, hubUser) {
        this.hubIp = hubIp
        this.hubUser = hubUser
        this.imgUrl = ''
    }

    processColors (data) {
        if (data.item.album.images[1].url !== this.imgUrl) {
            console.log('NEW IMAGE')
            this.imgUrl = data.item.album.images[1].url
    
            $('.bg-image-blur, .bg-image').fadeTo(375, 0, function () {
                $(this).css('background-image', 'url(\'' + this.imgUrl + '\')')
            }).fadeTo(375, 1)
    
            this.getPaletteFromUrl(this.imgUrl, (palette) => this.processPalette(palette))
        }
    }

    getPaletteFromUrl(imageUrl, callback) {
       //create canvas and image
        let img = new Image()
        img.src = imageUrl
        img.crossOrigin = 'Anonymous'

        img.onload = () => callback(new ColorThief().getPalette(img, 4, 2))
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

module.exports = HueController
