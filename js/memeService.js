'use strict'

let gCanvas
let gCtx

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text here',
            size: 40,
            strokeColor: 'black',
            fillColor: 'white'
        },

        {
            txt: 'Enter text here',
            size: 40,
            strokeColor: 'black',
            fillColor: 'white'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text
}

function fontBigger() {
    gMeme.lines[0].size += 2
}

function fontSmaller() {
    gMeme.lines[0].size -= 2

}

function setStrokeColor() {
    // gMeme.lines[0].strokeColor = 
}

function setFillColor() {

}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    // const elImg = document.querySelector(`.img${imgId}`)
    // gCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gCanvas.width
    // gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

// function onSelectImg(elImg) {
//     console.log(gCanvas.height)
//     gCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gCanvas.width
//     gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
//     gCtx.drawImg(elImg, 0, 0, img.naturalWidth.width, img.naturalHeight.height)
// }

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}