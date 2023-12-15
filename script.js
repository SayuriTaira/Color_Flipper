const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const colors = [
"magenta", "chocolate", "darkpurple", "lime", "violet",
"deepskyblue", "darkorange", "lightpink", "royalblue", "darkgreen",
"yellow", "crimson", "lightyellow", "saddlebrown", "cyan",
"gold", "pink", "lemonchiffon", "skyblue", "sienna",
"firebrick", "lavender", "green", "darkgray", "teal",
"blue", "hotpink", "gray", "darkred", "springgreen",
"orange", "black", "purple", "aqua", "white",
"seagreen", "coral", "red", "brown", "moccasin",
"white", "lightcoral", "peru", "fuchsia", "lightgray",
"royalblue", "dodgerblue"
]

btn.addEventListener('click', () => {
    const randomNumber = randomColor()
    document.body.style.backgroundColor = colors[randomNumber]
    color.innerText = colors[randomNumber]
})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}