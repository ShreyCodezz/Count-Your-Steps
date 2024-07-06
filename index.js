let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count ++
    countEl.innerText = count
}
function decrement() {
    count --
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    count = 0
    countEl.innerText = count
}
