const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const colors = [
0, 1, 2,
3, 4, 5,
5, 7, 8,
9, 'A', 'B',
'C', 'D', 'E',
'F']

btn.addEventListener('click', () => {
    let hex = '#'

    for (let i = 0; i < 6; i++) {
        hex += colors[randomColor()]
    }       

    color.innerText = hex
    document.body.style.backgroundColor = hex

})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}