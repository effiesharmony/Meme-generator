'usr strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery-list')
    let strHtml = ''
    gImgs.forEach(img => {
        strHtml += `<li class="li-img${img.id}">
        <img class="img${img.id}" src="img/${img.id}.jpg">
        </li>`
    })
    elGallery.innerHTML = strHtml
}



