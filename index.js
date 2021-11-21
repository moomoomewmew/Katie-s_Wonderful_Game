/////
/*==============variables================*/
const allSquares = document.querySelectorAll('.light-square')
let activePlayer
let player = 'red-player'
/*==============This sets up the board===============*/
for (let i = 0; i < 12; i++) {
    allSquares[i].classList.add('black')
}
for (let i = 20; i < allSquares.length; i++) {
    allSquares[i].classList.add('red')
}

let reds = document.querySelectorAll('.red')
let blacks = document.querySelectorAll('.black')


/*==============to switch turns================*/
// const changeClass = (e) => {
//     console.log(e.currentTarget.id)
//     e.currentTarget.classList.add(`${player}`)
//   }

// for (let i = 0; i < allSquares.length; i++) {
//     allSquares[i].addEventListener('click', changeClass)
// }

/*===============to make a move=================*/

if (player === 'red-player') {
    const reSelectRed = (e) => {
        const activeRed= document.querySelector('.active-red')
        activeRed.classList.remove('active-red')
    }
    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener('click', reSelectRed)
    }
    const selectRed = (e) => {
        e.currentTarget.classList.add('active-red') 
        player = 'active-red-player'
    }
    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener('click', selectRed)
    } 

} else if (player === 'black-player'){
    const reSelectBlack = (e) => {
        const activeBlack= document.querySelector('.active-black')
        activeBlack.classList.remove('active-black')
    }
    for (let i = 0; i < blacks.length; i++) {
        blacks[i].addEventListener('click', reSelectBlack)
    }
    
    const selectBlack = (e) => {
        e.currentTarget.classList.add(`active-black`) 
    }
    for (let i = 0; i < blacks.length; i++) {
        blacks[i].addEventListener('click', selectBlack)
    }
}

// if (player === 'active-red-player'){
//     const moveRed = (e) => {
//         const activeRed= document.querySelector('.active-red')
//         activeRed.classList.remove('active-red', 'red')
//         e.currentTarget.classList.add('red')
//     }
//     for (let i = 0; i < reds.length; i++) {
//         reds[i].addEventListener('click', moveRed)
//     }
// }








// if (player === '.active-red-player') {
//     const moveRedPiece = (e) => {
//         // e.currentTarget.classList.add('reds')
//         // console.log(e.currentTarget)
//         // 
//         // console.log(e.currentTarget)

