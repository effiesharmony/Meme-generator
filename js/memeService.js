'use strict'

let gCanvas
let gCtx

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text here',
            posX: '224',
            posY: '40',
            size: 40,
            strokeColor: 'black',
            fillColor: 'white'
        },
    ]
}

function getMeme() {
    return gMeme
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
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}

function addLine() {
    if (gMeme.lines.length === 0) {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: '224',
                posY: '40',
                size: 40,
                strokeColor: 'black',
                fillColor: 'white'
            }
        )
    } else if (gMeme.lines.length === 1) {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: '224',
                posY: '400',
                size: 40,
                strokeColor: 'black',
                fillColor: 'white'
            }
        )
    } else {
        gMeme.lines.push(
            {
                txt: 'Enter text here',
                posX: '224',
                posY: '224',
                size: 40,
                strokeColor: 'black',
                fillColor: 'white'
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

function setStrokeColor() {
    // gMeme.lines[gMeme.selectedLineIdx].strokeColor = 
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