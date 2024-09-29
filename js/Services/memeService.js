'use strict'

let gCanvas
let gCtx
let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
}

function changeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function resetFirstLine() {
    gMeme.lines = [
        {
            txt: 'Enter text here',
            posX: gCanvas.width / 2,
            posY: 50,
            size: 40,
            strokeColor: 'black',
            fillColor: 'white',
            textAlignment: 'center',
            font: 'impact'
        },
    ]
    gMeme.selectedLineIdx = 0
    updateTextBox()
}

function getMeme() {
    return gMeme
}

function setTextAlign(alignment) {
    let line = gMeme.lines[gMeme.selectedLineIdx]
    line.textAlignment = alignment

    if (line.textAlignment === 'left') {
        line.posX = gCanvas.width - gCanvas.width * 0.95
    } else if (line.textAlignment === 'center') {
        line.posX = gCanvas.width / 2
    } else {
        line.posX = gCanvas.width - gCanvas.width * 0.05
    }
}

function getEvPos(ev) {

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        //* Prevent triggering the mouse screen dragging event
        ev.preventDefault()
        //* Gets the first touch point
        ev = ev.changedTouches[0]
        //* Calc the right pos according to the touch screen
        pos = {
            x: ev.clientX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.clientY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.pop(gMeme.lines[gMeme.selectedLineIdx])
    gMeme.selectedLineIdx--
    updateTextBox()
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}

function lineUp() {
    if (gMeme.lines[gMeme.selectedLineIdx].posY) gMeme.lines[gMeme.selectedLineIdx].posY -= 10
}

function lineDown() {
    if (gMeme.lines[gMeme.selectedLineIdx].posY < gCanvas.height) {
        gMeme.lines[gMeme.selectedLineIdx].posY += 10
    }
}

function addEmoji(emoji) {
    gMeme.lines.push(
        {
            txt: emoji,
            posX: gCanvas.width / 2,
            posY: gCanvas.height / 2,
            size: 50,
            textAlignment: 'center'
        }
    )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function addLine() {
    if (gMeme.lines.length === 0) {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: gCanvas.width / 2,
                posY: 50,
                size: 40,
                strokeColor: 'black',
                fillColor: 'white',
                textAlignment: 'center',
                font: 'impact'
            }
        )
    } else if (gMeme.lines.length === 1) {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: gCanvas.width / 2,
                posY: gCanvas.height - 50,
                size: 40,
                strokeColor: 'black',
                fillColor: 'white',
                textAlignment: 'center',
                font: 'impact'
            }
        )
    } else {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: gCanvas.width / 2,
                posY: gCanvas.height / 2,
                size: 40,
                strokeColor: 'black',
                fillColor: 'white',
                textAlignment: 'center',
                font: 'impact'
            }
        )
    }
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function fontBigger() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2
}

function fontSmaller() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color

}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    const elImg = document.querySelector(`.img${gMeme.selectedImgId}`)
    const aspectRatio = elImg.naturalWidth / elImg.naturalHeight
    gCanvas.width = 500
    gCanvas.height = gCanvas.width / aspectRatio
}

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}