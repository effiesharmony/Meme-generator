'use strict'

let gCanvas
let gCtx

var gImgs = [{ id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] }]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text here',
            size: 20,
            color: 'black'
        }
    ]
}

function getMeme(){
    return gMeme
}


















function onSelectImg(elImg) {
    gCtx.drawImg(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}