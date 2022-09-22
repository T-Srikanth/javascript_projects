// gameboard
const gameboard = {
    selection : []
}
// players
const player = (name, type) => {
    return {name, type}
}
// gameflow
let counter = 0
const displayController = document.querySelectorAll(".box")
const reset = document.querySelector("#reset")
reset.addEventListener("click", resetBoard)
displayController.forEach(element => {
    element.addEventListener("click", addEntry)
})

function checkWin(){
    if(gameboard.selection[0]==gameboard.selection[1] && gameboard.selection[0]==gameboard.selection[2] && gameboard.selection[0]!=undefined){
        alert("Player "+gameboard.selection[0]+" won")
        resetBoard()
    }
    else if(gameboard.selection[0]==gameboard.selection[3] && gameboard.selection[0]==gameboard.selection[6] && gameboard.selection[0]!=undefined){
        alert("Player "+gameboard.selection[0]+" won")
        resetBoard()        
    }
    else if(gameboard.selection[0]==gameboard.selection[4] && gameboard.selection[0]==gameboard.selection[8] && gameboard.selection[0]!=undefined){
        alert("Player "+gameboard.selection[0]+" won")
        resetBoard()        
    }
    else if(gameboard.selection[3]==gameboard.selection[4] && gameboard.selection[3]==gameboard.selection[5] && gameboard.selection[3]!=undefined){
        alert("Player "+gameboard.selection[3]+" won")
        resetBoard()        
    }
    else if(gameboard.selection[6]==gameboard.selection[4] && gameboard.selection[6]==gameboard.selection[2] && gameboard.selection[6]!=undefined){
        alert("Player "+gameboard.selection[6]+" won")
        resetBoard()        
    }
    else if(gameboard.selection[6]==gameboard.selection[7] && gameboard.selection[6]==gameboard.selection[8] && gameboard.selection[6]!=undefined){
        alert("Player "+gameboard.selection[6]+" won")
        resetBoard()        
    }
    else if(counter >= 9){
        alert("it's a tie")
        resetBoard()
    }                
}

function addEntry(){
    if(this.innerText !== "") return
    if(counter % 2 == 0){
        this.innerText = "X"
        gameboard.selection[parseInt(this.id)] = "X"
        counter += 1
        checkWin()
        return
    }
    else {
        this.innerText = "O"
        gameboard.selection[parseInt(this.id)] = "O"
        counter += 1
        checkWin()
        return
    }
}

function resetBoard() {
    counter = 0
    gameboard.selection=[]
    displayController.forEach(element => element.innerText = "")
    return
}