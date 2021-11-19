/*==============variables================*/
const allSquares = document.querySelectorAll('.light-square')
let player = 'red'
/*==============to start the game===============*/
for (let i = 0; i < 12; i++) {
    allSquares[i].classList.add('black')
}
for (let i = 20; i < allSquares.length; i++) {
    allSquares[i].classList.add('red')
}

let reds = document.querySelectorAll('.red')
/*==============to switch turns================*/
// const changeClass = (e) => {
//     console.log(e.currentTarget.id)
//     e.currentTarget.classList.add(`${player}`)
//   }

// for (let i = 0; i < allSquares.length; i++) {
//     allSquares[i].addEventListener('click', changeClass)
// }

/*===============to make a move=================*/
//select a token - onclick turn class:red to class:active-red
//click event on red squares to change click event to listen for a white tile to be clicked and change class of red tile and white tile
const redMove = (e) => {
    console.log(e.currentTarget)
    e.currentTarget.classList.add(`active-red`) 
  }

for (let i = 0; i < reds.length; i++) {
    reds[i].addEventListener('click', redMove)
}

// for (let i = currentTarget; i = -3, -4; i++) {
//     allSquares[i].classList.add('possibilities')
// }
