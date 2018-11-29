var imgUrl

(function poll () {
    $.ajax({
        url: 'https://api.spotify.com/v1/me/player/currently-playing',
        beforeSend: function (request) {
            request.setRequestHeader('Authorization', 'Bearer BQBC1ysqKKV25fv3GkOaBzWefV0x1fA4Ti4QU3DHjLSZHjGfdz3L70koADqvSaAaL4J119r0d0f39y_jHUhGOVojxzLYAPDdhWuBlsa5lHVVAjbR2RS1Fqtn06RX5dhy8CU93R57P95WEyNal-pDyQDMU0Y')
        },
        type: 'GET',
        success: function (data) {
            console.log('polling')
            if (data.item.album.images[1].url !== imgUrl) {
                console.log('NEW IMAGE')
                imgUrl = data.item.album.images[1].url

                $('.bg-image-blur, .bg-image').fadeTo(375, 0, function () {
                  $(this).css('background-image', 'url(\'' + imgUrl + '\')')
              }).fadeTo(375, 1)

                getPaletteFromUrl(imgUrl, function (palette) {
                        var primaryColor = palette[0]
                        var secondaryColor = palette[1]

                        var lampCIEColor = getCIEColor(primaryColor)

                        //set color on ambiance light
                        setLamp(lampCIEColor[0], lampCIEColor[1], 3)

                        //set colors on UI
                        $('#title').css('color', 'rgb(' + primaryColor[0] + ',' + primaryColor[1] +',' + primaryColor[2] + ')')
                        $('body').css('backgroundColor', 'rgb(' + secondaryColor[0] + ',' + secondaryColor[1] +',' + secondaryColor[2] + ')')
                })
            }
        },
        dataType: 'json',
        complete: setTimeout(function () { poll() }, 2000),
        timeout: 1000
    })
})()

function getCIEColor (color) {
    var r = color[0]
    var g = color[1]
    var b = color[2]

    return rgb_to_cie(r, g, b)
}

function getPaletteFromUrl (imageUrl, callback) {
    sourceImage = document.createElement('img')
    sourceImage.crossOrigin = 'Anonymous'
    var thief = new ColorThief()
    sourceImage.src = imageUrl
    sourceImage.onload = function () {
      callback(thief.getPalette(sourceImage, 5, 5))
    };
}

function setLamp (x, y, lightNumber) {
  var myX = Number(x)
  var myY = Number(y)
  var hubIP = '192.168.1.219'
  var username = '974DELC9EApDxKHu3W5P2fjMCE7YWbrM2LmVRoJv'
  var URL = 'http://' + hubIP + '/api/' + username + '/lights/' + lightNumber + '/state'
  var dataObject = {'on': true, 'sat': 254, 'bri': 254, 'xy': [ myX, myY]}

  $.ajax({
      url: URL,
      type: 'PUT',
      data: JSON.stringify(dataObject),
      contentType: 'application/json'
  })
}
