'use strict'

let gSavedMemes = []

function loadFromStorage(key){
    const strValue = localStorage.getItem(key)
    return JSON.parse(strValue)
}