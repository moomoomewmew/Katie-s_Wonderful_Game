
/*==============variables================*/
const allSquares = document.querySelectorAll('.light-square')
let player = 'x'

/*==============This sets up the board===============*/
if (player = 'x') {
    for (let i = 0; i < 12; i++) {
        allSquares[i].classList.add('black')
    }
    for (let i = 20; i < allSquares.length; i++) {
        allSquares[i].classList.add('red')
    }

    let reds = document.querySelectorAll('.red')
    let blacks = document.querySelectorAll('.black')
    
    const selectRed = (e) => {
        e.target.classList.add('active-red') 
        player = 'red-player'
        console.log(player)
    }
    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener('click', selectRed)
    }
}

//const gamePlay //while winning conditions havent been met, loop through gamePlay
/*===============to make a move=================*/
if (player === 'red-player') {
    const reSelectRed = (e) => {
        const activeRed = document.querySelector('.active-red')
        activeRed.classList.remove('active-red')
    }
    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener('click', reSelectRed)
    }
    const selectRed = (e) => {
        e.target.classList.add('active-red') 
        player = 'active-red-player'
        console.log(player)
    }
    for (let i = 0; i < reds.length; i++) {
        reds[i].addEventListener('click', selectRed)
    } 
}

// else if (player === 'active-red-player') {
//     const reSelectRed = (e) => {
//         const activeRed = document.querySelector('.active-red')
//         activeRed.classList.remove('active-red')
//     }
//     for (let i = 0; i < reds.length; i++) {
//         reds[i].addEventListener('click', reSelectRed)
//     }
//     const selectRed = (e) => {
//         e.target.classList.add('active-red') 
//         player = 'active-red-player'
//         console.log(player)
//     }
//     for (let i = 0; i < reds.length; i++) {
//         reds[i].addEventListener('click', selectRed)
//     } 
// }

// else if (player === 'active-red-player') {
//     const reSelectRed = (e) => {
//         const activeRed= document.querySelector('.active-red')
//         activeRed.classList.remove('active-red')
//     }
//     for (let i = 0; i < reds.length; i++) {
//         reds[i].addEventListener('click', reSelectRed)
//     }
//     const selectRed = (e) => {
//         e.target.classList.add('active-red') 
//         player = 'black-player'
//     }
//     for (let i = 0; i < reds.length; i++) {
//         reds[i].addEventListener('click', selectRed)
//     } 

// } else if (player === 'black-player'){
//     const reSelectBlack = (e) => {
//         const activeBlack= document.querySelector('.active-black')
//         activeBlack.classList.remove('active-black')
//     }
//     for (let i = 0; i < blacks.length; i++) {
//         blacks[i].addEventListener('click', reSelectBlack)
//     }
    
//     const selectBlack = (e) => {
//         e.target.classList.add(`active-black`) 
//     }
//     for (let i = 0; i < blacks.length; i++) {
//         blacks[i].addEventListener('click', selectBlack)
//     }
// }
// } else if (player === 'active-black-player'){
//     const reSelectBlack = (e) => {
//         const activeBlack= document.querySelector('.active-black')
//         activeBlack.classList.remove('active-black')
//     }
//     for (let i = 0; i < blacks.length; i++) {
//         blacks[i].addEventListener('click', reSelectBlack)
//     }
    
//     const selectBlack = (e) => {
//         e.target.classList.add(`active-black`) 
//     }
//     for (let i = 0; i < blacks.length; i++) {
//         blacks[i].addEventListener('click', selectBlack)
//     }
// }

