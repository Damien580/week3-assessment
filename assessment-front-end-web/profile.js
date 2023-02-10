const favColor = evt => {
    alert("Green")
}

const favPlace = evt => {
    alert("Far and Away")
}

const favRitual = evt => {
    alert("Putting on a soft sweater and some warm socks, then applying peanut butter pants, and then running from the stray dogs in my neighborhood.")
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)
