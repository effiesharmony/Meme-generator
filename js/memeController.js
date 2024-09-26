'use strict'
function onInit() {
    renderGallery()
    gCanvas = document.querySelector('.canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme() {
    const meme = getMeme()
    const elImg = document.querySelector(`.img${meme.selectedImgId}`)
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawText(meme.lines[0].txt, 225, 40)
    drawText(meme.lines[1].txt, 225, 400)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[0].strokeColor
    gCtx.fillStyle = gMeme.lines[0].fillColor
    gCtx.font = `${gMeme.lines[0].size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function renderInput() {
    const elInput = document.querySelector('.text-input')
    elInput.addEventListener('input', (event) => {
        setLineTxt(event.target.value)
        renderMeme()
    })
}

function onShowEditor() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
}

function onFontIncrease() {
    fontBigger()
    renderMeme()
}

function onFontDecrease() {
    fontSmaller()
    renderMeme()
}