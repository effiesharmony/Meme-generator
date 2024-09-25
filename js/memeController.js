'use strict'

function renderMeme() {
    const meme = getMeme()
    
    const elImg = document.querySelector(`.img${meme.selectedImgId}`)
    elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawText(meme.lines[0].txt, 225, 20)
    }
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
    renderGallery()
    gCanvas = document.querySelector('.canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
    renderInput()
}

function renderInput() {
    const elInput = document.querySelector('.text-input')
    elInput.addEventListener('input', (event) => {
        setLineTxt(event.target.value)
        renderMeme()
    })
}
