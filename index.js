
/*==============starting variables================*/
const allSquares = Array.from(document.querySelectorAll('.light-square'))
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

/*==============variables for gameplay===============*/
const selectRed = (e) => {
    e.target.classList.toggle('active-red') 
    movementLimitationsRed(e.target)
    player = 'red-player'
    console.log(player)
}

const reSelectRed = (e) => {
    const activeRed = document.querySelector('.active-red')
    if (activeRed !== null) {
        activeRed.classList.remove('active-red')
        for (i = 0; i < allSquares.length; i++) {
            allSquares[i].classList.remove('possibilities')
        }
        console.log(player) 
    }
}

const moveRed = (e) => {
    const activeRed = document.querySelector('.active-red')
    if (e.target.classList.contains('red') || e.target.classList.contains('black')){
        e.target.classList.remove('possibilities')
    }   else if (e.target.classList.contains('possibilities')) {
        activeRed.classList.remove('red')
        activeRed.classList.remove('active-red')
            e.target.classList.add('red')
            player = 'black-player'
            console.log(player)
            allSquares.forEach((square) => {
                square.classList.remove('possibilities')
            })
        }    
}

const selectBlack = (e) => {
    e.target.classList.toggle(`active-black`) 
    movementLimitationsBlack(e.target)
    player = 'black-player'
}

const reSelectBlack = (e) => {
    const activeBlack= document.querySelector('.active-black')
    if (activeBlack !== null) {
        activeBlack.classList.remove('active-black')
        console.log(player) 
    }
}

const moveBlack = (e) => {
    console.log(e.target.classList)
    const activeBlack = document.querySelector('.active-black')
    if (e.target.classList.contains('black') || e.target.classList.contains('red')) {
        e.target.classList.remove('possibilities')
    }   else if (e.target.classList.contains('possibilities')) {
        activeBlack.classList.remove('black')
        activeBlack.classList.remove('active-black')
            e.target.classList.add('black')
            player = 'red-player'
            console.log(player)
            allSquares.forEach((square) => {
                square.classList.remove('possibilities')
            })
        }    
}

const movementLimitationsRed = (activeRed) => {
    console.log(activeRed)
    if (player === 'red-player'){
        switch (activeRed.id[1]) {
          case '1':
          break
          case '2' || '3' || '4' || '5' || '6' || '7':
              let left = parseInt(activeRed.id[1]) + 1
              let right = parseInt(activeRed.id[1]) - 1
            switch (activeRed.id[0]) {
                case 'a':
                break
                case 'b':
                    allSquares.find(x => x.id === `a${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `a${right}`).classList.add('possibilities') 
                break
                case 'c':
                    allSquares.find(x => x.id === `b${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `b${right}`).classList.add('possibilities')
                break
                case 'd':
                    allSquares.find(x => x.id === `c${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `c${right}`).classList.add('possibilities')
                break
                case 'e':
                    allSquares.find(x => x.id === `d${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `d${right}`).classList.add('possibilities')
                break
                case 'f':
                    allSquares.find(x => x.id === `e${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `e${right}`).classList.add('possibilities')
                break
                case 'g':
                    allSquares.find(x => x.id === `f${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `f${right}`).classList.add('possibilities')
                break
                case 'h':
                    allSquares.find(x => x.id === `g${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `g${right}`).classList.add('possibilities')

                break
            }
        break    
        case '8':
        break
        }
    }
}

const movementLimitationsBlack = (activeBlack => {
    console.log(activeBlack)
    if (player === 'black-player') {
        switch (activeBlack.id[1]) {
          case '1':
          break
          case '2' || '3' || '4' || '5' || '6' || '7':
              let left = parseInt(activeBlack.id[1]) - 1
              let right = parseInt(activeBlack.id[1]) + 1
            switch (activeBlack.id[0]) {
                case 'a':
                    allSquares.find(x => x.id === `b${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `b${right}`).classList.add('possibilities') 

                break
                case 'b':
                    allSquares.find(x => x.id === `c${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `c${right}`).classList.add('possibilities') 
                break
                case 'c':
                    allSquares.find(x => x.id === `d${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `d${right}`).classList.add('possibilities')
                break
                case 'd':
                    allSquares.find(x => x.id === `e${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `e${right}`).classList.add('possibilities')
                break
                case 'e':
                    allSquares.find(x => x.id === `f${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `f${right}`).classList.add('possibilities')
                break
                case 'f':
                    allSquares.find(x => x.id === `g${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `g${right}`).classList.add('possibilities')
                    console.log('still working!!')
                break
                case 'g':
                    allSquares.find(x => x.id === `h${left}`).classList.add('possibilities') 
                    allSquares.find(x => x.id === `h${right}`).classList.add('possibilities')
                break
                case 'h':
                break
            }
        break    
        case '8':
        break
        }
    }
})

/*==============logic for gameplay===============*/

allSquares.forEach (currentSquare => {
    currentSquare.addEventListener('click', (e) =>{
        if (player === 'red-player' && e.target.classList.contains('red')) { 
            reSelectRed(e)
            selectRed(e)
        } else if (player === 'red-player' && e.target.classList.contains('light-square')) {
            console.log('move red')
            moveRed(e)
        } else if (player === 'black-player' && e.target.classList.contains('black')) {
            reSelectBlack(e)
            selectBlack(e)
        } else if (player === 'black-player' && e.target.classList.contains('light-square')) {
            moveBlack(e)
        }
    })
})
