const left = document.querySelector(".left")
const right = document.querySelector(".right")
const main = document.querySelector(".main")
var index = 0

console.log(document.querySelector(".left"))

function add() {
    if (index < 1) {
        index = 2
    } else {
        index--
    }
}

function desc() {
    if (index > 1) {
        index = 0
    } else {
        index++
    }
}

function position() {
    main.style.left = (index * -100) + "%"
}

left.addEventListener("click", () => {
    add()
    position()
    console.log(index)
})
right.addEventListener("click", () => {
    desc()
    position()
    console.log(index)
})
