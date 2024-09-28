'use strict'

function onShowSaved() {
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.memes').style.display = 'block'
    renderSavedMemes()
}

function onSaveMeme() {
    const dataUrl = gCanvas.toDataURL("image/jpeg")
    let savedMemes = localStorage.getItem('savedMemes')
    let memes = JSON.parse(savedMemes)
    memes[Object.keys(memes).length] = dataUrl
    localStorage.setItem('savedMemes', JSON.stringify(memes))
}

function renderSavedMemes() {
    const elSaved = document.querySelector('.saved-memes-list')
    let strHtml = ''
    const memes = JSON.parse(localStorage.getItem('savedMemes'))
    for(let key in memes){
        strHtml += `<li>
        <img src="${memes[key]}">
        </li>`
    }
    elSaved.innerHTML = strHtml
}