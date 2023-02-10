const restaurants = ['Perry\'s', 'Firebirds', 'Horizon 76', 'Maria Cuca\'s', 'Sushi Street']

const randoms = arr =>{
     Math.floor(Math.random() * arr.length)
     return randoms
    }
    alert(randoms)
    
let button = document.querySelector('resto')

button.addEventListener('click', randoms)



