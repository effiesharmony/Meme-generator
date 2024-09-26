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
    gMeme.lines.forEach(line => {
        drawText(line)
    })
    if (gMeme.lines.length > 0) drawTextFrame()
}

function drawText(line) {
    gCtx.textAlign = 'left'
    gCtx.textBaseline = 'top'
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, line.posX, line.posY)
    gCtx.strokeText(line.txt, line.posX, line.posY)
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function drawTextFrame() {
    // gCtx.beginPath()
    let line = gMeme.lines[gMeme.selectedLineIdx]
    let textWidth = gCtx.measureText(line.txt).width
    let textHeight = line.size * 1.286
    gCtx.strokeStyle = 'white'

    gCtx.lineWidth = 1.5
    gCtx.strokeRect(line.posX - (textWidth / 2) - 5, line.posY - (textHeight / 2), textWidth + 10, textHeight)
}

function onAddLine() {
    addLine()
    renderMeme()
    const elTextInput = document.querySelector('.text-input')
    elTextInput.value = ''
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    const elTextInput = document.querySelector('.text-input')
    if (gMeme.lines[gMeme.selectedLineIdx].txt !== elTextInput.placeholder) {
        elTextInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
    } else {
        elTextInput.value = ''
    }
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