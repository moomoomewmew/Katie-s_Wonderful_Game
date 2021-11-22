
/*==============variables================*/
const allSquares = document.querySelectorAll('.light-square')
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

const selectRed = (e) => {
    e.target.classList.add('active-red') 
    player = 'red-player'
    console.log(player)
}

const reSelectRed = (e) => {
    const activeRed = document.querySelector('.active-red')
    if (activeRed !== null) {
    activeRed.classList.remove('active-red')
    console.log(player) 
    }
}

const reSelectBlack = (e) => {
    const activeBlack= document.querySelector('.active-black')
    if (activeBlack !== null) {
        activeBlack.classList.remove('active-black')
        console.log(player) 
    }
}

const selectBlack = (e) => {
    e.target.classList.add(`active-black`) 
}

allSquares.forEach (currentSquare => {
    currentSquare.addEventListener('click', (e) =>{
        if (player === 'red-player' && e.target.classList.contains('red')) {   /*===============to make a move=================*/ //const gamePlay //while winning conditions havent been met, loop through gamePlay
        console.log('working')
        reSelectRed(e)
        selectRed(e)
        } else if (player === 'black-player' && e.target.classList.contains('black')){
            console.log('working')
        reSelectBlack(e)
        selectBlack(e)
        }
    
    })
})

//     else if (player === 'active-red-player') {
//         const reSelectRed = (e) => {
//             const activeRed = document.querySelector('.active-red')
//             activeRed.classList.remove('active-red')
//         }
//         for (let i = 0; i < reds.length; i++) {
//             reds[i].addEventListener('click', reSelectRed)
//         }
//         const selectRed = (e) => {
//             e.target.classList.add('active-red') 
//             player = 'black-player-start'
//             console.log(player)
//         }
//         for (let i = 0; i < reds.length; i++) {
//             reds[i].addEventListener('click', selectRed)
//         } 
//     }

//     else if (player === 'black-player-start') {
//         const selectBlack = (e) => {
//             e.target.classList.add('active-black') 
//             player = 'black-player'
//             console.log(player)
//         }
//         for (let i = 0; i < reds.length; i++) {
//             reds[i].addEventListener('click', selectBlack)
//         }
//     }
// // } else if (player === 'black-player') {
// //     for (let i = 0; i < blacks.length; i++) {
// //         blacks[i].addEventListener('click', reSelectBlack)
// //     }
    
// //     const selectBlack = (e) => {
// //         e.target.classList.add(`active-black`) 
// //     }
// //     for (let i = 0; i < blacks.length; i++) {
// //         blacks[i].addEventListener('click', selectBlack)
// //     }
// // 
// // } else if (player === 'active-black-player'){
// //     const reSelectBlack = (e) => {
// //         const activeBlack= document.querySelector('.active-black')
// //         activeBlack.classList.remove('active-black')
// //     }
// //     for (let i = 0; i < blacks.length; i++) {
// //         blacks[i].addEventListener('click', reSelectBlack)
// //     }
    
// //     for (let i = 0; i < blacks.length; i++) {
// //         blacks[i].addEventListener('click', selectBlack)
// //     }
// // }

