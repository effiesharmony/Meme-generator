'use strict'

var gImgs = []
createImg()

function createImg() {
    for (let i = 1; i <= 18; i++) {
        gImgs.push({ id: i, url: `img/${i}.jpg` })
    }
}
