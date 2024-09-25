'use strict'

let gCanvas
let gCtx

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text here',
            size: 20,
            strokeColor: 'black',
            fillColor: 'white'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(text){
    gMeme.lines[0].txt = text
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}














function onSelectImg(elImg) {
    gCtx.drawImg(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}