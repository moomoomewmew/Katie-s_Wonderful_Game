/*==============variables================*/
const allSquares = document.querySelectorAll('.light-square')
let red = document.querySelectorAll('.red')
let black = document.querySelectorAll('.black')
let activePlayer
let player = 'red-player'

/*==============This sets up the board===============*/
for (let i = 0; i < 12; i++) {
    allSquares[i].classList.add('black')
}
for (let i = 20; i < allSquares.length; i++) {
    allSquares[i].classList.add('red')
}
const allTokens = document.querySelectorAll('.black, .red')
for (let i = 0; i < allTokens.length; i++) {
    allTokens[i].addEventListener('click', play)
}


switch play(e) {
    case (player === 'red-player' && e.target.classList.contains('red')) {
        e.target.classList.add('active-red') 
        player = 'active-red-player'       
        break
    case (player === 'active-red-player')
        const reSelectRed = (e) => {
            const activeRed= document.querySelector('.active-red')
            if (activeRed){
            activeRed.classList.remove('active-red')
            player = 'black-player'
            }
        }
        for (let i = 0; i < red.length; i++) {
            red[i].addEventListener('click', reSelectRed)
        }
        break
    case (player === 'black-player'){
        const reSelectBlack = (e) => {
            const activeBlack= document.querySelector('.active-black')
            activeBlack.classList.remove('active-black')
            player === 'active-black-player'
        }
        for (let i = 0; i < black.length; i++) {
            black[i].addEventListener('click', reSelectBlack)
        }
        break
    case (player === 'active-black-player')    
        const selectBlack = (e) => {
            e.target.classList.add(`active-black`) 
        }    
        for (let i = 0; i < black.length; i++) {
            black[i].addEventListener('click', selectBlack)
        }
        break
    }

//     if (player === 'active-red-player'){

//         const activeRed = document.querySelector('.active-red')
//         activeRed.classList.remove('red')
//         activeRed.classList.remove('active-red')
//         e.target.classList.add('red')
//     }
// }








// // if (player === '.active-red-player') {
// //     const moveRedPiece = (e) => {
// //         // e.currentTarget.classList.add('red')
// //         // console.log(e.currentTarget)
// //         // 
// //         // console.log(e.currentTarget)

