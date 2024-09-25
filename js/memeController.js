'use strict'

function renderMeme() {
    const meme = getMeme()
    const elImg = document.querySelector(`img${meme.id}`)
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawText('us.', 225, 20)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Impact'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onInit() {
    gCanvas = document.querySelector('.canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
}

// function onDraw(ev) {
//     const offsetX = ev.offsetX
//     const offsetY = ev.offsetY
//     drawText('Hello', offsetX, offsetY)
// }