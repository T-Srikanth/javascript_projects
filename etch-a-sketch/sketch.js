const sketch = document.querySelector('.sketch')
let precision = document.querySelector('#precision')
const clear = document.querySelector('#clear')
let units = initGrid()

function initGrid(size=20){
    for(let i=0; i<size*size ; i++) {
        let block = document.createElement('div')
        block.classList.add('unit')
        block.style.width = 500/size + "px"
        block.style.height = 500/size + "px"
        sketch.appendChild(block)
    }
    return document.querySelectorAll('.unit')    

}

function toggleColor(event){
    let tempUnit = event.target
    tempUnit.classList.toggle('color')
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

precision.addEventListener('input', (e) => {
    let temp = e.target.value
    let inputDisplay = document.querySelector('.precisionContainer h3')
    inputDisplay.textContent = `Precision : ${temp}*${temp}`
    removeAllChildNodes(sketch)
    units = initGrid(temp)
    units.forEach(unit => unit.addEventListener('click',toggleColor))
})

units.forEach(unit => unit.addEventListener('click',toggleColor))
clear.addEventListener('click', ()=> {
    units = document.querySelectorAll('.unit')
    units.forEach(unit => unit.classList.remove('color'))
})