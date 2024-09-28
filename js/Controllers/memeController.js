'use strict'
function onInit() {
    if(!localStorage.getItem('savedMemes')){
        localStorage.setItem('savedMemes', '{}')
    }
    renderGallery()
    listeners()
    gCanvas = document.querySelector('.canvas')
    gCtx = gCanvas.getContext('2d')
}

function listeners() {
    strokeColorListener()
    fillColorListener()
    renderInput()
}

function strokeColorListener() {
    const elColorPicker = document.querySelector('.stroke-color')
    elColorPicker.addEventListener("input", (event) => {
        setStrokeColor(event.target.value)
        renderMeme()
    })
}

function fillColorListener() {
    const elColorPicker = document.querySelector('.fill-color')
    elColorPicker.addEventListener("input", (event) => {
        setFillColor(event.target.value)
        renderMeme()
    })
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

function onTextAlign(alignment) {
    setTextAlign(alignment)
    renderMeme()
}

function drawText(line) {
    console.log(line)
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = line.textAlignment
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, line.posX, line.posY)
    gCtx.strokeText(line.txt, line.posX, line.posY)
}

function onChangeFont(){
    let selectedFont = document.getElementById('fonts').value
    changeFont(selectedFont)
    renderMeme()
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

    // gCtx.lineWidth = 1.5
    if (line.textAlignment === 'left') {
        gCtx.strokeRect(line.posX - 5, line.posY - (textHeight / 2), textWidth + 10, textHeight)//left
    } else if (line.textAlignment === 'center') {
        gCtx.strokeRect(line.posX - (textWidth / 2) - 5, line.posY - (textHeight / 2), textWidth + 10, textHeight)//center
    } else {
        gCtx.strokeRect(line.posX - (textWidth) - 5, line.posY - (textHeight / 2), textWidth + 10, textHeight)//right
    }
}

function onMouseClick(ev) {
    const { offsetX, offsetY, clientX, clientY } = ev

    const clickedLine = gMeme.lines.find(line => {
        let textWidth = gCtx.measureText(line.txt).width
        let textHeight = line.size * 1.286
        return (
            offsetX >= line.posX - (textWidth / 2) && offsetX <= line.posX + (textWidth / 2) &&
            offsetY >= line.posY - (textHeight / 2) && offsetY <= line.posY + (textHeight / 2)
        )
    })
    if (clickedLine) {
        gMeme.selectedLineIdx = gMeme.lines.indexOf(clickedLine)
        updateTextBox()
        renderMeme()
    }
}

function onAddLine() {
    addLine()
    renderMeme()
    updateTextBox()
}

function onLineUp() {
    lineUp()
    renderMeme()
}

function onLineDown() {
    lineDown()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    updateTextBox()
}

function updateTextBox() {
    const elTextInput = document.querySelector('.text-input')
    if (gMeme.lines[gMeme.selectedLineIdx].txt !== elTextInput.placeholder) {
        elTextInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
    } else {
        elTextInput.value = ''
    }
    const elSelectedFont = document.querySelector('.fonts')
    elSelectedFont.value = gMeme.lines[gMeme.selectedLineIdx].font
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
    document.querySelector('.memes').style.display = 'none'
    document.querySelector('.editor').style.display = 'grid'
}

function onFontIncrease() {
    fontBigger()
    renderMeme()
}

function onFontDecrease() {
    fontSmaller()
    renderMeme()
}