
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

const markIfUnoccupied = (element) => {
    if (!element.classList.contains('red') && !element.classList.contains('black')){
        element.classList.add('possibilities')
    }
} 

const occupied = (element) => {
    return  (element.classList.contains('red') || element.classList.contains('black'))
}

const movementLimitationsRed = (activeRed) => {
    allSquares.forEach((element) => {
        if (element.classList.contains('possibilities')) element.classList.remove('possibilities')
    })
    console.log(activeRed)
    const row = activeRed.id[0]
    const column = parseInt(activeRed.id[1])
    if (player === 'red-player'){
              let left = column - 1
              let right = column + 1
            switch (row) {
                case 'a':
                    break
                case 'b':
                    if (column > 1) markIfUnoccupied(allSquares.find(x => x.id === `a${left}`)) 
                    if (column < 8) markIfUnoccupied(allSquares.find(x => x.id === `a${right}`))
                    break
                case 'c':{
                    let leftDiagonal = allSquares.find(x => x.id === `b${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `b${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `a${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `a${right+1}`))
                    break
                }
                case 'd': {
                    let leftDiagonal = allSquares.find(x => x.id === `c${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `c${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `b${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `b${right+1}`))
                    break
                }
                case 'e': {
                    let leftDiagonal = allSquares.find(x => x.id === `d${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `d${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `c${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `c${right+1}`))
                    break
                }
                case 'f':{
                    let leftDiagonal = allSquares.find(x => x.id === `e${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `e${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `d${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `d${right+1}`))
                    break
                }
                case 'g':{
                    let leftDiagonal = allSquares.find(x => x.id === `f${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `f${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `e${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `e${right+1}`))
                    break
                }
                case 'h':{
                    let leftDiagonal = allSquares.find(x => x.id === `g${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `g${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `f${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `f${right+1}`))
                    break
                }
            }
    }
}

const movementLimitationsBlack = (activeBlack => {
    allSquares.forEach((element) => {
        if (element.classList.contains('possibilities')) element.classList.remove('possibilities')
    })
    const row = activeBlack.id[0]
    const column = parseInt(activeBlack.id[1])
    if (player === 'black-player') {
              let left = column - 1
              let right = column + 1
            switch (row) {
                case 'a': {
                    let leftDiagonal = allSquares.find(x => x.id === `b${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `b${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `c${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `c${right+1}`))
                    break
                }
                case 'b':{
                    let leftDiagonal = allSquares.find(x => x.id === `c${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `c${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `d${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `d${right+1}`))
                    break
                }
                case 'c': {
                    let leftDiagonal = allSquares.find(x => x.id === `d${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `d${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `e${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `e${right+1}`))
                    break
                }
                case 'd':{
                    let leftDiagonal = allSquares.find(x => x.id === `e${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `e${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `f${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `f${right+1}`))
                    break
                }
                case 'e':{
                    let leftDiagonal = allSquares.find(x => x.id === `f${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `f${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `g${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `g${right+1}`))
                    break
                }
                case 'f': {
                    let leftDiagonal = allSquares.find(x => x.id === `g${left}`)
                    let rightDiagonal = allSquares.find(x => x.id === `g${right}`)
                    if (column > 1)markIfUnoccupied(leftDiagonal)
                    if (column < 8)markIfUnoccupied(rightDiagonal)
                    if (column > 2 && occupied(leftDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `h${left-1}`))
                    if (column < 7 && occupied(rightDiagonal)) markIfUnoccupied(allSquares.find(x => x.id === `h${right+1}`))
                    break
                }
                case 'g':{
                    if (column > 1)markIfUnoccupied(allSquares.find(x => x.id === `h${left}`)) 
                    if (column < 8)markIfUnoccupied(allSquares.find(x => x.id === `h${right}`))
                    break
                }
                case 'h':
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
            moveRed(e)
        } else if (player === 'black-player' && e.target.classList.contains('black')) {
            reSelectBlack(e)
            selectBlack(e)
        } else if (player === 'black-player' && e.target.classList.contains('light-square')) {
            moveBlack(e)
        }
    })
})
