'usr strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery-list')
    let strHtml = ''
    gImgs.forEach(img => {
        strHtml += `<li class="li-img${img.id}">
        <img class="img${img.id}" src="img/${img.id}.jpg" onclick="onImgSelect('${img.id}'); onShowEditor()">
        </li>`
    })
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId){
        setImg(imgId)
        resetFirstLine()
        renderMeme()
}

function onShowGallery() {
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'block'
    // document.querySelector('.gallery-nav').style.display = 'block'
}